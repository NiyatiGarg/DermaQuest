import React, {useState} from "react";
import { AppContext } from "./AppContext";

const AppContextProvider=({children})=>{

const [pageTheme, setPageTheme]= useState('rgb(246, 180, 144)')

return (
    <AppContext.Provider value={{pageTheme, setPageTheme}}>
    {children}
    </AppContext.Provider>
)
}
export default AppContextProvider;