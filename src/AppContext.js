// AppContext.js

import React, { createContext, useState, useContext } from 'react';

// Create a context object
export const AppContext = createContext()


// // Create a provider component
// export const AppProvider = ({ children }) => {
//   const [bgColor, setBgColor] = useState('rgb(246, 180, 144)'); // Default background color

//   // Define the initial state and functions to update state here
//   const states = {
//     bgColor,
//     setBgColor,
//   };

//   // Provide the context to its children components
//   return <AppContext.Provider value={states}>{children}</AppContext.Provider>;
// };
