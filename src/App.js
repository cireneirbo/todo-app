import React, { Component } from 'react';
import Todos from './components/todo/Todos';
import './App.css';

class App extends Component{
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: true
      },
      {
        id: 2,
        title: 'Jump on the trampoline',
        completed: false
      },
      {
        id: 3,
        title: 'Decimate the rat infestation',
        completed: false
      }
    ]
  }

  //toggle complete
  toggleComplete = (id) => {
    this.setState({ 
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      }) 
    });    
  }

  //delete todo
  deleteTodo = (id) => {
    this.setState({ 
      todos: [...this.state.todos.filter(todo => todo.id !== id)] 
    });
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
