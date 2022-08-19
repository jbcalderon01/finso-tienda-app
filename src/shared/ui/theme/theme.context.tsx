import { createContext, useContext } from 'react'
import { DefaultTheme } from 'styled-components'

interface IThemeContext {
    theme: DefaultTheme
    currentTheme: 'light'
    handleTheme: (value: 'light') => void
}

export const ThemeContext = createContext<IThemeContext>({} as unknown as IThemeContext)

export const useTheme = () => useContext(ThemeContext)
