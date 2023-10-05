import React, { useContext } from 'react';
import Button from './Button';

import { FuncHandlerContext } from './Board';
import { ButtonContext } from './Task';

function Buttons() {
    const { nextStage, previousStage } = useContext(FuncHandlerContext);
    const { idColumn } = useContext(ButtonContext);
    console.log(idColumn);

    const handleClickNext = (takskId) => {
        // tu pewnie if sprawdjacy czy miesci sie w limicie albo w boardzie, bo tam mam dostep do ifnormacji o stanie
        nextStage(takskId);
    };
    const handleClickPrevious = (takskId) => {
        // tu pewnie if sprawdjacy czy miesci sie w limicie albo w boardzie, bo tam mam dostep do ifnormacji o stanie
        previousStage(takskId);
    };

    const prevBtnStyles = {
        visibility: idColumn > 1 ? 'visible' : 'hidden',
    };
    const nextBtnStyles = {
        visibility: idColumn === 3 ? 'hidden' : 'visible',
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
