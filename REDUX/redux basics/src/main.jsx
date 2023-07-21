/** PART 1 - REDUX BASICS **/
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createStore} from "redux";
import {Provider} from "react-redux";
import {store} from "./redux/store.js";


// const action = {type: "", payload: "?"}
/*TYPE - НАЗВАНИЕ МЕТОДА: addMoney, removeMoney, getData*/
/*payload - addMoney(amount) -> amount===payload*/


// accessToken, refreshToken
// email, password
// accessToken = "sdgdsgjbsdkgbkds5164g5d1gs" -> срок годности=1 день
// refreshToken -> accessToken -> срок годности=2 дня

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
)
