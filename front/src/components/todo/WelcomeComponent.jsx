import {useParams, Link} from 'react-router-dom'

function WelcomeComponent() {

    const {username} = useParams()

    return(
        <div>
            <h1>Welcome to our application {username}</h1>
            <div>Manage your todos list <Link to="/todos">Go here</Link></div>
        </div>
    )
}
export default WelcomeComponent