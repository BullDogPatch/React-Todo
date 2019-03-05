import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const currentList = [
  {
    task: "Eat Chicken",
    completed: false
  },{
    task: "Eat Pizza",
    completed: false
  }
]

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      list: currentList,
      task: ''
    }
  }

  inputChangeHandler = event => {
    this.setState({ task: event.target.value });
  };

  formSubmitHandler = event => {
    event.preventDefault();
    let newTask = {
      task: this.state.task,
      completed: false
    }
    this.setState(prevState => {
      return {
        list: [...prevState.list, newTask],
        task: ''
      };
    });
  };

  render() {
    return (
      <div>
        <TodoList list={this.state.list}/>
          <div>
            <TodoForm functions={this}/>
          </div>
      </div>

    );
  }
}

export default App;
