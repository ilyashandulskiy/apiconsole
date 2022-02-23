import React, { useEffect, useState } from "react"; 
import Button from "components/ui/button";
import TextInput from "components/ui/text-input";
import validate from 'libs/validate'
import formInit from "libs/form-init";
import { Iitem, Iresult, Iinput, IinputType } from 'types'
import validateText from "libs/validate-text";

interface Iprops {
    data: Iitem[],
    callback: (data: Iresult) => void,
    isLoading: boolean
}


function Form({ data, callback, isLoading }: Iprops) {

    const [formdata, setFormdata] = useState<Iinput[]>(Array(data.length).fill({}))

    useEffect(() => formInit(data, setFormdata), [])

    const onInput = (index: number, value: string, id: string, required: boolean, type: IinputType) => {
        const newFormdata = [...formdata]

        const newvalue = validateText(value, type)

        newFormdata[index] = { value : newvalue, id, required, error : false };
        setFormdata(newFormdata)
    }

    const onSubmit = () => {
        if (validate(formdata, setFormdata)) {
            const result : Iresult = {};
            formdata.forEach((item : Iinput) => {
                if(item.id) result[item.id] = item.value;
            });
            callback(result)
        }
    }

    const content = data.map((item, index) => {

        if (item.type === 'text' || item.type === 'password') return (
            <TextInput
                isError={formdata[index].error}
                value={formdata[index].value || ''}
                key={item.id}
                type={item.type}
                setValue={value => onInput(index, value, item.id, item.required, item.type)}
                label={item.label}
                required={item.required}
            />
        )

        return (
            <Button
                key={item.id}
                loading={isLoading}
                text={item.label}
                onClick={onSubmit}
            />
        )

    })

    return ( 
        <div className="form">
            {content}
        </div>
     );
}

export default Form;