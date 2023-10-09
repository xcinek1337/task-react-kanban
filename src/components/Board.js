import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Columns from './Columns';
import Navbar from './Navbar';
import TaskFrom from './TaskForm';

export const Kanban = React.createContext();
const ColumnsPattern = [
    { id: 1, name: 'ToDo', limit: 4, isLimitReached: false, color: '#F48998' },
    { id: 2, name: 'Doing', limit: 4, isLimitReached: false, color: '#F4E789' },
    { id: 3, name: 'Testing', limit: 4, isLimitReached: false, color: '#89F48F' },
    { id: 4, name: 'Done', limit: 999, isLimitReached: false, color: '#89E3F4' },
];

function Board() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [maxLimitPopup, setMaxLimitPopup] = useState(false);
    const [columns, setColumns] = useState(ColumnsPattern);
    const [tasks, setTasks] = useState([]);

  
    const saveTasksToLocalStorage = (tasks) => {
        localStorage.setItem('kanbanTasks', JSON.stringify(tasks));
    };

    const loadTasksFromLocalStorage = () => {
        const savedTasks = localStorage.getItem('kanbanTasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    };

   
    useEffect(() => {
        const loadedTasks = loadTasksFromLocalStorage();
        setTasks(loadedTasks);
    }, []);

    const handleSetTask = (taskData) => {
        const tasksWithIdColumn1 = tasks.filter((task) => task.idColumn === 1);

        if (tasksWithIdColumn1.length < 4) {
            const newTask = { ...taskData, id: uuidv4() };
            const newTasks = [...tasks, newTask];
            setTasks(newTasks);
            saveTasksToLocalStorage(newTasks); 
            setMaxLimitPopup(true);
            setTimeout(() => {
                setMaxLimitPopup(false);
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
        saveTasksToLocalStorage(updatedTasks); 
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
        saveTasksToLocalStorage(updatedTasks); 
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
        saveTasksToLocalStorage(updatedTasks)
    };
    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
      <Kanban.Provider value={{ columns, nextStage, previousStage, deleteDoneTask }}>
        <div
          className={'error-new-task'}
          style={{ top: maxLimitPopup ? '3%' : '-30%' }}
        >
          <p>reached the maximum number of tasks </p>
        </div>
        {isPopupOpen && <div className={'dark-background'}></div>}
        {isPopupOpen && <TaskFrom
          closePopup={closePopup}
          handleSetTask={handleSetTask}
                        />}
        <Navbar openPopup={openPopup} />
        <Columns
          columnList={columns}
          tasks={tasks}
        />
      </Kanban.Provider>
    );
}

export default Board;
