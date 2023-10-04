import React, { useContext } from 'react';
import { ColumnsContext } from '../context/InitContext';
import Column from './Column';

function Board() {
    const columns = useContext(ColumnsContext);

    return (
      <ColumnsContext.Provider value={columns}>
        <div>
            <ul style={{ display: 'flex' }}>
                {columns.map((column) => {return <Column key={column.id} column={column} />})}
                
            </ul>
        </div>
      </ColumnsContext.Provider>
    );
}

export default Board;
