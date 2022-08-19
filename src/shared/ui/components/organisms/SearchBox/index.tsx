import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'
import React, { FC, KeyboardEventHandler, useState } from 'react'

import { InputField } from '../../atoms'

import { IconSearch, StyledSearchBox } from './styles'

export const SearchBox: FC<{ mounted: boolean }> = ({ mounted }) => {
    // Hooks
    const router = useRouter()
    const [value, setValue] = useState('')

    const handleChange = (inputValue: string) => {
        setValue(inputValue)
    }

    const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = e => {
        if (e.key === 'Enter') {
            if (value) router.replace(`${location.pathname}?q=${value}`)
            else router.replace(`${location.pathname}`)
        }
    }

    return (
        <StyledSearchBox animate={{ x: 0 }} initial={{ x: '-100vw' }} transition={{ delay: mounted ? 0 : 1.8, duration: 0.8 }}>
            <InputField
                endAdornment={<IconSearch icon={faSearch} />}
                label="Buscar Producto"
                onChange={e => handleChange(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </StyledSearchBox>
    )
}
