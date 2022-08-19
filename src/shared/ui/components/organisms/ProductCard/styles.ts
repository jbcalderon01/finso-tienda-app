import styled from 'styled-components'

export const ProductCardWrapper = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    gap: 1rem;
`

export const ProductInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0;
    gap: 0.5rem;
    background-color: ${({ theme }) => theme.background.secondary};
    box-shadow: 0px 3px 6px #00000029;
    height: 156px;
    border-radius: 12px;
`
export const ProductImageWrapper = styled.div`
    position: relative;
    width: 96px;
    height: 96px;
`
