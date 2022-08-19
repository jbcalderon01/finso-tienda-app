import React, { FC } from 'react'

import { ModalPaymentMethod, ProductCard, PRODUCTS, SidebarShoppingCart, Title } from '../../../shared'

import { useSalesProducts } from './SalesProducts.hook'
import { FloatSidebarShoppingCart, SalesProductList } from './SalesProducts.styles'
export const SalesProductsContainer: FC = () => {
    const {
        getTotalPrice,
        handleChangeProduct,
        shoppingCartProducts,
        handleDeleteShoppingCartProduct,
        products,
        handleOpenModal,
        handleSell,
        isOpenModal,
    } = useSalesProducts({ initialProducts: PRODUCTS })

    return (
        <div>
            {!products.length && (
                <Title margin="1rem 0" style={{ textAlign: 'center' }}>
                    No hay productos disponibles
                </Title>
            )}
            <SalesProductList>
                {products.map((product, i) => {
                    const shoppingCartQuantity = shoppingCartProducts.find(f => f.id === product.id)?.quantity

                    return (
                        <ProductCard
                            key={`product-card-${i}`}
                            data={{ ...product, quantity: shoppingCartQuantity || 0 }}
                            onChange={quantity => handleChangeProduct({ ...product, quantity })}
                        />
                    )
                })}
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
                    total={getTotalPrice()}
                    onDelete={handleDeleteShoppingCartProduct}
                    onSell={() => handleOpenModal(true)}
                />
                <ModalPaymentMethod open={isOpenModal} onClose={() => handleOpenModal(false)} onSell={handleSell} />
            </FloatSidebarShoppingCart>
        </div>
    )
}
