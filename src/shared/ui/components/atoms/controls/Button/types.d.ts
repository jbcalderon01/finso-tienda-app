import { CSSProperties, ReactNode } from 'react'

export type TButtonProps = {
    onClick?: () => void
    children?: ReactNode
    style?: CSSProperties
    className?: string
    width?: string | number
    theme?: 'light' | 'default'
    disabled?: boolean
    br?: string
}
