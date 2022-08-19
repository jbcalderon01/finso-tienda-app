import { NextPage } from 'next'
import React from 'react'

import { SalesContainer } from '../../src/core'
import { SearchBox } from '../../src/shared'

const SalesPage: NextPage<{ mounted: boolean }> = ({ mounted }) => {
    return (
        <div>
            <SearchBox mounted={mounted} />
            <SalesContainer />
        </div>
    )
}

export default SalesPage
