
import styled from "styled-components";

import { useContext } from 'react';
import { ThemeContext } from '../../../contexts/useTheme';

interface TagProps {
    name: string;
    svg: string;
}


const TagContainer = styled.div`
margin: 10px 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
    row-gap: 10px;
    padding: 5px;
    border-radius: 10px;
    border: 1px solid ${props => props.theme.colors.gray7};
    background-color: ${props => props.theme.colors.gray5};
    
    p {
        font-family: 'Mukta Light';
        font-size: 12px;
        font-weight: 900;
        color: ${props => props.theme.colors.gray12};
    }

    svg {
        width: 20px;
        height: auto;
    }

`;
const Tag = (props: TagProps) => {

    const colors = useContext(ThemeContext);
    return (
        <TagContainer theme={colors}>
             <div dangerouslySetInnerHTML={{ __html: props.svg }} />
             <p>{props.name}</p>
        </TagContainer>
    )
}

export default Tag;