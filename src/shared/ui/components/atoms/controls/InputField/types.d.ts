import { ChangeEventHandler, ReactNode } from 'react'

export type TInputFieldProps = {
    onChange?: ChangeEventHandler<HTMLInputElement>
    name?: string
    value?: string
    label?: string
    theme?: 'light' | 'default'
    endAdornment?: ReactNode
}
