import {useParams, Link} from 'react-router-dom'
import { useState } from 'react'
import { retrieveHelloWorld, retrieveHelloWorldBean, retrieveHelloWorldName } from '../api/HelloWorldApiService'

function WelcomeComponent() {

    const {username} = useParams()
    const [message, setMessage] = useState(null)

    function callHello() {
        retrieveHelloWorld()
        .then( (response) => successResponse(response) )
        .catch( (error) => errorResponse(error) )
        .finally( () => console.log("cleanup") )
    }

    function callHelloBean() {
        retrieveHelloWorldBean()
        .then( (response) => successResponseBean(response) )
        .catch( (error) => errorResponse(error) )
        .finally( () => console.log("cleanup") )
    }

    function callHelloName() {
        retrieveHelloWorldName('zahra')
        .then( (response) => successResponseBean(response) )
        .catch( (error) => errorResponse(error) )
        .finally( () => console.log("cleanup") )
    }

    function successResponse(response) {
        console.log(response)
        setMessage(response.data)
    }

    function successResponseBean(response) {
        console.log(response)
        setMessage(response.data.message)
    }

    function errorResponse(error) {
        console.log(error)
    }

    return(
        <div>
            <h1>Welcome to our application {username}</h1>
            <div>See the users list <Link to="/users">Go here</Link></div>
            <button className='btn btn-success m-3' onClick={callHello} >Call hello</button>
            <button className='btn btn-success m-3' onClick={callHelloBean} >Call hello Bean</button>
            <button className='btn btn-success m-3' onClick={callHelloName} >Call hello Zahra</button>
            <div className='text-info'>{message}</div>
        </div>
    )
}
export default WelcomeComponent