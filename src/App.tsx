////////////////////////////////////////////////////////
//////////////////   IMPORTATIONS   ////////////////////
////////////////////////////////////////////////////////
import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Mask from './components/Mask';

// Contexts importations

import ThemeContextProvider from './contexts/useTheme';
import { ThemeContext } from './contexts/useTheme';

import Home from './Home';
import Error from './Error';

import { Reset } from 'styled-reset';
import styled from 'styled-components';

////////////////////////////////////////////////////////
//////////////////   STYLE COMPONENTS   ////////////////
////////////////////////////////////////////////////////

const GlobalStyle = styled.main`
  background-color: ${props => props.theme.colors.gray1};
  min-height: 100vh;
  min-width: 375px;
  font-family: 'Inter Medium', sans-serif;

a {
  text-transform: none;
  text-decoration: none;
}


  h1 {
    font-size: 2rem;
    font-family: 'Inter Bold', sans-serif;
    font-weight: 900;
    transition: 200ms ease-in-out;
    
    @media screen and (min-width: 700px) {
      transition: 200ms ease-in-out;
       font-size: 3rem;
     }
    @media screen and (min-width: 1028px) {
      transition: 200ms ease-in-out;
       font-size: 4rem;
     }
  }

  h2 {
    font-size: 1.5rem;
    font-family: 'Inter Regular', sans-serif;
    font-weight: 200;

    @media screen and (min-width: 700px) {
      transition: 200ms ease-in-out;
       font-size: 2rem;
     }
    @media screen and (min-width: 1028px) {
      transition: 200ms ease-in-out;
       font-size: 2.5rem;
     }
  }

  h3 {
    font-size: 2rem;
    font-family: 'Inter Medium', sans-serif;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Inter Medium';
    src: url('./assets/fonts/Inter-Medium.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Inter Bold';
    src: url('./assets/fonts/Inter-Bold.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Inter Regular';
    src: url('./assets/fonts/Inter-Regular.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Inter Light';
    src: url('./assets/fonts/Inter-Light.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Mukta Medium';
    src: url('./assets/fonts/Mukta-Medium.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Mukta Bold';
    src: url('./assets/fonts/Mukta-Bold.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Mukta Regular';
    src: url('./assets/fonts/Mukta-Regular.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Mukta Light';
    src: url('./assets/fonts/Mukta-Light.woff2') format('woff2');
  }
`;




////////////////////////////////////////////////////////////
//////////////////   MAIN COMPONENT   //////////////////////
////////////////////////////////////////////////////////////

const App = () => {

  return (

      <ThemeContextProvider>

        <Reset />

        <Content />
  
      </ThemeContextProvider>
  );
}


////////////////////////////////////////////////////////////
////////////////////   SUB COMPONENT   /////////////////////
////////////////////////////////////////////////////////////
const Content = () => {

  const colors = useContext(ThemeContext); 
 
  return (
    <>
        <BrowserRouter>
        <GlobalStyle theme={colors}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </GlobalStyle>
        </BrowserRouter>
    </>
  );
}


export default App;
