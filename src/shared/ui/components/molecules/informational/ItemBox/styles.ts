import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const Icon = styled(FontAwesomeIcon)`
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
`
