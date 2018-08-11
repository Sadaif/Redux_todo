import React from 'react';

const Todo = ({onClick, completed, text}) => (
    <li
    onClick={onClick}
    className={
        completed ?
            'todo todo--completed' :
            'todo'
    }
    >
    <span className="todo__content">
			{text}
		</span>
        </li>
)



export default Todo;