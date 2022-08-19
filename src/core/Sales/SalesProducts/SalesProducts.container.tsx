import React, { FC, useCallback, useState } from 'react'

import { ProductCard, SidebarShoppingCart } from '../../../shared'
import { TProduct } from '../../../shared/interfaces'

import { FloatSidebarShoppingCart, SalesProductList } from './SalesProducts.styles'

const PRODUCT_LIST = [
    { id: 1, price: 1200, path_image: '/images/product-1.png', name: 'Arroz Roa 1000g' },
    { id: 2, price: 1200, path_image: '/images/product-2.png', name: 'Coca Cola 250ml' },
    { id: 3, price: 1200, path_image: '/images/product-3.png', name: 'Atún Van Camp 180g' },
    { id: 4, price: 1200, path_image: '/images/product-4.png', name: 'Maíz tostado la especial 40g' },
]

export const SalesProductsContainer: FC = () => {
    // States
    const [shoppingCartProducts, setShoppingCartProducts] = useState<TProduct[]>([])

    const handleDeleteShoppingCartProduct = (data: TProduct) => {
        setShoppingCartProducts(shoppingCartProducts.filter(shoppingCartProduct => shoppingCartProduct.id !== data.id))
    }

    const getTotalPrice = useCallback(
        (products: TProduct[]) => products.reduce<number>((acc, product) => acc + product.price * product.quantity, 0),
        [shoppingCartProducts],
    )

    const handleChangeProduct = (product: TProduct) => {
        const isExistShoppingCartProduct = shoppingCartProducts.find(shoppingCartProduct => shoppingCartProduct.id === product.id)

        if (product.quantity === 0) {
            handleDeleteShoppingCartProduct(product)

            return
        }
        if (isExistShoppingCartProduct) {
            setShoppingCartProducts(
                shoppingCartProducts.map(shoppingCartProduct => {
                    return shoppingCartProduct.id === isExistShoppingCartProduct.id
                        ? { ...shoppingCartProduct, quantity: product.quantity }
                        : shoppingCartProduct
                }),
            )
        } else {
            setShoppingCartProducts([...shoppingCartProducts, product])
        }
    }

    return (
        <div>
            <SalesProductList>
                {PRODUCT_LIST.map((product, i) => (
                    <ProductCard
                        key={`product-card-${i}`}
                        data={product}
                        onChange={quantity => handleChangeProduct({ ...product, quantity })}
                    />
                ))}
            </SalesProductList>
            <FloatSidebarShoppingCart
                animate={{ x: '0' }}
                initial={{ x: '184px' }}
                transition={{
                    x: {
                        type: 'just',
                        duration: 0.5,
                    },
                }}
            >
                <SidebarShoppingCart
                    products={shoppingCartProducts}
                    total={getTotalPrice(shoppingCartProducts)}
                    onDelete={handleDeleteShoppingCartProduct}
                />
            </FloatSidebarShoppingCart>
        </div>
    )
}
