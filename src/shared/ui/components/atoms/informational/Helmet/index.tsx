import Head from 'next/head'
import React, { FC } from 'react'

import { THelmetProps } from './types'

export const Helmet: FC<THelmetProps> = ({ title }) => {
    return (
        <Head>
            <title> Finso Tienda | {title}</title>
        </Head>
    )
}
