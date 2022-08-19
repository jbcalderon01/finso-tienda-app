import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'
import numeral from 'numeral'

import { Button, InputField, Typography } from '../../atoms'
import { ItemBox } from '../../molecules'

import { BalanceBox, SellBox, SellItemsBox, SidebarShoppingCartWrapper, SidebarTitleBox, TotalBox } from './styles'
import { TSidebarShoppingCartProps } from './types'
export const SidebarShoppingCart: FC<TSidebarShoppingCartProps> = ({ products = [], total, onDelete, onSell }) => {
    return (
        <SidebarShoppingCartWrapper>
            <BalanceBox>
                <SidebarTitleBox>
                    <FontAwesomeIcon icon={faShoppingCart} size="2x" />
                    <Typography>Carrito de Compra</Typography>
                </SidebarTitleBox>
                <TotalBox>
                    <Typography fz="16px">Total</Typography>
                    <Typography fw="bold" fz="24px">
                        {numeral(total).format('$ 0,0')}
                    </Typography>
                </TotalBox>
            </BalanceBox>
            <SellItemsBox>
                {products.map(x => (
                    <ItemBox key={`item-shopping-cart-${x.id}`} data={x} onDelete={() => onDelete(x)} />
                ))}
            </SellItemsBox>
            <SellBox>
                <InputField label="Celular" />
                <Button disabled={!products.length} onClick={onSell}>
                    VENDER
                </Button>
            </SellBox>
        </SidebarShoppingCartWrapper>
    )
}
