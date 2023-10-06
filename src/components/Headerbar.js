import React from 'react';
import PropTypes from 'prop-types';


function HeaderBar({ column }) {

    return (
      <div
        style={{
                position: 'relative',
                backgroundColor: 'tomato',
                padding: '10px 50px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
      >
        <h3>{column.name}</h3>
        <p style={{ position: 'absolute', right: '5px', top: '-18px' }}>
          {column.limit  < 100 ? `Limit: ${column.limit}` : null}
        </p>
        <h4 style={{color: 'red'}}>{column.isLimitReached && 'Limit zadan w kolumnie został przekroczony'}</h4>
      </div>
    );
}

HeaderBar.propTypes = {
  column: PropTypes.object.isRequired,
};
export default HeaderBar;
