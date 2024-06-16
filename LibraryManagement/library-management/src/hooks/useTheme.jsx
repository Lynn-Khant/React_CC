import React, { useContext } from "react";
import { ThemeContext } from "../useContext/ThemeContext";

function useTheme(){
    const context=useContext(ThemeContext);
    if(context===undefined){
        throw Error("Error");
    }

    return context;
}

export {useTheme};