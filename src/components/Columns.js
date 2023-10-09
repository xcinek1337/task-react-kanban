import React from 'react';
import propTypes from 'prop-types';
import Column from './Column';

function Columns({ columnList, tasks }) {
    return (
      <main className={"main__kanban"} >
        {columnList.map((column) => {
                const filteredTasks = tasks.filter((task) => task.idColumn === column.id);
                return (
                  <Column
                    key={column.id}
                    column={column}
                    tasks={filteredTasks}
                  />
                )
            })}
      </main>
    );
}

Columns.propTypes = {
    columnList: propTypes.array.isRequired,
    tasks: propTypes.array.isRequired,
};

export default Columns;
