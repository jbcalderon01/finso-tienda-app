import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box } from '@mui/system'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { AnimatePresence } from 'framer-motion'

import { ROUTES } from '../../../../../constants'
import { Image, Title } from '../../../atoms'
import { Sidebar } from '../../../organisms'

import {
    ChildrenWrapper,
    FloatLogoCard,
    HeaderContentBox,
    HeaderTitleBox,
    HeaderWrapper,
    LayoutMainWrapper,
    SidebarFloatBox,
} from './styles'
import { TLayoutMainProps } from './types'

export const LayoutMain: FC<TLayoutMainProps> = ({ children, pageTitle, currentPage, layout, mounted }) => {
    // Hooks
    const router = useRouter()

    return (
        <LayoutMainWrapper>
            <HeaderWrapper animate={{ y: '0' }} initial={{ y: '-150px' }} transition={{ type: 'just', delay: 0.8 }}>
                <HeaderContentBox layout={layout}>
                    <HeaderTitleBox>
                        {router.pathname.split('/').length > 2 && (
                            <FontAwesomeIcon cursor="pointer" icon={faChevronLeft} size="2x" onClick={() => router.back()} />
                        )}
                        <Box flex="1">
                            <Title type="light">{pageTitle}</Title>
                        </Box>
                    </HeaderTitleBox>
                </HeaderContentBox>
            </HeaderWrapper>
            <AnimatePresence key={router.pathname}>
                <ChildrenWrapper
                    $layout={layout}
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ delay: !mounted ? 1.6 : 0, duration: 0.5 }}
                >
                    {children}
                </ChildrenWrapper>
            </AnimatePresence>
            <SidebarFloatBox animate={{ x: '0' }} initial={{ x: '-200px' }} transition={{ type: 'just', delay: 1 }}>
                <Sidebar currentPage={currentPage} routes={ROUTES} />
            </SidebarFloatBox>
            <FloatLogoCard
                animate={{ y: '0', x: '0' }}
                initial={{ y: '150px', x: '-175px' }}
                transition={{ delay: 0.8, x: { delay: 1.2, type: 'just' }, y: { delay: 1.5 } }}
            >
                <Image height={50} src="/images/logo-white.svg" width={69} />
            </FloatLogoCard>
        </LayoutMainWrapper>
    )
}
