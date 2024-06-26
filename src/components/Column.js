/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

import HeaderBar from './HeaderBar';
import Task from './Task';

function Column({ column, tasks }) {
    return (
        <div className="column">
            <HeaderBar column={column} />
            <Task tasks={tasks} />
        </div>
    );
}

Column.propTypes = {
    column: PropTypes.object.isRequired,
    tasks: PropTypes.array.isRequired,
};

export default Column;
