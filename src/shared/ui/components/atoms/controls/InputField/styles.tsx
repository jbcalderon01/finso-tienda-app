import { TextField } from '@mui/material'
import styled, { DefaultTheme } from 'styled-components'

import { TInputFieldProps } from './types'

type TInput = {
    type?: TInputFieldProps['theme']
}

const THEME_INPUT_FIELD: { [x: string]: (theme: DefaultTheme) => string } = {
    default: (theme: DefaultTheme) => `
        & .MuiFilledInput-root {
            border: 1px solid ${theme.colors.primary};
            background-color: ${theme.background.secondary};
            border-radius: 6px;
            color: ${theme.font.primary};
        }
        & .MuiInputLabel-root {
            color: ${theme.colors.primary};
        }
`,
    light: (theme: DefaultTheme) => `
        & .MuiFilledInput-root {
            border: 1px solid ${theme.colors.light};
            background-color: transparent;
            border-radius: 6px;
            color: ${theme.font.light};
        }
        & .MuiInputLabel-root {
            color: ${theme.colors.light};
        }
`,
}

export const Input = styled(TextField)<TInput>`
    width: 100%;
    & .MuiFilledInput-root {
        ::before {
            border: none !important;
        }
        ::after {
            border: none !important;
        }
    }
    ${({ theme, type = 'default' }) => THEME_INPUT_FIELD[type](theme)}
`
