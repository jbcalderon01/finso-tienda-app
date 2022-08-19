import React from 'react'

import { SalesProductsContainer } from '../../src/core'
import { SearchBox } from '../../src/shared'

const SalesProductsPage = ({ mounted }: { mounted: boolean }) => {
    return (
        <div>
            <SearchBox mounted={mounted} />
            <SalesProductsContainer />
        </div>
    )
}

SalesProductsPage.layout = 'twoSidebar'

export default SalesProductsPage
