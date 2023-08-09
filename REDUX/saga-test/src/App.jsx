import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {asyncDecrementAction, asyncIncrementAction, decrementAction, incrementAction} from "./store/countReducer.js";
import {fetchUsersAction} from "./store/userReducer.js";

function App() {
  const dispatch = useDispatch()
  const count = useSelector(state => state.countReducer.count)
  const users = useSelector(state => state.userReducer.users)

  return (
    <>
      <div>
          <div>
              <h2>{count}</h2>
              <button onClick={() => dispatch(asyncIncrementAction())}>Increment++</button>
              <button onClick={() => dispatch(asyncDecrementAction())}>Decrement--</button>
              <button onClick={() => dispatch(fetchUsersAction())}>Get Users</button>
          </div>
          <div>
              {users.map(user => {
                  return <div>
                      {user.name}
                  </div>
              })}
          </div>

      </div>
    </>
  )
}

export default App
