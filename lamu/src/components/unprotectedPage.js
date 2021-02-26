import {useHistory} from "react-router-dom"


const UnprotectedPage = () =>{ 

   const history = useHistory()
    
   const token = localStorage.getItem("token")

   if(token){
       history.push("/feed")
   }

}
export default UnprotectedPage