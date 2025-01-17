import { withAuthenticationRequired } from '@auth0/auth0-react'
import React from 'react'
import PageLoader from './page-loader'

const AuthenticationGuard = ({ component }) => {
    const Component = withAuthenticationRequired(component, {
        onRedirecting: () => (
            <div className=''>
                <PageLoader />
            </div>
        )
    })

    return <Component />
}

export default AuthenticationGuard