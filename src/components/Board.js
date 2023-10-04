import React, { useContext } from 'react';
import { ColumnsContext, TasksContext } from '../context/InitContext';
import Column from './Column';

function Board() {
    const columns = useContext(ColumnsContext);
    const tasks = useContext(TasksContext);

    return (
      <ColumnsContext.Provider value={columns}>
        <div>
          <ul style={{ display: 'flex' }}>
            {columns.map((column) => {
                        return <Column
                          key={column.id}
                          column={column}
                          tasks={tasks}
                        />;
                    })}
          </ul>
        </div>
      </ColumnsContext.Provider>
    );
}

export default Board;
