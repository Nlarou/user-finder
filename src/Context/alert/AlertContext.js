import { createContext,useReducer } from "react";
import AlertReducer from "./AlertReducer";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
    const initialState = null

    const [state,dispatch] = useReducer(AlertReducer,initialState)

    const setAlert = (msg,type) => {
        dispatch({
            type: "SET_ALERT",
            payload: {msg,type}
        })
        setTimeout(() => {
            dispatch({
                type: "CLEAR_ALERT"
            })
        },9999999)
    }
    const clearAlert = ()=>{
        dispatch({
            type: "CLEAR_ALERT"
        })

    }


    return( <AlertContext.Provider value={{ alert:state,setAlert,clearAlert}}>
    {children}
    </AlertContext.Provider>)
    
}

export default AlertContext;