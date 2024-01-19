import { Link } from "react-router-dom"

function ErrorPage() {

    return(
        <div>
            <h1>Error 404:</h1>
            <h4>Page Not Found</h4>
            <Link to="/">Back to Home</Link>
        </div>
    )
}

export default ErrorPage