import styled from 'styled-components'
import { motion } from 'framer-motion'

import { TLayoutMainProps } from './types'

export const LayoutMainWrapper = styled.div`
    display: grid;
    grid-template-rows: 128px calc(100% - 128px);
    position: relative;
`

export const HeaderWrapper = styled(motion.div)`
    background-color: ${({ theme }) => theme.colors.primary_variant};
    box-shadow: 0px 3px 6px #00000029;
`
type THeaderContentBox = {
    layout: TLayoutMainProps['layout']
}
export const HeaderContentBox = styled.div<THeaderContentBox>`
    margin-left: 204px;
    transition: 0.2s;
    margin-right: ${({ layout }) => layout === 'twoSidebar' && '184px'};
    text-align: center;
    padding: 2rem;
`
export const HeaderTitleBox = styled.div`
    display: flex;
    padding: 1rem;
    border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.light};
    border-style: none none dashed none;
`
type TChildrenWrapper = {
    $layout: TLayoutMainProps['layout']
}
export const ChildrenWrapper = styled(motion.div)<TChildrenWrapper>`
    margin-left: 184px;
    transition: 0.2s;
    margin-right: ${({ $layout }) => $layout === 'twoSidebar' && '184px'};
`

export const SidebarFloatBox = styled(motion.aside)`
    position: absolute;
    display: flex;
    top: 96px;
    left: 0;
    height: calc(100% - 96px);
    z-index: 2;
`

export const FloatLogoCard = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 1rem;
    top: 10px;
    z-index: 1;
    width: 164px;
    height: 120px;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 6px 3px 6px #00000029;
    border-radius: 0px 24px 0px 0px;
`
