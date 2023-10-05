import React from 'react';
import PropTypes from 'prop-types';

function Headerbar({ column }) {
    return (
      <div
        style={{
                backgroundColor: 'tomato',
                padding: '10px 50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
      >
        <h3>{column.name}</h3>
      </div>
    );
}

Headerbar.propTypes = {
  column: PropTypes.object.isRequired,
};
export default Headerbar;
