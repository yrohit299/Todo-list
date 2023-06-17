import React, { useState } from 'react';
import { Todo } from '../../App';
import { MdDeleteOutline } from 'react-icons/md';
import { TiTick, TiTickOutline } from 'react-icons/ti';

export interface TodoListProps {
	title: string;
	todoList: Todo[];
	onDelete: any;
	onToggle: any;
}

const TodoList = (props: TodoListProps) => {

	return (
		<div className="TodoList">
			<h3>{props.title}</h3>
			<div>
				<ul>
					{props.todoList.map(item => {
						return <li
							key={item.id}
							className='liList'
						>
							{item.text}
							<span className='actionButtons'>
								<span className='deleteButton' onClick={() => props.onDelete(item.id)}><MdDeleteOutline /></span>
								<span className='toggelButton' onClick={() => props.onToggle(item.id)}>{item.completed ? <TiTick /> : <TiTickOutline />}</span>
							</span>
						</li>
					})}
				</ul>
			</div>
		</div>
	);
};

export default TodoList;