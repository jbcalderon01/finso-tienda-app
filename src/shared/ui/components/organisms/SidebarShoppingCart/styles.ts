import styled from 'styled-components'

export const SidebarShoppingCartWrapper = styled.div`
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 24px 0px 0px 0px;
    background-color: ${({ theme }) => theme.background.secondary};
    width: 184px;
    height: 100%;
    display: flex;
    flex-direction: column;
`
export const BalanceBox = styled.div`
    height: 204px;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 24px 0px 0px 0px;
    background-color: ${({ theme }) => theme.background.secondary};
`
export const SellItemsBox = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    background-color: ${({ theme }) => theme.background.primary};
`

export const SidebarTitleBox = styled.div`
    display: flex;
    justify-content: center;
    padding: 2rem 0;
    text-align: center;
    font-size: 16px;
    padding: 2rem 1rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
`
export const SellBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1rem;
    gap: 1rem;
    width: 100%;
    height: 188px;
    box-shadow: 0px -3px 6px #00000029;
    background-color: ${({ theme }) => theme.background.secondary};
`
export const TotalBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 2px solid ${({ theme }) => theme.colors.primary};
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    border-style: dashed none dashed none;
    padding: 0.5rem 0;
    background-color: ${({ theme }) => theme.background.primary};
`
