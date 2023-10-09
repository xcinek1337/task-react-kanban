import React, { useContext } from 'react';
import Button from './Button';

import { Kanban } from './Board';
import { ButtonContext } from './Task';


function Buttons() {
    const { nextStage, previousStage, columns} = useContext(Kanban);
    const { idColumn } = useContext(ButtonContext);
   

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
      <div className={"task__move-btns"}>
        <Button
          styles={prevBtnStyles}
          context={'&#8592;'}
          onClick={handleClickPrevious}
        />
        <Button
          styles={nextBtnStyles}
          onClick={handleClickNext}
          context={'&#8594;'}
        />
      </div>
    );
}

export default Buttons;
