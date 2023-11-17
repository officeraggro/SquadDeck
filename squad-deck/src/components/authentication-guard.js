import { withAuthenticationRequired } from '@auth0/auth0-react'
import React from 'react'

const AuthenticationGuard = ({ component }) => {
    const Component = withAuthenticationRequired(component, {
        onRedirecting: () => (
            <div className=''>
                Loading...
            </div>
        )
    })

    return <Component />
}

export default AuthenticationGuard