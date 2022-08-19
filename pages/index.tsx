import type { NextPage } from 'next'

import { LoginContainer } from '../src/core'
import { Helmet } from '../src/shared'
const Home: NextPage = () => {
    return (
        <>
            <Helmet title="Login" />
            <LoginContainer />
        </>
    )
}

export default Home
