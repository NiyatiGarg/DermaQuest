import React, {useState} from "react";
import { AppContext } from "./AppContext";

const AppContextProvider=({children})=>{

const [pageTheme, setPageTheme]= useState('rgb(246, 180, 144)')

const myths=[
    {
        key:1,
        title:'Skincare is a Part of Makeup',
        explaination:'Skincare focuses on maintaining and improving the health of your skin, while makeup is used to enhance or alter your appearance. They serve different purposes.',
        image:'A makeup brush with a skincare bottle.'
    }, 
    {
        key:2,
        title:'Lemon Juice is Good for Your Skin',
        explaination:'Lemon juice can irritate your skin and cause photosensitivity, leading to burns and pigmentation.',
        image:'A lemon slice with a red cross over it.'
    },
    {
        key:3,
        title:' Natural Ingredients are Always Safe',
        explaination:'Natural ingredients can cause allergic reactions or irritation. Always patch test before using new products.',
        image:'A plant with a caution sign.'
    },
    {
        key:4,
        title:'You Only Need Sunscreen on Sunny Days',
        explaination:'UV rays can penetrate clouds and windows, so it’s important to wear sunscreen every day, regardless of the weather.',
        image:' A sun with a cloud over it.'
    },
    {
        key:5,
        title:'Drinking Water Hydrates Your Skin',
        explaination:'While staying hydrated is important, topical moisturizers are necessary to keep your skin hydrated and healthy.',
        image:'A glass of water with a skin icon'
    },
    {
        key:6,
        title:'Expensive Products are Always Better',
        explaination:'The effectiveness of skincare products depends on their ingredients, not their price. Many affordable products work just as well as expensive ones.',
        image:'A jar of cream with dollar signs around it.'
    },
] 
  

return (
    <AppContext.Provider value={{pageTheme, setPageTheme, myths}}>
    {children}
    </AppContext.Provider>
)
}
export default AppContextProvider;