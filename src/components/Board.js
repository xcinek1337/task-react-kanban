import React, { useState } from 'react';
import Columns from './Columns';
import Navbar from './Navbar';

// docelowo to zmieni miejsce w jakiejs utilities.js
const ColumnsPattern = [
    { id: 1, name: 'ToDo', limit: 4, inStock: 0 },
    { id: 2, name: 'Doing', limit: 4, inStock: 0 },
    { id: 3, name: 'Done', limit: 4, inStock: 0 },
    { id: 4, name: 'Done2', limit: 'X', inStock: 0 },
];
const example = [
    // { id: 1, name: 'Task1', idColumn: 1, user: 'Joanna', describe: 'opis taska lorem21' },
    // { id: 4, name: 'Task12', idColumn: 3, user: 'Joanna', describe: 'opis taska lorem21' },
    // { id: 2, name: 'Task2', idColumn: 2, user: 'Joanna', describe: 'opis taska lorem21' },
    // { id: 3, name: 'Task3', idColumn: 2, user: 'Joanna', describe: 'opis taska lorem21' },
    // { id: 5, name: 'Task3w', idColumn: 1, user: 'Joanna', describe: 'opis taska lorem21' },
];

export const FuncHandlerContext = React.createContext();
export const ColumnsContext = React.createContext();

function Board() {
    const [columns, setColumns] = useState(ColumnsPattern);
    const [tasks, setTasks] = useState(example);

    const nextStage = (taskId) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === taskId) {
                return { ...task, idColumn: task.idColumn + 1 };
            }
            return task;
        });
        
      
        // tu musze napisac cos co bedzie sprawdzac ile taskow znajduje sie w kolumnie i ma zwracac liczbe taskow w kolumnie, a pozniej bedzie to returnowal z tablica columnPatern tylko zmienie instock === ilosc taskow w kolumnie

        // setColumns(newColumnState);

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

    const testCreateTask = () => {
        // narazie sztywny test na szybko, tylko chce testowac implemetnacje limitow

        // if (columns[0].inStock === 4) {
        //     alert('limit to 4 taski w jednym czasie!!!');
        // } else {
        //     const hardTask = { id: 3, name: 'Task3', idColumn: 1, user: 'Joanna', describe: 'opis taska lorem21' };
        //     example.push(hardTask);
        //     setTasks([...example]);

        //     const newColumnState = columns.map((column) => {
        //         if (column.id === 1) {
        //             return { ...column, inStock: column.inStock + 1 };
        //         }
        //         return column;
        //     });
        //     setColumns(newColumnState);
        // }
    };

    return (
      <ColumnsContext.Provider value={{ ColumnsPattern }}>
        <FuncHandlerContext.Provider value={{ nextStage, previousStage, testCreateTask }}>
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
