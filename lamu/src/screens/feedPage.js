import React,{useState,useEffect} from "react"
import ProtectedPage from "../components/protectedPage"
import axios from "axios"

const FeedPage = () =>{
     ProtectedPage()
     const [images,setImages] = useState([])

      useEffect(()=>{
        axios.get(`https://backend-fullstack-labenu.herokuapp.com/image/all`,{
            headers:{
            Authorization: localStorage.getItem("token")
        }}).then((response)=>{
            setImages(response)
            })
      },[])
      console.log(images.data)
      
    return(
        <div>

        </div>
    )
    
}
export default FeedPage