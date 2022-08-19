import React, { FC } from 'react'

import { CardWithDetail, CustomLink, Title } from '../../../shared'

import { useSalesCategories } from './SaleList.hook'
import { SalesCategoryList } from './SaleList.styles'

export const SalesContainer: FC = () => {
    // Hooks
    const { categories } = useSalesCategories()

    return (
        <div>
            {!categories.length && (
                <Title margin="1rem 0" style={{ textAlign: 'center' }}>
                    No hay categorías disponibles
                </Title>
            )}
            <SalesCategoryList>
                {categories.map((x, i) => (
                    <CustomLink key={`category-card-${i}`} href={`/sales/${x.slug}`}>
                        <CardWithDetail title={x.title} />
                    </CustomLink>
                ))}
            </SalesCategoryList>
        </div>
    )
}
