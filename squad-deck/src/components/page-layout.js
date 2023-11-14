import React from 'react'
import NavBar from './navigation/nav-bar'



const PageLayout = ({ children }) => {

    return (
        <>
            <div className='page-layout'>
                <NavBar />
                <div className='page-content'>
                    {children}
                </div>
            </div>
        </>
    )
}

export default PageLayout