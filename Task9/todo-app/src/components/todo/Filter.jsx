import {Link} from 'react-router-dom'

function Filter() {
    return (
        <div className="filter">
            <div id="count"></div>

            <Link to="/all"><div>All</div></Link>
            <Link to="/active"><div>Active</div></Link>
            <Link to="/completed"><div>Completed</div></Link>
            <Link to="/clear"><div>Clear Completed</div></Link>

            {/* <div id="all" onClick={displayItem('all')}>All</div>
            <div id="active" onClick={displayItem('active')}>Active</div>
            <div id="completed" onClick={displayItem('completed')}>Completed</div>
            <div id="clear" onClick={displayItem('clearCompleted')}>Clear Completed</div> */}
        </div>
    )
}

export default Filter;