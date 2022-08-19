import Link from 'next/link'
import React, { FC } from 'react'

import { A } from './styles'
import { TCustomLinkProp } from './types'

export const CustomLink: FC<TCustomLinkProp> = ({ children, href }) => {
    return (
        <Link passHref href={href}>
            <A>{children}</A>
        </Link>
    )
}
