import styled from 'styled-components';

import { ThemeContext } from '../../contexts/useTheme';
import { useContext } from 'react';
import Tag from './subchild-components/Tag';

const MainContainer = styled.div`
    margin: 60px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    max-width: 375px;
   min-width: 275px;

    padding: 20px;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.gray2};
    box-shadow: 0px 0px 10px 0px ${props => props.theme.colors.gray8};
`   
const Title = styled.div`
    h4 {
        font-size: 24px;
        font-family: 'Mukta Bold';
        color: ${props => props.theme.colors.gray12};
        margin-bottom: 10px;
    }
    span {
        font-size: 20px;
        font-family: 'Mukta Bold';
        color: ${props => props.theme.colors.gray11};
    }
`
const Screen = styled.div`
    width: 100%;
    height: 300px;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.gray8};
    margin: 20px 0;
`
const Links = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    p {
        font-size: 16px;
        font-family: 'Inter Bold';
        color: ${props => props.theme.colors.gray11};
        border-bottom: 2px solid ${props => props.theme.colors.gray11};
        cursor: pointer;
    }
`
const TagsList = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin: 20px 0;
`
const Description = styled.div`
    p {
        font-size: 14px;
        line-height: 24px;
        font-family: 'Mukta Regular';
        color: ${props => props.theme.colors.gray12};
    }
`




const ProjectCard = () => { 

    const colors = useContext(ThemeContext);

    return (
        <MainContainer theme={colors}>
            <Title theme={colors}>
                <h4>Datadunk <span>Coach Interface</span></h4>
            </Title>

            <Screen theme={colors}>

            </Screen>

            <Links theme={colors}>
                <p>LIVE DEMO</p>
                <p>SEE ON GITHUB</p>
            </Links>
            
            <TagsList theme={colors}>
                <Tag tag={'PHP'}/>
                <Tag tag={'Javascript'}/>
                <Tag tag={'HTML'}/>
                <Tag tag={'CSS'}/>
                <Tag tag={'MySQL'}/>
                <Tag tag={'Apache'}/>
            </TagsList>

            <Description theme={colors}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Description>
        </MainContainer>
    )
    }   

export default ProjectCard;