import React, { FC } from 'react'

import { CardWithDetail, CustomLink } from '../../../shared'

import { SalesCategoryList } from './SaleList.styles'

const CATEGORY_LIST = [
    { title: 'Bebidas y Refresco' },
    { title: 'Verduras' },
    { title: 'Frutas' },
    { title: 'Panadería' },
    { title: 'Carnes Frías y Embutidos' },
]

export const SalesContainer: FC = () => {
    return (
        <div>
            <SalesCategoryList>
                {CATEGORY_LIST.map((x, i) => (
                    <CustomLink key={`category-card-${i}`} href="/sales/fruits">
                        <CardWithDetail title={x.title} />
                    </CustomLink>
                ))}
            </SalesCategoryList>
        </div>
    )
}
