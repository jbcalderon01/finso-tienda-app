import React, { FC, ReactNode } from 'react'

import { StyledCard } from './styles'

export const Card: FC<{ children: ReactNode }> = ({ children, ...rest }) => {
    return <StyledCard {...rest}>{children}</StyledCard>
}
