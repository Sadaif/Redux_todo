import React from 'react';
import Footer from './components/Footer';
import VisibleTodoList from './containers/VisibleTodoList';
import AddTodo from './containers/AddTodo';
 
 
 
const App = () => (
  
  <div className="todo-app">
  <h1 className="todo-title">Todo</h1>
  
   <AddTodo />
   <br/>
   <Footer />
   <VisibleTodoList />
  
   
  </div>
  
)

export default App
