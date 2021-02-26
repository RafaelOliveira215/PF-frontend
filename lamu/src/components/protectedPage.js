import { useEffect } from "react"
import {useHistory} from "react-router-dom"


const ProtectedPage = () =>{

   const history = useHistory()
    useEffect(()=>{
        const token = localStorage.getItem("token")

        if(!token){
            history.push("/")
        }

    })
}
export default ProtectedPage