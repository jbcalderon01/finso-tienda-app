import { CSSProperties, ReactNode } from 'react'

export type TCircleButtonProps = {
    onClick?: () => void
    children?: ReactNode
    style?: CSSProperties
    className?: string
    width?: string | number
    theme?: 'light' | 'default'
}
