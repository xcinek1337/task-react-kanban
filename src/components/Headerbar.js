import React from 'react';
import propTypes from 'prop-types';

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
  column: propTypes.object.isRequired,
};
export default Headerbar;
