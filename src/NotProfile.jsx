import { Link } from "react-router-dom"
function NotProfile(){
    return(
        <div>
            <h1>You are not signed in.</h1>
            <p>Sign in to view profile.</p>
            <Link to="/">Home</Link>
        </div>
    )
}

export default NotProfile()