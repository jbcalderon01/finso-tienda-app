import styled from 'styled-components'

export const ModalContentBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    outline: none;
    box-shadow: 0px 3px 6px #00000029;
    background-color: ${({ theme }) => theme.background.secondary};
    border-radius: 16px;
    border: none;
    padding: 2rem;
    width: 100%;
    max-width: 464px;
`
