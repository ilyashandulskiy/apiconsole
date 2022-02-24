import { IhistoryItem } from "types"
import generateID from "./generate-id"

const uniqueHistory = (history: IhistoryItem[], newItem: IhistoryItem) => {
    const newHistory = [...history].filter(item => item.title !== newItem.title);
    newHistory.unshift({...newItem, id: generateID()})
    return newHistory.slice(0, 15)
}

export default uniqueHistory