import styled from 'styled-components'

export const SidebarWrapper = styled.div`
    padding: 1rem 1rem 1rem 0;
    background-color: ${({ theme }) => theme.background.secondary};
    box-shadow: 6px -3px 6px #00000029;
    max-width: 184px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 0px 24px 0px 0px;
`
export const SidebarButtonsList = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    gap: 1rem;
`
export const ButtonsBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-left: 1rem;
`
