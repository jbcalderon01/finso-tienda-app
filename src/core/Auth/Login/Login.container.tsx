import { Box } from '@mui/material'
import React, { FC } from 'react'

import { Button, CloudInfo, CustomLink, Image, InputField, LogoLight, Title } from '../../../shared'

import { BoxForm, Form, ImageWrapper, LoginWrapper } from './Login.styles'

export const LoginContainer: FC = () => {
    return (
        <LoginWrapper>
            <Box alignItems="space-between" display="flex" flexDirection="column" justifyContent="center">
                <CloudInfo style={{ margin: '0 auto' }} />
                <ImageWrapper>
                    <Image height={548} src="/images/shutterstock.png" width={636} />
                </ImageWrapper>
            </Box>
            <BoxForm>
                <Form>
                    <LogoLight style={{ marginRight: '3rem' }} />
                    <Title type="light">Bienvenido a Tu Tienda en Casa</Title>
                    <Title fz="18px" type="light">
                        Ahorro cerca de ti
                    </Title>
                    <Box display="flex" flexDirection="column" gap="1rem" width="100%">
                        <InputField label="Nombre de Usuario" theme="light" />
                        <InputField label="Contraseña" theme="light" />
                    </Box>
                    <Box mt={2} width="100%">
                        <CustomLink href="/sales">
                            <Button theme="light" width="100%">
                                INGRESAR
                            </Button>
                        </CustomLink>
                    </Box>
                </Form>
            </BoxForm>
        </LoginWrapper>
    )
}
