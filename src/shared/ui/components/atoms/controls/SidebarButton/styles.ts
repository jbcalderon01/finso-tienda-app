import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const SidebarButtonWrapper = styled.div<{ active: boolean }>`
    display: flex;
    gap: 1rem;
    padding-right: 1rem;
    box-shadow: none;
    position: relative;
    cursor: pointer;
    color: ${({ theme, active }) => (active ? theme.colors.light : theme.colors.primary)};
    ::before {
        transition: 0.2s;
        display: block;
        content: '';
        position: absolute;
        top: 0;
        width: ${({ active }) => (active ? '100%' : '0px')};
        height: 100%;
        z-index: 0;
        background-color: ${({ theme }) => theme.colors.primary};
        border-radius: 0 16px 16px 0;
        box-shadow: 0px 3px 6px #00000029;
    }
    :hover {
        color: ${({ theme }) => theme.font.light};
        ::before {
            width: 100%;
        }
    }
`

export const ContentBox = styled.div`
    display: flex;
    gap: 1rem;
    padding: 0.5rem 1rem;
    position: relative;
    z-index: 2;
`
export const Icon = styled(FontAwesomeIcon)``
