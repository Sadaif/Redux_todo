import React from 'react';
import Todo from './Todo';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group' 

const TodoList = ({todos, toggleTodo}) => (
    
        <ReactCSSTransitionGroup
			className="todo-list"
			component="ul"
			transitionName="todo" 
			transitionEnterTimeout={750} 
			transitionLeaveTimeout={750}
		>
        {todos.map(todo =>
        <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
        />
        )}
        </ReactCSSTransitionGroup>
         
)

 

export default TodoList;