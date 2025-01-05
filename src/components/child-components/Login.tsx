////////////////////////////////////////////////////////
//////////////////   IMPORTATIONS   ////////////////////
////////////////////////////////////////////////////////

// React importations
import { useContext } from 'react';

// Contexts importations
import { ThemeContext } from '../../contexts/useTheme';

// Style importations
import styled from 'styled-components';

////////////////////////////////////////////////////////
//////////////////   STYLE COMPONENTS   ////////////////
////////////////////////////////////////////////////////

const Avatar = styled.div`
    width: 78px;
    height: 78px;
    border-radius: 50%;
    background-image: url("./assets/images/PhotoCV_1_mini.webp");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    border: 4px solid ${props => props.theme.colors.gray7};
    filter: grayscale(100%);
`;
const IconLogin = styled.div`
    width: 18px;
    height: 18px;
    svg {
        fill: ${props => props.theme.colors.gray11};
    }
`;
const TextLogin = styled.p`
cursor: pointer;
    font-size: 16px;
    color: ${props => props.theme.colors.gray11};
`;
const IconTextLogin = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;
const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
`;


////////////////////////////////////////////////////////////
//////////////////   MAIN COMPONENT   //////////////////////
////////////////////////////////////////////////////////////

const Login = () => {
    
    // Get the colors from general context
    const colors = useContext(ThemeContext);
    return (
        <>
         <MainContainer>
            {/* Avatar avec rôle d'image et aria-label pour l'accessibilité */}
            <Avatar 
                role="img" 
                aria-label="Photo de profil de l'utilisateur" 
                theme={colors} 
            />
            <IconTextLogin>
                {/* Icone de connexion */}
                <IconLogin theme={colors}>
                    <svg viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.08 13.09L13.67 10.5H4V8.5H13.67L11.08 5.91L12.5 4.5L17.5 9.5L12.5 14.5L11.08 13.09ZM16 0.5C16.5304 0.5 17.0391 0.710714 17.4142 1.08579C17.7893 1.46086 18 1.96957 18 2.5V7.17L16 5.17V2.5H2V16.5H16V13.83L18 11.83V16.5C18 17.0304 17.7893 17.5391 17.4142 17.9142C17.0391 18.2893 16.5304 18.5 16 18.5H2C0.89 18.5 0 17.6 0 16.5V2.5C0 1.39 0.89 0.5 2 0.5H16Z" />
                    </svg>
                </IconLogin>

                {/* Texte de connexion avec rôle de bouton */}
                <TextLogin 
                    theme={colors} 
                    aria-label="Se connecter" 
                >
                    Connexion
                </TextLogin>
            </IconTextLogin>
        </MainContainer>
        </>
    )
}
export default Login;