import { memo, useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { useTodo } from './TodoContext.jsx';
import api from './api.js'

const TodoItem = memo(({ item, onDelete, onChange }) => {

    const { list, setList } = useTodo()
    const [editable, setEditable] = useState(false);
    const [text, setText] = useState(item.text);
    const inputRef = useRef();

    useEffect(() => {
        if (editable && inputRef.current) {
            inputRef.current.focus();
        }
    }, [editable]);

    const handleEdit = async () => {
        if (editable) {
            const updatedItem = { ...item, text };
            await api.put(`/todo/${item.id}`, updatedItem);

            setList(list.map(i => i.id === item.id ? updatedItem : i));
        }

        setEditable(!editable);
    };
    return (
        <div className='added item' key={item.id}>
            <label className="circle-checkbox">
                <input type="checkbox" name="done" defaultChecked={!!item.done} />
                <span className="checkMark" onClick={() => onChange(item.id)}> </span>
            </label>
            <input type="text" name="todo"
                ref={inputRef} value={text}
                onChange={(e) => setText(e.target.value)}
                readOnly={!editable} />

            <button className="edit-btn" onClick={handleEdit}>{editable ? '✅' : '✏️'}</button>
            <input type="button" name="delete" value="X" onClick={() => onDelete(item.id)} />
        </div>
    )
})

function TodoItems({ filter }) {

    const navigate = useNavigate();

    const { list, setList } = useTodo()

    useEffect(() => {
        api.get('/todo').then(res => setList(res.data));
    }, [])

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

    return (
        <div className="todoList">
            {filteredList.map((item) => (
                <TodoItem key={item.id} item={item} onChange={handleChange} onDelete={handleDelete}></TodoItem>
            ))}
        </div>
    )
}

export default TodoItems;