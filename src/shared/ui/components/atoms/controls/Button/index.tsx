import React, { FC } from 'react'

import { StyledMuiButton } from './styles'
import { TButtonProps } from './types'

export const Button: FC<TButtonProps> = ({ onClick, children, style, className, width, theme }) => {
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
