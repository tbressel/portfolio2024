////////////////////////////////////////////////////////
//////////////////   IMPORTATIONS   ////////////////////
////////////////////////////////////////////////////////


import styled from "styled-components";


// Contexts importations
import { ThemeContext } from '../contexts/useTheme';


// React importations
import { useContext } from 'react';
import { useState } from "react";




////////////////////////////////////////////////////////
//////////////////   STYLE COMPONENTS   ////////////////
////////////////////////////////////////////////////////

const MainContainer = styled.div`
    margin: 60px 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 10px;
    row-gap: 10px;
    padding: 40px;
    transition: 200ms ease-in-out;
    
    @media screen and (max-width: 700px) {
      justify-content: center;
      margin: 10px 0;
      transition: 200ms ease-in-out;
}


`
const Select = styled.select`
    padding: 10px;
    border-radius: 10px;
    border: 2px solid ${props => props.theme.colors.gray8};
    background-color: ${props => props.theme.colors.gray2};
    color: ${props => props.theme.colors.gray12};
    font-family: 'Inter Bold';
    font-size: 14px;
    height: 48px;
    font-weight: 500;
    cursor: pointer;

    &:focus {
        outline: none;
    }
`
const Option = styled.option`
    color: ${props => props.theme.colors.gray11};
    font-size: 14px;
    font-weight: 500;
`
const SwitchContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 100%;
`
const SwitchText = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 5px;

    p {
      color : ${props => props.theme.colors.gray12};
    }
`
const ButtonContainer = styled.div`
    display: flex;
    height: 45px;
    padding: 2px;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.gray8};
`
const ButtonLeft = styled.div`
   cursor: pointer;
    display: flex;
    padding: 3px 10px;
    border-radius: 7px;

    &.active {
        border: 0.5px solid ${props => props.theme.colors.gray8};
        background: ${props => props.theme.colors.gray1};
        &>p{
          font-family: 'Inter Bold';
        }
    }

p {
    display: flex;
    width: fit-content;
    min-width: max-content;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-size: 14px;
    font-family: 'Inter Light';
    color: ${props => props.theme.colors.gray12};
}
`
const ButtonRight = styled.div`
   cursor: pointer;
   display: flex;
    padding: 3px 10px;
    border-radius: 7px;
    
    &.active {
      border: 0.5px solid ${props => props.theme.colors.gray8};
      background: ${props => props.theme.colors.gray1};
      &>p{
        font-family: 'Inter Bold';
      }
    }
    
    p {
      display: flex;
      width: fit-content;
      min-width: max-content;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      font-size: 14px;
      font-family: 'Inter Light';
      font-weight: 100;
      color: ${props => props.theme.colors.gray12};
    }
    `

const TitleSection = styled.h3`
    color: ${props => props.theme.colors.gray12};
    
    @media screen and (max-width: 800px) {
      display: none;
      
    }

`
////////////////////////////////////////////////////////////
//////////////////   MAIN COMPONENT   //////////////////////
////////////////////////////////////////////////////////////
const Filterbar = () => {

  // Get the colors from general context
  const colors = useContext(ThemeContext);

  const [toggleButton, setToggleButton] = useState(true);

  const handleToggleForm = () => {
    setToggleButton(!toggleButton);
  };

  return (
    <MainContainer>
      <Select theme={colors} name="project" id="project">
        <Option theme={colors} value="1">Tous les projets</Option>
        <Option theme={colors} value="2">Landing pages</Option>
        <Option theme={colors} value="3">Sites internet</Option>
        <Option theme={colors} value="4">Extentions Wordpress</Option>
      </Select>


    <TitleSection theme={colors}>Mes Projets</TitleSection>


      <SwitchContainer theme={colors} onClick={handleToggleForm}>

        <ButtonContainer theme={colors}>

          <ButtonLeft theme={colors} className={toggleButton ? 'active' : ''}>
            <p>Projets web</p>
          </ButtonLeft>

          <ButtonRight theme={colors} className={toggleButton ? '' : 'active'}>
            <p>Jeux vidéos</p>
          </ButtonRight>

        </ButtonContainer>

      </SwitchContainer>
    </MainContainer>
  )

}

export default Filterbar;