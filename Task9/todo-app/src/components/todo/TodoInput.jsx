import { useState, useEffect } from 'react';
import { useTodo } from './TodoContext.jsx';
import api from './api.js'

function TodoInput() {
    const { list, setList } = useTodo()
    const [id, setId] = useState()
    const [text, setText] = useState('')
    const [done, setDone] = useState(false)

    useEffect(() => {
        api.get('/todo').then(res => setId(res.data.length + 1));
    }, [text, done])

    const handelAdd = async (e) => {

        e.preventDefault()
        if (!text.trim()) return;

        const item = {
            id: `${id}`,
            text: text.trim(),
            done,
        };

        try {
            const res = await api.post('/todo', item);
            setList([...list, res.data])
            setText('')
            setId()
            setDone(false)
        } catch (err) {
            console.error('Failed to add todo:', err);
        }
    };

    return (
        <form onSubmit={handelAdd} method="post">
            <div className="added">
                <label className="circle-checkbox">
                    <input type="checkbox" name="done"
                        checked={done}
                        onChange={(e) => setDone(e.target.checked)} />
                    <span className="checkMark"> </span>
                </label>
                <input type="text" name="todo" placeholder="Add a new task"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <input type="submit" name="add" value="+" />
            </div>
        </form>
    )
}

export default TodoInput;