import React, { FC } from 'react'

import { Detail, CardWithDetailWrapper } from './styles'
import { TCardWithDetailProps } from './types'

export const CardWithDetail: FC<TCardWithDetailProps> = ({ title }) => {
    return (
        <CardWithDetailWrapper>
            <Detail>{title}</Detail>
        </CardWithDetailWrapper>
    )
}
