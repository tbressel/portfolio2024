import { styled } from "styled-components"

const Mask = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 999;
`

const MessageContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    text-align: center;
    color: white;
`
const Message = styled.div`
    h1 {
        font-size: 3rem;
        font-family: 'Inter Bold', sans-serif;
        font-weight: 900;
        transition: 200ms ease-in-out;
    }
    p {
        font-size: 1.5rem;
        font-family: 'Inter Regular', sans-serif;
        font-weight: 200;
    }
`

const MaskComponent = () => {
    return (
        <>

            <MessageContainer>
                <Message>
                    <h1>Portfolio en cours de reconstrution</h1>
                    <p>Work in progress ;)</p>
                </Message>


            </MessageContainer>
            <Mask />
        </>
    );
};

export default MaskComponent;
