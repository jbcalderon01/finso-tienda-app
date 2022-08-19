import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { PRODUCTS } from '../../../shared'
import { useSalesShoppingCart } from '../../../shared/contexts'

type TProductList = typeof PRODUCTS
export const useSalesProducts = ({ initialProducts }: { initialProducts: TProductList }) => {
    // Hooks
    const router = useRouter()
    const { q, slug } = router.query

    // Contexts
    const { getTotalPrice, shoppingCartProducts, handleChangeProduct, handleDeleteShoppingCartProduct } = useSalesShoppingCart()

    // States
    const [products, setProducts] = useState<TProductList>(initialProducts)
    const [isOpenModal, setIsOpenModal] = useState(false)

    const searchItems = (query: string) => {
        return initialProducts.filter(x => x.category_slug === slug && x.name.toLowerCase().indexOf(query.toLowerCase()) > -1)
    }

    const handleOpenModal = (value: boolean) => {
        setIsOpenModal(value)
    }

    useEffect(() => {
        if (q) {
            setProducts(searchItems(q as string))
        } else {
            setProducts(initialProducts.filter(x => x.category_slug === slug))
        }
    }, [q])

    return {
        getTotalPrice,
        handleChangeProduct,
        handleDeleteShoppingCartProduct,
        shoppingCartProducts,
        products,
        isOpenModal,
        handleOpenModal,
    }
}
