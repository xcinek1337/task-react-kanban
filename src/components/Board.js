import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Columns from './Columns';
import Navbar from './Navbar';
import TaskFrom from './TaskForm';

const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 5,
};
const errorStyle ={
    position: 'absolute',
    left: '6%',
    top:'3%',
    border:'3px solid tomato',
    zIndex:'22',
    backgroundColor:'#008299',
    color:'red'
}

// docelowo to zmieni miejsce w jakiejs utilities.js
const ColumnsPattern = [
    { id: 1, name: 'ToDo', limit: 4, isLimitReached: false },
    { id: 2, name: 'Doing', limit: 4, isLimitReached: false },
    { id: 3, name: 'Testing', limit: 4, isLimitReached: false },
    { id: 4, name: 'Done2', limit: 999, isLimitReached: false },
];
const exampleTasks = [
    { id: 1, name: 'Task1', idColumn: 1, user: 'Joanna', describe: 'opis taska lorem21' },
    { id: 2, name: 'Task2', idColumn: 1, user: 'Joanna', describe: 'opis taska lorem21' },
    { id: 3, name: 'Task3', idColumn: 1, user: 'Joanna', describe: 'opis taska lorem21' },
];

export const FuncHandlerContext = React.createContext();
export const ColumnsContext = React.createContext();

function Board() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [maxLimitPopup, setMaxLimitPopup] = useState(false)
    const [columns, setColumns] = useState(ColumnsPattern);
    const [tasks, setTasks] = useState(exampleTasks);

    const handleSetTask = (taskData) => {
        const taksWithIdColumn1 = tasks.filter((task) => task.idColumn === 1);

        if (taksWithIdColumn1.length < 4) {
            const newTask = { ...taskData, id: uuidv4() };
            setTasks([...tasks, newTask]);
        } else {
         
            setMaxLimitPopup(true)
            setInterval(() => {
                setMaxLimitPopup(false)
            }, 4000);
        }
    };

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
          {maxLimitPopup && <div style={errorStyle}><p>Limit Tasków w zakładce ToDo został przekroczony</p></div>}         
          {isPopupOpen && 
          <div
            className={"dark"}
            style={overlayStyle}
          >
          </div>}
          {isPopupOpen && <TaskFrom
            closePopup={closePopup}
            handleSetTask={handleSetTask}
                          />}

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
