import React from 'react';

function Todo(props) {

    return (
        <div className={props.completed ? 'complete singleTodo' : 'incomplete singleTodo'} onClick={props.function}>
            <h3>{props.task}</h3>
        </div>

    );
}

export default Todo;