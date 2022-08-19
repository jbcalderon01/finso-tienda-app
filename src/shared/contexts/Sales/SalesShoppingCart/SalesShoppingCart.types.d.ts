import { TProduct } from '../../../interfaces'

export type TShoppingCartContext = {
    handleChangeProduct: (product: TProduct) => void
    getTotalPrice: () => number
    handleDeleteShoppingCartProduct: (data: TProduct) => void
    shoppingCartProducts: TProduct[]
}
