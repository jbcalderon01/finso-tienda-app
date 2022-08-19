import React, { FC } from 'react'

import { Input } from './styles'
import { TInputFieldProps } from './types'

export const InputField: FC<TInputFieldProps> = ({ onChange, name, value, theme, label, endAdornment }) => {
    return (
        <Input
            InputProps={{ endAdornment }}
            label={label}
            name={name}
            type={theme}
            value={value}
            variant="filled"
            onChange={onChange}
        />
    )
}
