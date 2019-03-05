import React from 'react';

function TodoForm(props) {
    return(
        <div>
            <form onSubmit={props.submitFunction.formSubmitHandler}>
                <input 
                    name="task" 
                    value={props.submitFunction.state.task} 
                    onChange={props.submitFunction.inputChangeHandler} 
                    placeholder="New Task" 
                />
                <button type="submit">Add To List</button>
            </form>
            <form onSubmit={props.submitFunction.clearComplete}>
                <button type="submit">Clear Completed</button>
            </form>
        </div>
    )
}

export default TodoForm;
