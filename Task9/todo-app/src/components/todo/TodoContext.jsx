import { createContext, useContext, useEffect, useState } from 'react'
import api from './api'

const TodoContext = createContext()
export const useTodo = () => useContext(TodoContext)

export function TodoProvider({ children }) {

    const [list, setList] = useState([])

    useEffect(() => {
        api.get('/todo')
            .then(res => {
                console.log("Fetched Todos:", res.data);
                setList(res.data);
            })
            .catch(err => console.error("Failed to fetch todos", err));
    }, []);

    return (
        <TodoContext.Provider value={{ list, setList }}>
            {children}
        </TodoContext.Provider>
    )
}