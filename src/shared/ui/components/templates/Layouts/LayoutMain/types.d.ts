import { ReactNode } from 'react'

export type TLayoutMainProps = {
    children: ReactNode
    pageTitle: string
    currentPage: string
    mounted?: boolean
    layout?: 'twoSidebar'
}
