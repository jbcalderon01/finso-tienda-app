import styled from 'styled-components'

export const LoginWrapper = styled.div`
    display: grid;
    grid-template-columns: 40% 60%;
    height: 100vh;
    overflow: hidden;
`
export const BoxForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.primary};
`
export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    max-width: 304px;
`
export const ImageWrapper = styled.div`
    position: relative;
    bottom: -100px;
    overflow: hidden;
`
