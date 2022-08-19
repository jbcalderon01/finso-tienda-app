import { createContext, useContext } from 'react'

import { TShoppingCartContext } from './SalesShoppingCart.types'

export const SalesShoppingCartContext = createContext<TShoppingCartContext>({} as unknown as TShoppingCartContext)

export const useSalesShoppingCart = () => useContext(SalesShoppingCartContext)
