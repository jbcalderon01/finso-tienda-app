import { Backdrop, Fade, Modal as MuiModal } from '@mui/material'
import React, { FC } from 'react'

import { ModalContentBox } from './styles'
import { TModalProps } from './types'

export const Modal: FC<TModalProps> = ({ onClose, children, open }) => {
    return (
        <MuiModal
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
            aria-describedby="transition-modal-description"
            aria-labelledby="transition-modal-title"
            open={open}
            onClose={onClose}
        >
            <Fade in={open}>
                <ModalContentBox>{children}</ModalContentBox>
            </Fade>
        </MuiModal>
    )
}
