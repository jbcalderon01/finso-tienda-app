import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const CATEGORY_LIST = [
    { slug: 'beverages', title: 'Bebidas y Refresco' },
    { slug: 'vegetables', title: 'Verduras' },
    { slug: 'fruit', title: 'Frutas' },
    { slug: 'bakery', title: 'Panadería' },
    { slug: 'meats', title: 'Carnes Frías y Embutidos' },
]

export const useSalesCategories = () => {
    // Hooks
    const router = useRouter()
    const { q } = router.query

    // States
    const [categories, setCategories] = useState(CATEGORY_LIST)

    const searchItems = (query: string) => CATEGORY_LIST.filter(el => el.title.toLowerCase().indexOf(query.toLowerCase()) > -1)

    useEffect(() => {
        if (q) {
            setCategories(searchItems(q as string))
        } else {
            setCategories(CATEGORY_LIST)
        }
    }, [q])

    return { categories }
}
