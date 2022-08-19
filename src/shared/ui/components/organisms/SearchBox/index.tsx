import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React, { FC } from 'react'

import { InputField } from '../../atoms'

import { IconSearch, StyledSearchBox } from './styles'

export const SearchBox: FC<{ mounted: boolean }> = ({ mounted }) => {
    return (
        <StyledSearchBox animate={{ x: 0 }} initial={{ x: '-100vw' }} transition={{ delay: mounted ? 0 : 1.8, duration: 0.8 }}>
            <InputField endAdornment={<IconSearch icon={faSearch} />} label="Buscar Producto" />
        </StyledSearchBox>
    )
}
