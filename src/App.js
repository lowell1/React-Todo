import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    // this.state = {todos: []};
    // console.log(localStorage.getItem("todos"))
    const todosStorage = JSON.parse(localStorage.getItem("todos"))
    this.state = {todos: todosStorage ? todosStorage : []};
  }

  addTodo = (newTodo) => {
    this.setState({...this.state, todos: [...this.state.todos, newTodo]});
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
    
//    for(var key in  localStorage.getItem("todos")) {
//      console.log(localStorage.getItem("todos"));
  //  }
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
