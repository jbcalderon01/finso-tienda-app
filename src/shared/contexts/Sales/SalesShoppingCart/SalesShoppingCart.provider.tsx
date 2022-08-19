import React, { FC, ReactNode, useCallback, useState } from 'react'

import { TProduct } from '../../../interfaces'

import { SalesShoppingCartContext } from './SalesShoppingCart.context'

export const SalesShoppingCartProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [shoppingCartProducts, setShoppingCartProducts] = useState<TProduct[]>([])

    const handleDeleteShoppingCartProduct = (data: TProduct) => {
        setShoppingCartProducts(shoppingCartProducts.filter(shoppingCartProduct => shoppingCartProduct.id !== data.id))
    }

    const getTotalPrice = useCallback(
        () => shoppingCartProducts.reduce<number>((acc, product) => acc + product.price * product.quantity, 0),
        [shoppingCartProducts],
    )

    const handleChangeProduct = (product: TProduct) => {
        if (product.quantity === 0) {
            handleDeleteShoppingCartProduct(product)

            return
        }

        const isExistShoppingCartProduct = shoppingCartProducts.find(shoppingCartProduct => shoppingCartProduct.id === product.id)

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
        <SalesShoppingCartContext.Provider
            value={{ shoppingCartProducts, handleChangeProduct, getTotalPrice, handleDeleteShoppingCartProduct }}
        >
            {children}
        </SalesShoppingCartContext.Provider>
    )
}
