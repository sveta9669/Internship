import { Link, useParams } from 'react-router-dom'
import { TodoProvider } from './TodoContext';
import './Todo.css'
import TodoItems from './TodoItems'
import TodoInput from './TodoInput'
import Filter from './Filter'

function TodoContent() {
    const { filter } = useParams()
    return (
        <>
            <Link to="/music"><h1>Go To Music Page</h1></Link>
            <main className='todoPageMain'>
                <section>
                    <div className="header">
                        <h1>TODO</h1>
                    </div>
                    <TodoInput />
                    <TodoItems filter={filter} />
                </section>

                <section>
                    <Filter />
                </section>

            </main>
        </>
    )
}
export default function Todo() {
    return (
        <TodoProvider>
            <TodoContent />
        </TodoProvider>
    )
}
