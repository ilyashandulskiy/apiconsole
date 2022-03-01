export interface Idropdown {
    left: number,
    top: number,
    right: number,
    bottom: number
}

export interface Iinput {
    value: string,
    error: boolean,
    id: string,
    required: boolean
}

export interface Iresult {
    [key: string]: string
}

export interface Iitem {
    type: 'text' | 'submit' | 'password',
    label: string,
    required: boolean,
    id: string,
}

export type IinputType = 'text' | 'password' | 'submit'

export type IrequestOptions = 'execute' | 'copy' | 'remove' | 'preview';

export interface IhistoryItem {
    title: string,
    status: boolean,
    request: string,
    response: string
    id: number
}

export interface Idimension {
    width: number,
    height: number
}