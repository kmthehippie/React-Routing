
import { useParams } from "react-router-dom"
import DefaultProfile from "./DefaultProfile.jsx"
import Popeye from "./Popeye.jsx"
import Spinach from "./Spinach.jsx"

function Profile(){
    const {name} = useParams();

    return (
        <div>
            <h1> This is the profile page </h1>
            <h3> The current profile belongs to: </h3>
            <hr />
            {
            name === "popeye"? (<Popeye />):
            name === "Spinach" ? (<Spinach />):
            (<DefaultProfile />)
           
            } 
        </div>
    )
}

export default Profile