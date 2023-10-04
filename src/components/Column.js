/* eslint-disable react/prop-types */
import React from 'react';

import Task from './Task';

function Column({ column, tasks }) {
    const filteredTasks = tasks.filter((task) => task.idColumn === column.id);

    return (
        <div style={{marginRight: '100px'}}>
            <h3>{column.name}</h3>
            <ul>
                {filteredTasks.map((filteredTask) => (
                    <Task key={filteredTask.id} task={filteredTask} />
                ))}
            </ul>
        </div>
    );
}

export default Column;





