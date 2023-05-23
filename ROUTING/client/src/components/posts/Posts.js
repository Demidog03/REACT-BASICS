import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PostItem from "../postItem/PostItem";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import Header from "../Header";
import {ThemeContext} from "../../App";


export default function Posts() {
    const [posts, setPosts] = useState([])
    const isAuth = useContext(ThemeContext)
    useEffect( () => {
        getPosts()
    }, [])

    useEffect(() => {
        console.log(posts)
    }, [posts])

    async function getPosts(){
        const response = await axios.get("https://dummyjson.com/posts")
        setPosts(response.data.posts)
    }

    const postItems = posts.map((post) => {
        return <PostItem title={post.title}
                         body={post.body}
                         reactions={post.reactions}
                         tags={post.tags}
                         id={post.id}
                />
    })

    if(isAuth){
        return (
            <>
                <Header/>
                <Box sx={{ flexGrow: 1}} >
                    <Grid container spacing={2}>
                        {postItems}
                    </Grid>
                </Box>
            </>
        );
    }
    else{
        return (
            <>
                <Header/>
                <h2>Please login</h2>
            </>
        )
    }

}
