import { IinputType } from "../types";

const validateText = (text: string, type: IinputType) : string => {

    if (type === 'text') return text

    let result = '';
    text.split('').forEach((char: string) => {
        result += char.replace(/^[\u0400-\u04FF]+$/, '')
    })

    return result

}

export default validateText