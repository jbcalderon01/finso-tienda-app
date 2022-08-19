import { Button as MuiButton } from '@mui/material'
import styled, { DefaultTheme } from 'styled-components'

const THEME_BUTTON = {
    default: (theme: DefaultTheme) => `
        background-color: ${theme.colors.primary};
        color: ${theme.font.light};
        :hover {
            background-color: ${theme.colors.primary};
        }
`,
    light: (theme: DefaultTheme) => `
        background-color: ${theme.colors.light};
        color: ${theme.colors.primary};
        :hover {
            background-color: ${theme.colors.light};
            color: ${theme.colors.primary};
        }
`,
}

type TStyledMuiButton = {
    $typeTheme?: 'default' | 'light'
}
export const StyledMuiButton = styled(MuiButton)<TStyledMuiButton>`
    border-radius: 50%;
    width: 40px;
    height: 40px;
    min-width: 40px;
    font-weight: bold;
    padding: 0;
    font-size: 16px;
    ${({ theme, $typeTheme = 'default' }) => THEME_BUTTON[$typeTheme as 'default' | 'light'](theme)}
`
