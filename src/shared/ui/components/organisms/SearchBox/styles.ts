import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyledSearchBox = styled(motion.div)`
    display: flex;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 0px 0px 16px 0px;
    padding: 1rem;
    background-color: ${({ theme }) => theme.background.secondary};
`
export const IconSearch = styled(FontAwesomeIcon)`
    color: ${({ theme }) => theme.colors.primary};
`
