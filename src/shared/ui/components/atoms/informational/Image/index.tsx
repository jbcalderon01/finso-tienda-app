import React, { FC } from 'react'

import { StyledImage } from './styles'
import { TImagePros } from './types'

export const Image: FC<TImagePros> = ({ src, width, height, layout }) => {
    return <StyledImage height={height} layout={layout} src={src} width={width} />
}
