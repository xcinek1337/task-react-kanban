// ./src/context/InitContext.js
import React from 'react';

const columns = [
	{ id: 1, name: 'Pending', limit: 4 },
	{ id: 2, name: 'inProgress', limit: 4 },
	{ id: 3, name: 'Done', limit: 4 },
];

const tasks = [
	{ id: 1, name: 'Task1', idColumn: 1, user: 'Joanna', describe: 'opis taska lorem21' },
	{ id: 2, name: 'Task2', idColumn: 1, user: 'Joanna', describe: 'opis taska lorem21' },
	{ id: 3, name: 'Task3', idColumn: 1, user: 'Joanna', describe: 'opis taska lorem21' },
];

const ColumnsContext = React.createContext(columns);
const TasksContext = React.createContext(tasks);

export  { ColumnsContext, TasksContext };
