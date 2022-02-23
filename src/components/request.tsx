import React from "react";
import AreaInput from 'components/ui/area-input'
import useAppSelector from "hooks/useAppSelector";
import { REQUEST_TEXT } from "store/types";
import { useDispatch } from "react-redux";

function Requestq() {

    const requestText = useAppSelector(state => state.REQUEST_TEXT)
    const requestStatus = useAppSelector(state => state.REQUEST_STATUS)
    const responseStatus = useAppSelector(state => state.RESPONSE_STATUS)
    const responseText = useAppSelector(state => state.RESPONSE_TEXT)

    const dispatch = useDispatch()

    return ( 
        <div className="request">
            <AreaInput
                value={requestText}
                label="Запрос:"
                isError={requestStatus}
                setValue={(val: string) => dispatch({type: REQUEST_TEXT, payload: val})}
            />
            <div className="dragger">
                <img src="/images/drag-element.png" alt="dragger" className="dragger__image" />
            </div>
            <AreaInput
                readonly
                label="Ответ:"
                isError={responseStatus}
                setValue={() => null}
                value={responseText}
            />
        </div>
     );
}

export default Requestq;