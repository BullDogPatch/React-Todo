import React from 'react';
import Todo from './Todo';

function TodoList(props) {
    return (
        <div>
            {props.list.map(todo => {
                return <Todo task={todo.task} key={todo.task} />
            })}
        </div>
    );
}

export default TodoList;