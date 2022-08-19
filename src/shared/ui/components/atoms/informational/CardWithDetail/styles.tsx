import styled from 'styled-components'

export const CardWithDetailWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    background-color: ${({ theme }) => theme.background.secondary};
    box-shadow: 0px 3px 6px #00000029;
    width: 144px;
    height: 180px;
    border-radius: 16px;
`
export const Detail = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: ${({ theme }) => theme.font.secondary};
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 0 0 16px 16px;
    font-weight: bold;
    font-size: 14px;
    height: 50px;
`
