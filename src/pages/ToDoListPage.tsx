import React from "react"
import { Form } from '../components/Form/Form';
import { ToDoList } from "../components/ToDoList/ToDoList";


export const ToDoListPage = () => {
    return (
        <>
            <Form />
            <ToDoList />
        </>
    )
}