import React from 'react';
import Todo from './Todo';

function TodoList(props) {
    return (
        <div>
            {props.list.map((todo, index) => {
                return (
                    <Todo 
                        task={todo.task}
                        completed={todo.completed}
                        key={todo.task} 
                        function={() => props.function(index)}
                    />
                )
            })}
        </div>
    );
}

export default TodoList;