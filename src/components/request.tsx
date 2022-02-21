import React from "react";
import AreaInput from './ui/area-input'

function Requestq() {
    return ( 
        <div className="request">
            <AreaInput label="Запрос:" />
            <div className="dragger">
                <img src="/images/drag-element.png" alt="dragger" className="dragger__image" />
            </div>
            <AreaInput label="Ответ:" />
        </div>
     );
}

export default Requestq;