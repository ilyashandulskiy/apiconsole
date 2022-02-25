import { IhistoryItem } from "types"
import generateID from "./generate-id"
import formatJSON from "./format-json";

const uniqueHistory = (history: IhistoryItem[], newItem: IhistoryItem) => {
    const newHistory = [...history].filter(item => formatJSON(item.request, false) !== formatJSON(newItem.request, false));
    newHistory.unshift({...newItem, id: generateID()})
    return newHistory.slice(0, 15)
}

export default uniqueHistory