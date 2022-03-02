import { observer } from "mobx-react-lite";
import React from "react";

interface Iprops {
    label?: string,
    placeholder?: string,
    readonly?: boolean,
    value: string,
    setValue: (value: string) => void,
    isError: boolean
}

function AreaInput({ label, placeholder, readonly, setValue, value, isError}: Iprops) {


    return ( 
        <div className="input-container area-container">
            <div className="input-container__header">
                {label ?
                    <p className={isError ?
                            'input-container__label input-container__label_error'
                            :
                            'input-container__label'
                    }>
                        {label}
                    </p> : null}
            </div>
            <textarea
                readOnly={readonly}
                placeholder={placeholder}
                className={isError ? 'input area input_error' : 'input area'}
                value={value}
                onChange={(data: React.ChangeEvent<HTMLTextAreaElement>) => setValue(data.currentTarget.value)}
            />
        </div>
     );
}

export default observer(AreaInput);