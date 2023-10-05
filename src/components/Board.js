import React, { useState } from 'react';
import Columns from './Columns';
import Navbar from './Navbar';

// docelowo to zmieni miejsce w jakiejs utilities.js
const ColumnsPattern = [
    { id: 1, name: 'ToDo', limit: 4 },
    { id: 2, name: 'Doing', limit: 4 },
    { id: 3, name: 'Done' },
];
const example = [
    { id: 1, name: 'Task1', idColumn: 1, user: 'Joanna', describe: 'opis taska lorem21' },
    { id: 4, name: 'Task12', idColumn: 3, user: 'Joanna', describe: 'opis taska lorem21' },
    { id: 2, name: 'Task2', idColumn: 2, user: 'Joanna', describe: 'opis taska lorem21' },
    { id: 3, name: 'Task3', idColumn: 2, user: 'Joanna', describe: 'opis taska lorem21' },
];

export const FuncHandlerContext = React.createContext();
export const ColumnsContext = React.createContext();

function Board() {
    const [tasks, setTasks] = useState(example);

    const nextStage = (taskId) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === taskId) {
                return { ...task, idColumn: task.idColumn + 1 };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const previousStage = (taskId) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === taskId) {
                return { ...task, idColumn: task.idColumn - 1 };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    return (

      <ColumnsContext.Provider value={ColumnsPattern}>
        <FuncHandlerContext.Provider value={{ nextStage, previousStage }}>
          <Navbar />
          <Columns
            columnList={ColumnsPattern}
            tasks={tasks}
          />
        </FuncHandlerContext.Provider>
      </ColumnsContext.Provider>
    );
}

export default Board;
