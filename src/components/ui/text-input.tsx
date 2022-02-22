import React from "react";

interface Iprops {
    label?: string;
    placeholder?: string;
    type?: 'text' | 'password';
    required: boolean,
    setValue: (value: string) => void;
    isError: boolean
}

function TextInput({ setValue, label, placeholder, type = 'text', required, isError }: Iprops) {


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
                placeholder={placeholder}
                className={isError ? 'input input_error' : 'input'} />
        </div>
     );
}

export default TextInput;