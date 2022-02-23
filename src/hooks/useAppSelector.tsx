import { TypedUseSelectorHook, useSelector } from "react-redux";
import { Istate } from "store/init-state";

const useAppSelector: TypedUseSelectorHook<Istate> = useSelector

export default useAppSelector