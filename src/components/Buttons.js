import React, { useContext } from 'react';
import Button from './Button';

import { FuncHandlerContext } from './Board';

//zastanawiam sie czy ten komponent, to nie jest przekombinowanie, ale w sumie handlery od clickow nie powiekszaja kodu w task.js
function Buttons() {
    const { nextStage, previousStage } = useContext(FuncHandlerContext);

    const handleClickNext = (takskId) => {
        nextStage(takskId);
    };
    const handleClickPrevious=(takskId)=>{
        previousStage(takskId)

    }

    return (
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>

            {/* TO JEST KOMENATRZ DO commita z 05.10 */}

        <Button
          context={'<='}
          onClick={handleClickPrevious}
        />
        <Button
          onClick={handleClickNext}
          context={'=>'}
        />
      </div>
    );
}

export default Buttons;
