
export const loadArrayFromLocalStore = (key: string) => {
    if (!localStorage.getItem(key)) return []
    return JSON.parse(localStorage.getItem(key) || '[]')
}

export const loadFromLocalStore = (key: string) => {
    if (!localStorage.getItem(key)) return null
    return localStorage.getItem(key)

}

export const saveToLocalStorage = (key: string, data: string | null) => {
    if (data) {
        localStorage.setItem(key, data)
    } else {
        localStorage.removeItem(key)
    } 
}