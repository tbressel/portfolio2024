import styled from "styled-components";
import jsonData from '../../datas/datas.json';

import { useContext } from 'react';
// Contexts importations
import { ThemeContext } from '../../contexts/useTheme';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { NavLink } from "react-router-dom";




const MainContainer = styled.div`
    margin: 10px 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 10px;
    row-gap: 10px;

    @media screen and (min-width: 1028px) {
      margin: 60px 0; 
    }
`;

const LinkContainer = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    width: fit-content;
    height: fit-content;
    border-radius: 20px;
    background-color: ${props => props.theme.colors.gray5};
    border: 2px solid ${props => props.theme.colors.gray7};
    transition: 200ms ease-in-out;

    &:hover {
      transition: 200ms ease-in-out;
        background-color: ${props => props.theme.colors.gray8};
    }
`;

const LinkIcon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    
   
    svg {
      width: 24px;
      height: 24px;
        fill: ${props => props.theme.colors.gray12};
    }
`;

const LinkText = styled.div`
    display: flex;
    align-items: center;
    padding: 0 20px;
    color: ${props => props.theme.colors.gray12};
`;


const Links = () => {

  // Get the colors from general context
  const colors = useContext(ThemeContext);
  return (
    <>
      <MainContainer>
        {(jsonData.Links.contact.display === "true") ? (
          <LinkContainer theme={colors}>
            <LinkIcon theme={colors}>
              <div dangerouslySetInnerHTML={{ __html: jsonData.Links.contact.svg }} />
            </LinkIcon>
            <LinkText theme={colors}>
              <CopyToClipboard text={jsonData.Links.contact.text}>
                <span className='clickInput' onClick={() => { alert('Email copié dans le presse papier') }}>
                  {jsonData.Links.contact.text}
                </span>
              </CopyToClipboard>

            </LinkText>
          </LinkContainer>
        ) : null}

        {(jsonData.Links.cv.display === "true") ? (
          <NavLink to={jsonData.Links.cv.link} target="_blank">
            <LinkContainer theme={colors}>
              <LinkIcon theme={colors}>
                <div dangerouslySetInnerHTML={{ __html: jsonData.Links.cv.svg }} />
              </LinkIcon>
              <LinkText theme={colors}>
                <p>
                  {jsonData.Links.cv.text}
                </p>
              </LinkText>
            </LinkContainer>
          </NavLink>
        ) : null}
        {(jsonData.Links.linkedin.display === "true") ? (
          <NavLink to={jsonData.Links.linkedin.link} target="_blank">
            <LinkContainer theme={colors}>
              <LinkIcon theme={colors}>
                <div dangerouslySetInnerHTML={{ __html: jsonData.Links.linkedin.svg }} />
              </LinkIcon>
              <LinkText theme={colors}>
                <p>
                  {jsonData.Links.linkedin.text}
                </p>
              </LinkText>
            </LinkContainer>
          </NavLink>
        ) : null}

        {(jsonData.Links.github.display === "true") ? (
          <NavLink to={jsonData.Links.github.link} target="_blank">
            <LinkContainer theme={colors}>
              <LinkIcon theme={colors}>
                <div dangerouslySetInnerHTML={{ __html: jsonData.Links.github.svg }} />
              </LinkIcon>
              <LinkText theme={colors}>
                <p>
                  {jsonData.Links.github.text}
                </p>
              </LinkText>
            </LinkContainer>
          </NavLink>
        ) : null}

      </MainContainer>
    </>
  );
}


export default Links;