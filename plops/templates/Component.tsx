import React from 'react';

export interface {{pascalCase name}}Props {
	title: string;
}

const {{pascalCase name}} = (props: {{pascalCase name}}Props) => {
	return (
		<div className="{{pascalCase name}}">
			{props.title}
		</div>
	);
};

export default {{pascalCase name}};