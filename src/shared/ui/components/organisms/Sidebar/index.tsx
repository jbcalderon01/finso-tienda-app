import { Box } from '@mui/material'
import React, { FC } from 'react'

import { Button, CustomLink, SidebarButton } from '../../atoms'
import { ImageEditor } from '../../molecules'

import { ButtonsBox, SidebarButtonsList, SidebarWrapper } from './styles'
import { TSidebarProps } from './types'

export const Sidebar: FC<TSidebarProps> = ({ routes, currentPage }) => {
    return (
        <SidebarWrapper>
            <Box>
                <ImageEditor style={{ margin: '0 0 1rem 1rem' }} />
                <SidebarButtonsList>
                    {routes.map((x, i) => (
                        <CustomLink key={`key-button-${i}`} href={x.path}>
                            <SidebarButton active={x.path.split('/')[1] === currentPage} icon={x.icon} title={x.name} />
                        </CustomLink>
                    ))}
                </SidebarButtonsList>
            </Box>
            <ButtonsBox>
                <Button>Cerrar Caja</Button>
                <CustomLink href="/">
                    <Button style={{ minWidth: '100%' }}>Salir</Button>
                </CustomLink>
            </ButtonsBox>
        </SidebarWrapper>
    )
}
