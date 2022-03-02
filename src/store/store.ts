import { Idropdown, IhistoryItem } from "types";
import { loadArrayFromLocalStore, loadFromLocalStore, saveToLocalStorage } from "libs/localstore";
import { createContext, useContext } from "react";
import { makeAutoObservable } from "mobx";
import uniqueHistory from "libs/unique-history";

export interface Istore {
    historyDropDown: null | Idropdown,
    auth: null | string,
    userdata: {
        account: string,
        sublogin: string,
    } | null,
    requestText: string,
    requestStatus: boolean,
    responseText: string,
    responseStatus: boolean,
    requestPending: boolean,
    history: IhistoryItem[],
    selectedItem: number,
    lastResponse: boolean,
    historyCopyAlert: Idropdown | null,

    setHistoryDropDown(payload: Idropdown | null): void,
    setAuth(payload: string | null): void,
    setUserdata(payload: {
        account: string,
        sublogin: string,
    }): void,
    setRequestText(payload: string): void,
    setRequestStatus(payload: boolean): void,
    setResponseText(payload: string): void,
    setResponseStatus(payload: boolean): void,
    setRequestPending(payload: boolean): void,
    setHistory(payload: IhistoryItem): void,
    setSelectedItem(payload: number): void,
    setLastResponse(payload: boolean): void,
    setHistoryCopyAlert(payload: Idropdown): void,
    removeHistoryItem: () => void,
    clearHistory: () => void
}

const store = makeAutoObservable<Istore>({
    historyDropDown: null,
    auth: loadFromLocalStore('AUTH'),
    userdata: null,
    requestStatus: false,
    requestText: '',
    responseText: '',
    responseStatus: false,
    requestPending: false,
    history: loadArrayFromLocalStore('HISTORY'),
    selectedItem: 0,
    lastResponse: false,
    historyCopyAlert: null,

    setHistoryDropDown(payload) {
        store.historyDropDown = payload
    },
    setAuth(payload) {
        store.auth = payload;
        saveToLocalStorage('AUTH', payload)
    },
    setUserdata(payload: {
        account: string,
        sublogin: string,
    }) {
        store.userdata = payload
    },
    setRequestText(payload) {
        store.requestText = payload
    },
    setRequestStatus(payload) {
        store.requestStatus = payload
    },
    setResponseText(payload) {
        store.responseText = payload
    },
    setResponseStatus(payload) {
        store.responseStatus = payload
    },
    setRequestPending(payload) {
        store.requestPending = payload
    },
    setHistory(payload) {
        store.history = uniqueHistory(store.history, payload);
        saveToLocalStorage('HISTORY', JSON.stringify(store.history))
    },
    setSelectedItem(payload) {
        store.selectedItem = payload
    },
    setLastResponse(payload) {
        store.lastResponse = payload
    },
    setHistoryCopyAlert(payload) {
        store.historyCopyAlert = payload
    },
    removeHistoryItem() {
        store.history.splice(store.selectedItem, 1);
        saveToLocalStorage('HISTORY', JSON.stringify(store.history))
    },
    clearHistory() {
        store.history = []
        saveToLocalStorage('HISTORY', '[]')
    }
})

export const StoreContext = createContext(store)

export const useStore = () => (
    useContext<typeof store>(StoreContext)
)

export default store