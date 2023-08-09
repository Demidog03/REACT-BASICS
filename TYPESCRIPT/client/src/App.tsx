import React, {FC} from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import UsersPage from "./components/UsersPage.tsx";
import TodosPage from "./components/TodosPage.tsx";
import UserItemPage from "./components/UserItemPage.tsx";

const App: FC = () => {

    // return (
    // <div>
    //     <EventsExample/>
    //     <Card variant={CardVariants.primary} width="200px" height="200px" onClick={(message) => console.log(message)}>
    //         <button>Click</button>
    //     </Card>
    // </div>

    return (
        <BrowserRouter>
            <div>
                <Link to="/users">Users</Link>
                <br/>
                <Link to="/todos">Todo List</Link>
            </div>
            <Routes>
                <Route path="/users" element={<UsersPage/>}/>
                <Route path="/users/:id" element={<UserItemPage/>}/>
                <Route path="/todos" element={<TodosPage/>}/>
            </Routes>
        </BrowserRouter>
  );
};

export default App;
