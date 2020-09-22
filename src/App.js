import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/todo/Todos';
import AddTodo from './components/todo/AddTodo';
import About from './components/pages/About';
import axios from 'axios';
import './App.css';



class App extends Component{
  //acting like backend/database
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(response => this.setState({ todos: response.data }));
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(this.setState({ 
        todos: [...this.state.todos.filter(todo => todo.id !== id)] 
    }));
  }

  //Add todo
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: title,
      completed: false
    }).then(response => this.setState({ 
      todos: [...this.state.todos, response.data] 
    }));
  }

  //render webpage/App components
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
            
          </div>
        </div>
      </Router>
      
    );
  }
}

export default App;
