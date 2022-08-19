import { TProduct } from '../../../../interfaces'

type TSidebarShoppingCartProps = {
    products: TProduct[]
    onDelete: (data: TProduct) => void
    total: number
    onSell: () => void
}
