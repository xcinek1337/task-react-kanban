import React, { useState } from 'react';

import Columns from './Columns';
import Navbar from './Navbar';
import TaskFrom from './TaskForm';

const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', 
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 5, 
  };
  
// docelowo to zmieni miejsce w jakiejs utilities.js
const ColumnsPattern = [
    { id: 1, name: 'ToDo', limit: 4, isLimitReached: false },
    { id: 2, name: 'Doing', limit: 4, isLimitReached: false },
    { id: 3, name: 'Done', limit: 4, isLimitReached: false },
    { id: 4, name: 'Done2', limit: 999, isLimitReached: false },
];
const exampleTasks = [
    { id: 1, name: 'Task1', idColumn: 1, user: 'Joanna', describe: 'opis taska lorem21' },
    { id: 4, name: 'Task12', idColumn: 1, user: 'Joanna', describe: 'opis taska lorem21' },
    { id: 2, name: 'Task2', idColumn: 1, user: 'Joanna', describe: 'opis taska lorem21' },
    { id: 3, name: 'Task3', idColumn: 2, user: 'Joanna', describe: 'opis taska lorem21' },
    { id: 5, name: 'Task3w', idColumn: 1, user: 'Joanna', describe: 'opis taska lorem21' },
];

export const FuncHandlerContext = React.createContext();
export const ColumnsContext = React.createContext();

function Board() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [columns, setColumns] = useState(ColumnsPattern);
    const [tasks, setTasks] = useState(exampleTasks);

    const resetLimitReached = () => {
        const updatedColumns = columns.map((column) => {
            return { ...column, isLimitReached: false };
        });
        setColumns(updatedColumns);
    };

    const nextStage = (taskId) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === taskId) {
                const targetColumn = columns.find((column) => column.id === task.idColumn + 1);
                if (getTasksCount(targetColumn.id) < targetColumn.limit) {
                    resetLimitReached();
                    return { ...task, idColumn: task.idColumn + 1 };
                } else {
                    setlimitReached(targetColumn.id);
                }
            }
            return task;
        });

        setTasks(updatedTasks);
    };

    const previousStage = (taskId) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === taskId) {
                const targetColumn = columns.find((column) => column.id === task.idColumn - 1);

                if (getTasksCount(targetColumn.id) < targetColumn.limit) {
                    resetLimitReached();
                    return { ...task, idColumn: task.idColumn - 1 };
                } else {
                    setlimitReached(targetColumn.id);
                }
            }
            return task;
        });

        setTasks(updatedTasks);
    };

    const setlimitReached = (columnId) => {
        const updateColumns = columns.map((column) => {
            if (column.id === columnId) {
                return { ...column, isLimitReached: true };
            }
            return column;
        });

        setColumns(updateColumns);
    };
    const getTasksCount = (idColumn) => {
        const tasksInColumn = tasks.filter((task) => task.idColumn === idColumn);
        return tasksInColumn.length;
    };

    const deleteDoneTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
    };
    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
      <ColumnsContext.Provider value={{ columns }}>
        <FuncHandlerContext.Provider value={{ nextStage, previousStage, deleteDoneTask }}>
          {isPopupOpen && <div style={overlayStyle}></div>}
          {isPopupOpen && <TaskFrom closePopup={closePopup} />}
          <Navbar openPopup={openPopup} />
          <Columns
            columnList={columns}
            tasks={tasks}
          />
        </FuncHandlerContext.Provider>
      </ColumnsContext.Provider>
    );
}

export default Board;
