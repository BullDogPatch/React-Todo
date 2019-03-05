import React from 'react';

function Todo(props) {
    return (
        <div className="single-todo">
            <h3>{props.task}</h3>
        </div>

    );
}

export default Todo;