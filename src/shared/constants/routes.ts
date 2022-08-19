import { faHome, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import { TRoute } from '../interfaces'

export const ROUTES: TRoute[] = [
    { name: 'Home', icon: faHome, path: '/dashboard' },
    { name: 'Ventas', icon: faShoppingCart, path: '/sales' },
]
