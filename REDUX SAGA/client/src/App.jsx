import { useState } from 'react'
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {POST_ACTIONS} from "./redux/reducers/postReducer.js";

function App() {
    const {pending, error, posts, success} = useSelector(state => state)
    const dispatch = useDispatch()
    function getPosts(){
        dispatch({type: POST_ACTIONS.FETCH_POSTS_REQUEST})
    }
  return (
    <>
      <div>
            <button onClick={getPosts}>Get All Posts</button>
          {pending && <h2>loading...</h2>}
          {error && <h2>{error}</h2>}
          <div>
              {posts.map((post, index) => <h2 key={post.id}>{++index}. {post.title}</h2>)}
          </div>

      </div>
    </>
  )
}

export default App
