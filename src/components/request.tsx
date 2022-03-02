import React from "react";
import AreaInput from 'components/ui/area-input'
import Resizeable from "components/resizeable";
import { useStore } from "store/store";
import { observer } from "mobx-react-lite";

function Requestq() {

    const { requestText, requestStatus, responseStatus, responseText, lastResponse, setRequestText } = useStore()

    return ( 
        <div className="request">
            <Resizeable
                firstField={
                    <AreaInput
                        value={requestText}
                        label="Запрос:"
                        isError={requestStatus}
                        setValue={(val: string) => setRequestText(val)}
                    />
                }
                secondField={
                    <AreaInput
                        readonly
                        label={lastResponse ? 'Последний ответ:' : 'Ответ:'}
                        isError={responseStatus}
                        setValue={() => null}
                        value={responseText}
                    />
                }
            />
            
        </div>
     );
}

export default observer(Requestq);