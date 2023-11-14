import PageLayout from "../components/page-layout"
import { useAuth0 } from "@auth0/auth0-react"
import { Link } from 'react-router-dom'

const HomePage = () => {
    const { user } = useAuth0()

    console.log(user)

    return (
        <>
            <PageLayout>
                <h1>This is the home page.</h1>
            </PageLayout>
        </>
    )
}

export default HomePage