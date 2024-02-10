import { useContext, useState } from 'react';
import styled from 'styled-components';
import jsonData from '../datas/datas.json';
import { ThemeContext } from '../contexts/useTheme';

////////////////////////////////////////////////////////
//////////////////   STYLE COMPONENTS   ////////////////
////////////////////////////////////////////////////////

const MainContainer = styled.div`
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 10px;
    row-gap: 10px;
    padding: 0 40px 0 40px;
    transition: 200ms ease-in-out;
    
    @media screen and (max-width: 700px) {
      justify-content: center;
      margin: 10px 0;
      transition: 200ms ease-in-out;
    }
`;

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
`;

const Option = styled.option`
    color: ${props => props.theme.colors.gray11};
    font-size: 14px;
    font-weight: 500;
`;

const SwitchContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 100%;
`;

const ButtonContainer = styled.button`
    display: flex;
    height: 45px;
    padding: 2px;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.gray8};
`;

const ButtonLeft = styled.div`
    cursor: pointer;
    height: -webkit-fill-available;
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
`;

const ButtonRight = styled.div`
    cursor: pointer;
    height: -webkit-fill-available;
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
`;

const TitleSection = styled.h3`
    color: ${props => props.theme.colors.gray12};
    
    @media screen and (max-width: 800px) {
      display: none;
    }
`;

////////////////////////////////////////////////////////////
//////////////////   MAIN COMPONENT   //////////////////////
////////////////////////////////////////////////////////////

const Filterbar = ({ toggleSelectBox, setToggleSelectBox, changedValue, handleChangedValue  }:any) => {
  
  // Use the hook useToggle to display light or dark mode
  const colors = useContext(ThemeContext);
 
  
  /** 
   * Function to handle the toggle of the button
   */
  const handleToggleButton = () => {
    setToggleSelectBox(!toggleSelectBox);
    handleChangedValue("0");
  };

    /** 
   * Function to handle the selected value of the select box
   */
    const handleSelectedValue = (event:any) => {
      const newValue = event.target.value;
      handleChangedValue(newValue); // Mettre à jour changedValue dans le composant parent
    }

  return (
    <MainContainer>
      {toggleSelectBox ? (
        <Select theme={colors} name={jsonData.FilterBar.selectname} id={jsonData.FilterBar.selectid} onChange={handleSelectedValue} value={changedValue}>
          <Option theme={colors} value="0">Tous les jeux</Option> 
          {jsonData.FilterBar.options2.map((option, index) => (
            <Option theme={colors} key={index} value={option.value}>{option.text}</Option>
          ))}
        </Select>
      ) : (
        <Select theme={colors} name={jsonData.FilterBar.selectname} id={jsonData.FilterBar.selectid} onChange={handleSelectedValue} value={changedValue}>
          <Option theme={colors} value="0">Tous les projets</Option> 
          {jsonData.FilterBar.options.map((option, index) => (
            <Option theme={colors} key={index} value={option.value}>{option.text}</Option>
          ))}
        </Select>
      )}
      <TitleSection theme={colors}>{jsonData.FilterBar.titre}</TitleSection>
      <SwitchContainer theme={colors} onClick={handleToggleButton}>
        <ButtonContainer theme={colors}>
          <ButtonLeft theme={colors} className={!toggleSelectBox ? 'active' : ''}>
            <p>{jsonData.FilterBar.button.textleft}</p>
          </ButtonLeft>
          <ButtonRight theme={colors} className={toggleSelectBox ? 'active' : ''}>
            <p>{jsonData.FilterBar.button.textright}</p>
          </ButtonRight>
        </ButtonContainer>
      </SwitchContainer>
    </MainContainer>
  );
};

export default Filterbar;
