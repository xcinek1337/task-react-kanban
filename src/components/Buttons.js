import React, { useContext } from 'react';
import Button from './Button';

import { FuncHandlerContext } from './Board';
import { ButtonContext } from './Task';
import { ColumnsContext } from './Board';

function Buttons() {
    const { nextStage, previousStage } = useContext(FuncHandlerContext);
    const { idColumn } = useContext(ButtonContext);
    const { columns } = useContext(ColumnsContext);

    const handleClickNext = (takskId) => {
        nextStage(takskId);
    };
    const handleClickPrevious = (takskId) => {
      previousStage(takskId)
    };

    const prevBtnStyles = {
        visibility: idColumn > 1 ? 'visible' : 'hidden',
    };
    const nextBtnStyles = {
        visibility: idColumn === columns.length ? 'hidden' : 'visible',
    };

    return (
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Button
          styles={prevBtnStyles}
          context={'<='}
          onClick={handleClickPrevious}
        />
        <Button
          styles={nextBtnStyles}
          onClick={handleClickNext}
          context={'=>'}
        />
      </div>
    );
}

export default Buttons;
