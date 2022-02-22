import React, { useEffect, useState } from "react"; 
import Button from "./button";
import TextInput from "./text-input";

interface Iitem {
    type: 'input' | 'submit' | 'password',
    label: string,
    required: boolean,
    id: string,
}

interface Iprops {
    data: Iitem[],
    callback: (data: unknown) => void,
    isLoading: boolean
}

interface Iinput {
    value: string,
    error: boolean,
    id: string,
    required: boolean
}

interface Iresult {
    [key: string]: string
}

function Form({ data, callback, isLoading }: Iprops) {

    const [formdata, setFormdata] = useState<Iinput[]>(Array(data.length).fill({}))

    useEffect(() => {
        const initFormdata = data.map((item: Iitem) =>
            ({ value: '', id: item.id, required: item.required, error: false })
        )
        setFormdata(initFormdata)
    }, [])
    

    const onInput = (index: number, value: string, id: string, required: boolean) => {
        const newFormdata = [...formdata]
        newFormdata[index] = { value, id, required, error : false };
        setFormdata(newFormdata)
    }

    const validate = (array: Iinput[]) => {
        let problems = 0;
        
        array.forEach((item : Iinput, index : number) => {
            if (item.required && item.value.length === 0) {
                problems += 1;
                const newFormdata = [...formdata]
                newFormdata[index].error = true;
                setFormdata(newFormdata)
            }
        });

        if (problems === 0) return true
        return false
    }

    const onSubmit = () => {
        if (validate(formdata)) {
            const result : Iresult = {};
            formdata.forEach((item : Iinput) => {
                if(item.id) result[item.id] = item.value;
            });
            callback(result)
        }
    }

    const content = data.map((item, index) => {

        if (item.type === 'input') return (
            <TextInput
                isError={formdata[index].error}
                key={item.id}
                setValue={value => onInput(index, value, item.id, item.required)}
                label={item.label}
                required={item.required}
            />
        )

        if (item.type === 'password') return (
            <TextInput
                isError={formdata[index].error}
                type="password"
                key={item.id}
                setValue={value => onInput(index, value, item.id, item.required)}
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