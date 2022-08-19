import type { AppProps } from 'next/app'

import { NextPage } from 'next'
import { FC, ReactNode, useEffect, useMemo, useState } from 'react'

import { LayoutMain, ThemeProvider } from '../src/shared'
import { ROUTE_TRANSLATE } from '../src/shared/constants'
import '../src/shared/ui/theme/GlobalStyle.css'
import { SalesShoppingCartProvider } from '../src/shared/contexts'

type TLayout = {
    children: ReactNode
    path: string
    currentPage: string
    layout?: 'twoSidebar'
    pageTitle: string
    mounted: boolean
}

export type NextPageWithLayout = NextPage & {
    layout?: 'twoSidebar'
}

type AppPropsWithComponentLayout = AppProps & {
    Component: NextPageWithLayout
}

const Layout: FC<TLayout> = ({ children, path, ...rest }) => {
    if (path !== '/') {
        return <LayoutMain {...rest}>{children}</LayoutMain>
    }

    return <div>{children}</div>
}

function MyApp({ Component, pageProps, router }: AppPropsWithComponentLayout) {
    const currentPage = useMemo(() => router.pathname.split('/')[1], [router.pathname])

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        if (!isMounted) setIsMounted(true)
        if (router.pathname === '/') setIsMounted(false)
    }, [isMounted, router.pathname])

    return (
        <ThemeProvider>
            <SalesShoppingCartProvider>
                <Layout
                    currentPage={currentPage}
                    layout={Component?.layout}
                    mounted={isMounted}
                    pageTitle={ROUTE_TRANSLATE[currentPage]}
                    path={router.pathname}
                >
                    <Component mounted={isMounted} router={router} {...pageProps} />
                </Layout>
            </SalesShoppingCartProvider>
        </ThemeProvider>
    )
}

export default MyApp
