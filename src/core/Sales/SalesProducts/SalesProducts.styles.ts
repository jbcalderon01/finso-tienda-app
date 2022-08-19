import styled from 'styled-components'
import { motion } from 'framer-motion'

export const SalesProductList = styled.div`
    padding: 1rem;
    display: grid;
    justify-content: space-around;
    grid-template-columns: repeat(auto-fill, 144px);
    gap: 10px;
`
export const FloatSidebarShoppingCart = styled(motion.aside)`
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
`
