import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Box } from '@mui/system'
import React, { FC } from 'react'

import { Typography } from '../../../atoms'

import { Icon } from './styles'
import { TItemBoxProps } from './types'

export const ItemBox: FC<TItemBoxProps> = ({ data, onDelete }) => {
    return (
        <Box alignItems="center" display="flex" gap="1rem" justifyContent="space-between">
            <Box display="flex" flexDirection="column">
                <Typography fz="12px">{data.name}</Typography>
                <Typography fw="bold" fz="12px">
                    {data.price} {data.quantity > 1 && `x${data.quantity}`}
                </Typography>
            </Box>
            <Icon icon={faTrashAlt} onClick={onDelete} />
        </Box>
    )
}
