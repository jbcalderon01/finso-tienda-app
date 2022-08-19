import { NextPage } from 'next'
import React from 'react'

import { SalesContainer } from '../../src/core'
import { Helmet, SearchBox } from '../../src/shared'

const SalesPage: NextPage<{ mounted: boolean }> = ({ mounted }) => {
    return (
        <div>
            <Helmet title="Ventas" />
            <SearchBox mounted={mounted} />
            <SalesContainer />
        </div>
    )
}

export default SalesPage
