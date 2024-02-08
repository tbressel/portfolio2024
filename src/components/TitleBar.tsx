
////////////////////////////////////////////////////////
//////////////////   IMPORTATIONS   ////////////////////
////////////////////////////////////////////////////////

import Links from './child-components/Links';
import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/useTheme';

const Title = styled.h1`
 color: ${props => props.theme.colors.gray12};
`
const Subtitle = styled.h2`
    color: ${props => props.theme.colors.gray11};
`

const MainContainer = styled.div`
    margin: 60px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px 20px;
    transition: 200ms ease-in-out;

@media screen and (max-width: 400px) {
    transition: 200ms ease-in-out;
    text-align: center;
    margin: 10px 0;
}


        @media screen and (max-width: 1028px) {
            flex-direction: column;
        }
`;  

const MainInfos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 5px 20px;
    row-gap: 15px;
    transition: 200ms ease-in-out;

    @media screen and (max-width: 400px) {
    transition: 200ms ease-in-out;
    row-gap: 0px;
    align-items: center;        
    }
`;

const Photo = styled.div`
    display: none;
    transition: 200ms ease-in-out;
    
    @media screen and (min-width: 1028px) {
        display: block;
        min-width: 350px;
        min-height: 350px;
        border-radius: 50%;
        background-image: url("./assets/images/image.jpg");
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
        border: 4px solid ${props => props.theme.colors.gray7};
        filter: grayscale(100%);
        box-shadow: ${props => props.theme.colors.gray11} -70px 50px 150px 10px ;
        transition: 200ms ease-in-out;
    }
    `;
////////////////////////////////////////////////////////////
//////////////////   MAIN COMPONENT   //////////////////////
////////////////////////////////////////////////////////////
const TitleBar = () => {

    const colors = useContext(ThemeContext); 
    return (
        <MainContainer>
            <MainInfos >
            <Title theme={colors}>Thomas Bressel</Title>
            <Subtitle theme={colors}>Développeur web Fullstack</Subtitle>
            <Links />
            </MainInfos>

            <Photo theme={colors}></Photo>
        </MainContainer>
    );
}

export default TitleBar;