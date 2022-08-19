import { ChangeEventHandler, KeyboardEventHandler, ReactNode } from 'react'

export type TInputFieldProps = {
    onChange?: ChangeEventHandler<HTMLInputElement>
    onKeyDown?: KeyboardEventHandler<HTMLInputElement>
    name?: string
    value?: string
    label?: string
    theme?: 'light' | 'default'
    endAdornment?: ReactNode
}
