import { Router } from 'next/router'
import React from 'react'

import { SalesProductsContainer } from '../../src/core'
import { Helmet, ROUTE_TRANSLATE, SearchBox } from '../../src/shared'

const SalesProductsPage = ({ mounted, router }: { mounted: boolean; router: Router }) => {
    return (
        <div>
            <Helmet title={`${ROUTE_TRANSLATE[router.query.slug as string] || ''}`} />
            <SearchBox mounted={mounted} />
            <SalesProductsContainer />
        </div>
    )
}

SalesProductsPage.layout = 'twoSidebar'

export default SalesProductsPage
