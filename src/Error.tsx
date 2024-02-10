import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "./contexts/useTheme";



const MainComponent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 20px 0;
`;
const Numero = styled.h1`
    font-size: 5rem;
    color: ${props => props.theme.colors.gray12};
`;
const Texte = styled.h2`
    color: ${props => props.theme.colors.gray11};
`;  
const Image = styled.div`
    img {
        width: 100%;
        max-width: 500px;
    }
`;






const Error = () => {

    const colors = useContext(ThemeContext);
    return (
<>
        <MainComponent>
        <Numero theme={colors}>404</Numero>
        <Texte theme={colors}>Link not found</Texte>
       

        <Image>
            <img src="./assets/images/404.png" alt="" />
        </Image>
        </MainComponent>
        </>
    );
    }

export default Error;