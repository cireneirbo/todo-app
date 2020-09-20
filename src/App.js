import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/todo/Todos';
import AddTodo from './components/todo/AddTodo';
import './App.css';


class App extends Component{
  //acting like backend/database
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

  //render webpage/App components
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo />
          <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo} />
        </div>
      </div>
    );
  }
}

export default App;
