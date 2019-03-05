import React from 'react';

function TodoForm(props) {
    return(
        <div>
            <form onSubmit={props.functions.formSubmitHandler}>
                <input 
                    name="task" 
                    value={props.functions.state.task} 
                    onChange={props.functions.inputChangeHandler} 
                    placeholder="New Task" 
                />
                <button type="submit">Add To List</button>
            </form>
        </div>
    )
}

export default TodoForm;
