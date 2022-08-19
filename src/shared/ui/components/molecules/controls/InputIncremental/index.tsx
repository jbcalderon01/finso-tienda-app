import { faPlus, faSubtract } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC, useEffect, useState } from 'react'

import { Button, Typography } from '../../../atoms'

import { InputIncrementalWrapper } from './styles'
import { InputIncrementalProps } from './types'

export const InputIncremental: FC<InputIncrementalProps> = ({ onChange, value: currentValue }) => {
    // States
    const [value, setValue] = useState<number>(0)

    const handleClick = (type: 'sum' | 'subtract') => {
        if (type === 'sum') {
            setValue(value + 1)
            onChange && onChange(value + 1)
        } else if (Math.sign(value - 1) !== -1) {
            onChange && onChange(value - 1)
            setValue(value - 1)
        }
    }

    useEffect(() => {
        setValue(currentValue || 0)
    }, [currentValue])

    return (
        <InputIncrementalWrapper>
            <Button
                style={{ minWidth: 48, width: 48, height: 48, borderRadius: '12px 0px 0px 12px' }}
                onClick={() => handleClick('subtract')}
            >
                <FontAwesomeIcon icon={faSubtract} size="1x" />
            </Button>
            <Typography fz="18px">{value}</Typography>
            <Button
                style={{ minWidth: 48, width: 48, height: 48, borderRadius: '0px 12px 12px 0px' }}
                onClick={() => handleClick('sum')}
            >
                <FontAwesomeIcon icon={faPlus} size="1x" />
            </Button>
        </InputIncrementalWrapper>
    )
}
