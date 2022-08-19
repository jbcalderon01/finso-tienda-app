import React, { FC } from 'react'

import { StyledMuiButton } from './styles'
import { TButtonProps } from './types'

export const Button: FC<TButtonProps> = ({ onClick, children, style, className, width, theme, br, disabled }) => {
    return (
        <StyledMuiButton
            $typeTheme={theme}
            br={br}
            className={className}
            disabled={disabled}
            style={{ ...style, width }}
            variant="contained"
            onClick={onClick}
        >
            {children}
        </StyledMuiButton>
    )
}
