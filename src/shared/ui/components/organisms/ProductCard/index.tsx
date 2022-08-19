import React, { FC } from 'react'

import { Image, Typography } from '../../atoms'
import { InputIncremental } from '../../molecules'

import { ProductCardWrapper, ProductImageWrapper, ProductInfoWrapper } from './styles'
import { TProductProps } from './types'

export const ProductCard: FC<TProductProps> = ({ data, onChange }) => {
    return (
        <ProductCardWrapper>
            <ProductInfoWrapper>
                <ProductImageWrapper>
                    <Image layout="fill" src={data.path_image} />
                </ProductImageWrapper>
                <Typography fz="12px">{data.name}</Typography>
                <Typography fw="bold" fz="12px">
                    {data.price}
                </Typography>
            </ProductInfoWrapper>
            <InputIncremental value={data.quantity} onChange={onChange} />
        </ProductCardWrapper>
    )
}
