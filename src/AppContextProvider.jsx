import React, {useState} from "react";
import { AppContext } from "./AppContext";

const AppContextProvider=({children})=>{

const [bgColor, setBgColor]= useState('rgb(246, 180, 144)')

return (
    <AppContext.Provider value={{bgColor, setBgColor}}>
    {children}
    </AppContext.Provider>
)
}
export default AppContextProvider;