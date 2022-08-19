import styled from 'styled-components'

import { TitleProps } from './types'

export const Title = styled.h3<TitleProps>`
    color: ${({ theme }) => theme.font.primary};
    margin: ${({ margin }) => margin || '0'};
    padding: ${({ padding }) => padding};
    font-size: ${({ fz }) => fz || '22px'};
    font-weight: ${({ fw }) => fw};
    color: ${({ theme, type, color }) => (type ? (type === 'light' ? theme.font.light : theme.font.primary) : color)};
`
