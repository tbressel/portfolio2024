////////////////////////////////////////////////////////
//////////////////   IMPORTATIONS   ////////////////////
////////////////////////////////////////////////////////

// React importations
import React, { createContext, useState } from 'react';


////////////////////////////////////////////////////////////
//////////////////   TYPE INTERFACES    ////////////////////
////////////////////////////////////////////////////////////
type Colors = {
    gray1: string;
    gray2: string;
    gray3: string;
    gray4: string;
    gray5: string;
    gray6: string;
    gray7: string;
    gray8: string;
    gray9: string;
    gray10: string;
    gray11: string;
    gray12: string;
};

////////////////////////////////////////////////////////////
//////////////////   CONTEXT COMPONENT   ///////////////////
////////////////////////////////////////////////////////////

export const ThemeContext = createContext<{ colors: Colors, toggleTheme: () => void }>({

    // Default values
    colors: {
        gray1: '',
        gray2: '',
        gray3: '',
        gray4: '',
        gray5: '',
        gray6: '',
        gray7: '',
        gray8: '',
        gray9: '',
        gray10: '',
        gray11: '',
        gray12: '',
    },
    // Default function
    toggleTheme: () => {}
});


////////////////////////////////////////////////////////////
//////////////////   MAIN COMPONENT   //////////////////////
////////////////////////////////////////////////////////////

const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {

    // Colors for the light theme
    const lightColors = {
        gray1: '#FCFCFC',
        gray2: '#F9F9F9',
        gray3: '#F0F0F0',
        gray4: '#E8E8E8',
        gray5: '#E0E0E0',
        gray6: '#D9D9D9',
        gray7: '#CECECE',
        gray8: '#BBBBBB',
        gray9: '#8D8D8D',
        gray10: '#838383',
        gray11: '#646464',
        gray12: '#202020',
    };

    // Colors for the dark theme
    const darkColors = {
        gray1: '#111111',
        gray2: '#191919',
        gray3: '#222222',
        gray4: '#2A2A2A',
        gray5: '#313131',
        gray6: '#3A3A3A',
        gray7: '#484848',
        gray8: '#606060',
        gray9: '#6E6E6E',
        gray10: '#7B7B7B',
        gray11: '#B4B4B4',
        gray12: '#EEEEEE',
    };

    // State to store the current theme
    const [isLightTheme, setIsLightTheme] = useState(true);

    // Function to toggle the theme
    const toggleTheme = () => {
        setIsLightTheme(prevIsLightTheme => !prevIsLightTheme);
    }

    // Choose the colors depending the actuel one.
    const themeColors = isLightTheme ? lightColors : darkColors;

    return (
        <ThemeContext.Provider value={{ colors: themeColors, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;