import {useParams, Link} from 'react-router-dom'

function WelcomeComponent() {

    const {username} = useParams()

    function callHello() {
        console.log("hello")
    }

    function successResponse(response) {
        console.log(response)
    }

    return(
        <div>
            <h1>Welcome to our application {username}</h1>
            <div>Manage your todos list <Link to="/todos">Go here</Link></div>
            <button className='btn btn-success m-3' onClick={callHello} >Call hello</button>
        </div>
    )
}
export default WelcomeComponent