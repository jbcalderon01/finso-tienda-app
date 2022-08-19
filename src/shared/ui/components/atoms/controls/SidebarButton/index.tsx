import React, { FC } from 'react'

import { Typography } from '../../informational'

import { ContentBox, Icon, SidebarButtonWrapper } from './styles'
import { TSidebarButtonPros } from './types'

export const SidebarButton: FC<TSidebarButtonPros> = ({ icon, title, active }) => {
    return (
        <SidebarButtonWrapper active={!!active}>
            <ContentBox>
                <Icon icon={icon} />
                <Typography>{title}</Typography>
            </ContentBox>
        </SidebarButtonWrapper>
    )
}
