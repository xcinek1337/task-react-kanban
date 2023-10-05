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

        {/* TO JEST KOMENATRZ DO commita z 05.10 'init functions to operate stage' */}
        {/* zastanwiam sie czy jest sens renderowania komponentow Button.js tutaj skoro prosciej byloby mi obslugiwac style (na elemencie button:html) czy przycisk powinien byc widoczny jesli jest w 1 lub 3 kolumnie, ale tak mysle w momencie pisania tego, dzieje sie to samo co wyzej w komentarzu, czyli rozdzielam dlugosc kodu na 2 komponenty, co moze powodowac wieksza czytelnosc */}
            

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
