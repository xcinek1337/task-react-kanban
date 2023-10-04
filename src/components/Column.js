/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

import Headerbar from './Headerbar';
import Task from './Task';

function Column({ column, tasks }) {
  
    return (
        <div style={{ border: '1px solid black' }}>
            <Headerbar column={column} />
            <Task tasks={tasks} />
        </div>
    );
}

Column.propTypes = {
    column: PropTypes.object.isRequired,
    tasks: PropTypes.array.isRequired,
};

export default Column;
