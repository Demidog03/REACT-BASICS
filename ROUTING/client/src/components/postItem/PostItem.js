import {useContext} from 'react';
import Grid from "@mui/material/Grid";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import TagItem from "../tagItem/TagItem";
import {Stack} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {useNavigate} from "react-router-dom";
import {ThemeContext} from "../../App";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function PostItem({title, body, reactions, tags, id}) {
    const navigate = useNavigate()

    const isAuth = useContext(ThemeContext)


    const tagItems = tags.map((tag) => {
        return <TagItem>{tag}</TagItem>
    })

    function openPost(){
        navigate("/posts/" + id)
    }

    return (
        <Grid item xs={6} md={8} style={{cursor: 'pointer'}} onClick={openPost} >
            <Item>
                <div>
                    <h2>{title}</h2>
                    <p>{body}</p>
                    <Stack direction="row" spacing={2} justifyContent="center">
                        {tagItems}
                    </Stack>
                    <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
                        <FavoriteBorderIcon color="red"/><span>{reactions}</span>
                    </Stack>
                </div>
            </Item>
        </Grid>

    );
}

export default PostItem;
