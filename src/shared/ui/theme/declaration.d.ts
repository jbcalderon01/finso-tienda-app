/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'
import { THEME } from './theme'

export type Theme = typeof THEME.light

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}
