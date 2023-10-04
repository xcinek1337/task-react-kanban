/* eslint-disable react/prop-types */
import React from 'react';

import Task from './Task';

function Column(props) {
    const { column } = props;

    const filteredTask = column

    return (
    
            <div>
                <h3>{column.name}</h3>
                <ul>
                   
                </ul>
            </div>

    );
}

export default Column;





