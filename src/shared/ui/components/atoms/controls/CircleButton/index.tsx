import React, { FC } from 'react'

import { StyledMuiButton } from './styles'
import { TCircleButtonProps } from './types'

export const CircleButton: FC<TCircleButtonProps> = ({ onClick, children, style, className, width, theme }) => {
    return (
        <StyledMuiButton
            $typeTheme={theme}
            className={className}
            style={{ ...style, width }}
            variant="contained"
            onClick={onClick}
        >
            {children}
        </StyledMuiButton>
    )
}
