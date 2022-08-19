import { faMoneyBill, faWallet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box } from '@mui/material'
import React, { FC, useState } from 'react'

import { Button, Title, Typography } from '../../atoms'
import { Modal } from '../../molecules'

import { TModalPaymentMethodProps } from './types'

export const ModalPaymentMethod: FC<TModalPaymentMethodProps> = ({ open, onClose, onSell }) => {
    // States
    const [paymentMethodSelected, setPaymentMethodSelected] = useState<'cash' | 'movi'>()

    const handleSell = () => {
        setPaymentMethodSelected(undefined)
        onSell()
    }

    return (
        <Modal open={open} onClose={onClose}>
            <Box alignItems="center" display="flex" flexDirection="column" gap="1rem" padding="0 2rem">
                <Title>Método de Pago</Title>
                <Typography>Elige el método de pago de tu cliente</Typography>
                <Box display="flex" gap="1rem">
                    <Box alignItems="center" display="flex" flexDirection="column" gap="1rem">
                        <Button
                            br="16px"
                            theme={paymentMethodSelected === 'cash' ? 'default' : 'light'}
                            onClick={() => setPaymentMethodSelected('cash')}
                        >
                            <FontAwesomeIcon icon={faMoneyBill} size="2x" />
                        </Button>
                        <Typography>Efectivo</Typography>
                    </Box>
                    <Box alignItems="center" display="flex" flexDirection="column" gap="1rem">
                        <Button
                            br="16px"
                            theme={paymentMethodSelected === 'movi' ? 'default' : 'light'}
                            onClick={() => setPaymentMethodSelected('movi')}
                        >
                            <FontAwesomeIcon icon={faWallet} size="2x" />
                        </Button>
                        <Typography>Movi</Typography>
                    </Box>
                </Box>
                <Button disabled={!paymentMethodSelected} style={{ minWidth: '100%' }} onClick={handleSell}>
                    VENDER
                </Button>
            </Box>
        </Modal>
    )
}
