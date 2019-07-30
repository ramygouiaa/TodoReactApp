import React, { Component } from 'react';
import Todos from "./Todos";
import AddTodo from "./AddTodo";

class App extends Component {

  state = {
    todos: [
      { id: 1, content: 'buy some milk' },
      { id: 2, content: 'play mario Kart' }
    ]
  }

  deleteTodo = (id) => {
    //console.log(id);
    const todos = this.state.todos.filter(todo => {
      return id !== todo.id
    })

    this.setState({
      //todos:todos
      todos //if the key and value have same name ES6
    })

  }

  addTodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos,todo]
    this.setState({
      todos
    })

  }

  render(){
    return (
      <div className = "todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos = {this.state.todos} deleteTodo = {this.deleteTodo}/>
        <AddTodo addTodo = {this.addTodo}/>
      </div>
    )
  }
}

export default App;
