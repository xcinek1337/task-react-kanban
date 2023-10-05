import React, { useContext } from 'react';
import propTypes from 'prop-types';

import { ButtonContext } from './Task';


function Button({ context, onClick }) {
    const { taskId } = useContext(ButtonContext);


    return (
      <button
        onClick={() => onClick(taskId)}
      >
        {context}
      </button>
    );
}

Button.propTypes = {
    context: propTypes.string.isRequired,
    onClick: propTypes.any,
};

export default Button;
