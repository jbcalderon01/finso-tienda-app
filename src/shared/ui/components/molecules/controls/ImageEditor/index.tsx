import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'

import { CircleButton, Image } from '../../../atoms'

import { FloatButtonWrapper, ImageEditorWrapper } from './styles'
import { ImageEditProps } from './types'

export const ImageEditor: FC<ImageEditProps> = ({ style }) => {
    return (
        <ImageEditorWrapper style={style}>
            <FloatButtonWrapper>
                <CircleButton>
                    <FontAwesomeIcon icon={faPencil} />
                </CircleButton>
            </FloatButtonWrapper>
            <Image layout="fill" src="/images/logo-company.png" />
        </ImageEditorWrapper>
    )
}
