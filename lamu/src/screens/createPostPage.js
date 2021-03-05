import React from "react"
import ProtectedPage from "../components/protectedPage"
import {useHistory} from "react-router-dom"

const CreatePostPage = () =>{
    ProtectedPage()
    const history =useHistory()
    
    const logOut =()=>{
        localStorage.removeItem("token")
        history.push("/")
    }

    return(
        <button onClick={logOut}>logout</button>
    )
}
export default CreatePostPage