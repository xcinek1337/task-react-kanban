import React from 'react';
import PropTypes from 'prop-types';

function Headerbar({ column }) {
    return (
      <div
        style={{
                position: 'relative',
                backgroundColor: 'tomato',
                padding: '10px 50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
      >
        <h3>{column.name}</h3>
        <p style={{ position: 'absolute', right: '5px', top: '-18px' }}>Limit: {column.limit}</p>
      </div>
    );
}

Headerbar.propTypes = {
  column: PropTypes.object.isRequired,
};
export default Headerbar;
