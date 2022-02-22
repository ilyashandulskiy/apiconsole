

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