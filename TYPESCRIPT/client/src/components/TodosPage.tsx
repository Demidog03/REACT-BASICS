import {FC, useEffect, useState} from 'react';
import {ITodo} from "../types/types.ts";
import axios from "axios";
import List from "./List.tsx";
import TodoItem from "./TodoItem.tsx";

const TodosPage: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        fetchTodos()
    }, []);


    async function fetchTodos(){
        try{
            const response = await axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos?_limit=10")
            setTodos(response.data)
        }catch (err){
            alert(err)
        }
    }

    return (
        <div>
            <List items={todos} renderItem={(todo) => <TodoItem todo={todo} key={todo.id}/>}/>
        </div>
    );
};

export default TodosPage;
