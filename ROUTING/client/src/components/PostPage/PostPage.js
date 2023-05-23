import {useContext, useEffect, useState} from 'react';
import Grid from "@mui/material/Grid";
import {Stack} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TagItem from "../tagItem/TagItem";
import axios from "axios";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {useNavigate, useParams} from "react-router-dom";
import {useRef} from "react";
import {ThemeContext} from "../../App";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function PostPage() {
    const isAuth = useContext(ThemeContext)
    const params = useParams()
    const navigate = useNavigate()
    const id = params.id
    console.log(id)
    const [post, setPost] = useState({})
    let tagItems

    tagItems = post.tags?.map((tag) =>  {
        return <TagItem>{tag}</TagItem>
    })



    useEffect(() => {
        getPost()
    }, [id])

    useEffect(() => {
        console.log(post)
    }, [post])

    async function getPost(){
        const response = await axios.get("https://dummyjson.com/posts/" + id)
        setPost(response.data)
    }

    function goPrev(){
        let prevId
        console.log(id)
        if(id === "1"){
            prevId=150
        }
        else{
            prevId = Number(id)-1 //prev = 5-1=4
        }
        console.log(prevId)
        navigate("/posts/" + prevId) // /posts/4
    }

    function goNext(){
        let nextId
        console.log(id)
        if(id === "150"){
            nextId=1
        }
        else{
            nextId = Number(id)+1 //prev = 5-1=4
        }
        console.log(nextId)
        navigate("/posts/" + nextId) // /posts/4
    }

    if(isAuth){
        return (
            <Grid item xs={6} md={8} style={{cursor: 'pointer'}}>
                <Item>
                    <div>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <Stack direction="row" spacing={2} justifyContent="center">
                            {tagItems}
                        </Stack>
                        <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
                            <FavoriteBorderIcon color="red"/><span>{post.reactions}</span>
                        </Stack>
                        <Stack direction="row" spacing={2} justifyContent="center">
                            <button onClick={goPrev}>Previous</button>
                            <button onClick={goNext}>Next</button>
                        </Stack>
                    </div>
                </Item>
            </Grid>);
    }
    else{
        return (<h1>Please Login</h1>)
    }
}

export default PostPage;
