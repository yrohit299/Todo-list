import React, { useState } from 'react';
import { Todo } from '../../App';
import TodoList from '../TodoList/TodoList';

const AddTodo = () => {
	const [todo, setTodo] = useState<Todo[]>([])
	const [text, setText] = useState<string>('');

	const handleText = (event: React.ChangeEvent<HTMLInputElement>) => {
		setText(event.target.value);
	}

	const addTodo = () => {
		const newTodo: Todo = {
			id: Date.now(),
			text: text,
			completed: false,
		};
		setTodo([...todo, newTodo]);
		setText('');
	}
	const deleteTodo = (id: number) =>{
		setTodo(todo.filter((x)=> x.id!== id ));
	}

	const onToggle = (id: number) => {
		setTodo(prevTodos =>
			prevTodos.map(todo => {
			  if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			  }
			  return todo;
			})
		  );
	}
	return (<>
		<div className="addTodoContainer">
			<input
				className='inputTodo'
				type="text"
				value={text}
				onChange={(event) => handleText(event)}
			/>
			<button className='todoAddButton' onClick={addTodo}>Add</button>
		</div>
		<TodoList title='Todo List' todoList={todo} onDelete={(id:number) =>deleteTodo(id)} onToggle={(id:number) =>onToggle(id)}/>
		</>
	);
};

export default AddTodo;