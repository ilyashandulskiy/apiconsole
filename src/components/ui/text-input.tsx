import { observer } from "mobx-react-lite";
import React from "react";

interface Iprops {
    label?: string;
    placeholder?: string;
    type?: 'text' | 'password';
    required: boolean,
    setValue: (value: string) => void;
    isError: boolean,
    readonly?: boolean,
    value: string
}

function TextInput({ setValue, label, placeholder, type = 'text', required, isError, readonly, value }: Iprops) {


    return ( 
        <div className="input-container">
            <div className="input-container__header">
                {label ?
                    <p className={isError ?
                            'input-container__label input-container__label_error'
                            :
                            'input-container__label'
                    }>
                        {label}
                    </p> : null}
                {required ? null : <p className="input-container__optional">Опционально</p>}
            </div>
            <input
                onChange={(data: React.ChangeEvent<HTMLInputElement>) =>
                    setValue(data.currentTarget.value)}
                type={type}
                value={value}
                readOnly={readonly}
                placeholder={placeholder}
                className={isError ? 'input input_error' : 'input'} />
        </div>
     );
}

export default observer(TextInput);