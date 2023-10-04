import React from 'react';
import propTypes from 'prop-types';
import Column from './Column';

function Columns({ column, tasks }) {

    // iteruje po tasks metoda filter to mam dostep do iterowania po obiekcie, ale nie mam dostepu do iterowania po column tak jak to ma miejsce nizej, dlatego z tego dostjae  pusta tablice 
    const filteredTasks = tasks.filter((task) => task.idColumn === column.id);
   

    return (
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {column.map((column) => {
          // to juz dziala, bo column jest iterowane poprzez map i mam dostep do kazdego obiektu... ale mam wrazenie ze jest to mniej czyteleniejsze niz jakbym robil to wyzej...
          const filteredTasks = tasks.filter((task) => task.idColumn === column.id)
          return(
            <Column
              key={column.id}
              column={column}
              tasks={filteredTasks}
            />
          )}
            )}
      </div>
    );
}

Columns.propTypes = {
    column: propTypes.array.isRequired,
    tasks: propTypes.array.isRequired,
};

export default Columns;
