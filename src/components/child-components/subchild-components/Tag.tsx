
import styled from "styled-components";

import { useContext } from 'react';
import { ThemeContext } from '../../../contexts/useTheme';

const TagContainer = styled.div`
margin: 10px 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 10px;
    row-gap: 10px;
    padding: 5px;
    border-radius: 10px;
    border: 1px solid ${props => props.theme.colors.gray7};
    background-color: ${props => props.theme.colors.gray5};
    
    p {
        font-family: 'Mukta Light';
        font-size: 12px;
        color: ${props => props.theme.colors.gray12};
    }

`;
const Tag = (props: { tag: string }) => {

    const colors = useContext(ThemeContext);
    return (
        <TagContainer theme={colors}>
            <p>{props.tag}</p>
        </TagContainer>
    )
}

export default Tag;