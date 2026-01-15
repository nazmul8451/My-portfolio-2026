"use client"
import { createContext } from "react";


export const context = createContext()

export const ContextProvider = ({children})=>{

    const value = {
        name : 'rimon'
    }

    return <>

        <context.Provider value={value}>
            {children}
        </context.Provider>
    </>
}