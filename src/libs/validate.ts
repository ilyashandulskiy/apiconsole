import { Iinput } from 'types'

interface Ivalidate {
    (
        formdata: Iinput[],
        setFormdata: {
            (data: Iinput[]) : void
        }
    ) : boolean
}

const validate : Ivalidate = (formdata, setFormdata) => {
    let problems = 0;
    
    formdata.forEach((item : Iinput, index : number) => {
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

export default validate