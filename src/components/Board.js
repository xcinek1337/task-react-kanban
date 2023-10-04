import React, { useState } from 'react';
import Columns from './Columns';
import Navbar from './Navbar';

const ColumnsPattern = [
    { id: 1, name: 'ToDo', limit: 4 },
    { id: 2, name: 'Doing', limit: 4 },
    { id: 3, name: 'Done', limit: 4 },
];
const example = [
    { id: 1, name: 'Task1', idColumn: 1, user: 'Joanna', describe: 'opis taska lorem21' },
    { id: 2, name: 'Task2', idColumn: 2, user: 'Joanna', describe: 'opis taska lorem21' },
    { id: 3, name: 'Task3', idColumn: 2, user: 'Joanna', describe: 'opis taska lorem21' },
];

export const TasksContext = React.createContext();

function Board() {
    const TaskProvider = TasksContext.Provider;
    const [tasks, setTasks] = useState(example);

    console.log(tasks);

    return (
      <TaskProvider value={tasks}>
        <Navbar />
        <Columns
          column={ColumnsPattern}
          tasks={tasks}
        />
      </TaskProvider>
    );
}

export default Board;
