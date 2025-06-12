import { memo, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import api from './api.js'

const TodoItem = memo(({ item, onEdit, onDelete, onChange }) => {
    return (
        <div className='added item' key={item.id}>
            <label className="circle-checkbox">
                <input type="checkbox" name="done" defaultChecked={!!item.done} />
                <span className="checkMark" onClick={() => onChange(item.id)}> </span>
            </label>
            <input type="text" name="todo" value={item.text} readOnly />
            <button className="edit-btn" onClick={() => onEdit(item.id)}>✏️</button>
            <input type="button" name="delete" value="X" onClick={() => onDelete(item.id)} />
        </div>
    )
})

function TodoItems({ filter }) {

    const navigate = useNavigate();
    const [list, setList] = useState([])

    useEffect(() => {
        api.get('/todo').then(res => setList(res.data));
    }, [])

    // console.log(list)

    const handleEdit = (id) => {
        console.log('Edit item with id:', id);
    };

    const handleDelete = (id) => {
        let newList = list.filter((item) => item.id !== id)
        setList(newList)
        api.delete(`/todo/${id}`);
    };

    const handleChange = async (id) => {

        const res = await api.get(`/todo/${id}`);
        const updated = { ...res.data, done: !res.data.done };
        await api.put(`/todo/${id}`, updated);

        setList((prevList) =>
            prevList.map(item => item.id === id ? updated : item)
        );

    }

    useEffect(() => {
        if (filter === "clear") {
            let newList2 = []
            for (const element of list) {
                if (!!element.done) {
                    api.delete(`/todo/${element.id}`);
                } else {
                    newList2.push(element)
                }
            }
            setList(newList2)
            navigate('/all');
        }
    }, [filter])

    const filteredList = list.filter(item => {
        if (filter === "all") return true;
        if (filter === "active") return !item.done;
        if (filter === "completed") return item.done;
        return true;
    });
    // console.log(list)
    return (
        <div className="todoList">
            {filteredList.map((item) => (
                <TodoItem key={item.id} item={item} onChange={handleChange} onEdit={handleEdit} onDelete={handleDelete}></TodoItem>
            ))}
        </div>
    )
}

export default TodoItems;