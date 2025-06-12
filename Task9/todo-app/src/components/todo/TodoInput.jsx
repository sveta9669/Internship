function TodoInput() {
    return (
        <form action="">
            <div className="added">
                <label className="circle-checkbox">
                    <input type="checkbox" name="done" />
                    <span className="checkMark"> </span>
                </label>
                <input type="text" name="todo" placeholder="Add a new task" />
                <input type="button" name="add" value="+" />
            </div>
        </form>
    )
}

export default TodoInput;