import React from 'react';
import PropTypes from 'prop-types';


function HeaderBar({ column }) {

    return (
      <div
        style={{backgroundColor: column.color}}
        className={"column__header"}
      >
        <h3 className={"column__title"} >{column.name}</h3>
        <p className={"column__limit-info"}>
          {column.limit  < 100 ? `Limit: ${column.limit}` : null}
        </p>
        <p className={"column__limit-error"}>{column.isLimitReached && 'Task limit has been exceeded.'}</p>
      </div>
    );
}

HeaderBar.propTypes = {
  column: PropTypes.object.isRequired,
};
export default HeaderBar;
