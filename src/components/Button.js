import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ButtonContext } from './Task';


function Button({ context, onClick, styles }) {
    const { taskId } = useContext(ButtonContext);

    return (
      <button
        style={styles}
        className={"task__move-btn"}
        onClick={() => onClick(taskId)}
        dangerouslySetInnerHTML={{ __html: context }}
      >
      </button>
    )
}

Button.propTypes = {
    context: PropTypes.string.isRequired,
    onClick: PropTypes.any,
    styles: PropTypes.object.isRequired,
};

export default Button;
