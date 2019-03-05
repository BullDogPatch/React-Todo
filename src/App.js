import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

//todo  list App. 
class App extends React.Component {
  constructor(){
    super();

    //set initial state and input menu
    this.state = {
      list: [],
      task: ''
    }
  }

    //handles input changes on input form. sets the state.task to whatever input form value is.
  inputChangeHandler = event => {
    this.setState({ task: event.target.value });
  };

    //handles form submissions on submit. creates a newTask object with current input field value. pushes the task to the state.list and resets the task to empty.
  formSubmitHandler = event => {
    event.preventDefault();
    let newTask = {
      task: this.state.task,
      completed: false,
      id: Date.now()
    }
    this.setState(prevState => {
      return {
        list: [...prevState.list, newTask],
        task: ''
      };
    });
  };

  //this is an onclick function for each individual todo task. 
  completeTask = i => {
    this.setState(prevState => {
      //maps through the current list of todos using the item and index.
      const list = prevState.list.map((item, j) => {
        //checks if the todo task clickd on matches the current index in the array. if so, creates a new Task object, and flips the "completed" boolean value and returns it to map function. else, it just returns the existing item. 
        if(j === i) {
          let newTask = {
            task: item.task,
            completed: !item.completed,
            id: item.id
          }
          return newTask
        } else {
          return item
        }
      });
      
      //after mapping, returns the complete list (we are in setState)
      return {
        list,
      };
    })
  };

  clearComplete = event => {
    event.preventDefault();
    this.setState(prevState => {
      const list = prevState.list.filter(item => {
        return !item.completed
      })
      return {
        list,
      };
    })
  };

  render() {
    return (
      <div>
        <TodoList list={this.state.list} function={this.completeTask}/>
          <div>
            <TodoForm submitFunction={this}/>
          </div>
      </div>

    );
  }
}

export default App;
