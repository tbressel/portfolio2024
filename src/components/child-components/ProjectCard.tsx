import styled from 'styled-components';

import { ThemeContext } from '../../contexts/useTheme';
import { useContext } from 'react';
import Tag from './subchild-components/Tag';
import { NavLink } from 'react-router-dom';

const MainContainer = styled.div`
    margin: 60px 0;
    display: flex;
    flex-direction: column;
    
    max-width: 575px;
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
    border-radius: 10px;
    background-color: ${props => props.theme.colors.gray8};
    margin: 20px 0;
    img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
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
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
    margin: 20px 0;
`
const Description = styled.div`
    p {
        font-size: 1.2rem;
        line-height: 24px;
        font-family: 'Mukta Regular';
        color: ${props => props.theme.colors.gray12};
    }
`

interface CardData {
    titre: string;
    soustitre: string;
    image: string;
    leftlinktxt: string;
    rightlinktxt: string;
    leftlinkurl: string;
    rightlinkurl: string;
    tags: TagProps[];
    description: string;
}

interface ProjectCardProps {
    data: CardData;
}

interface TagProps {
    name: string;
    svg: string;
  }
const ProjectCard = (props: ProjectCardProps) => { 

    const colors = useContext(ThemeContext);

    return (
        <MainContainer theme={colors} aria-labelledby="project-card-title">
            <Title theme={colors}>
                <h4 id="project-card-title">{props.data.titre} <span>{props.data.soustitre}</span></h4>
            </Title>

            <Screen theme={colors} aria-live="polite">
                <img 
                    src={`./assets/${props.data.image}`} 
                    alt={`Image du projet ${props.data.titre}`} 
                    role="img" 
                />
            </Screen>

            <Links theme={colors}>
                <NavLink to={props.data.leftlinkurl} target="_blank" aria-label={`Lien vers ${props.data.leftlinktxt}`}>
                    <p>{props.data.leftlinktxt}</p>
                </NavLink>
                <NavLink to={props.data.rightlinkurl} target="_blank" aria-label={`Lien vers ${props.data.rightlinktxt}`}>
                    <p>{props.data.rightlinktxt}</p>
                </NavLink>
            </Links>

            <TagsList theme={colors}>
                {props.data.tags.map((tag, index) => (
                    <Tag key={index} name={tag.name} svg={tag.svg} />
                ))}
            </TagsList>

            <Description theme={colors}>
                <p>{props.data.description}</p>
            </Description>
        </MainContainer>
    )
    }   

export default ProjectCard;