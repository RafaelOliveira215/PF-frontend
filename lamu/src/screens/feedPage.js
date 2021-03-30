import React,{useState,useEffect} from "react"
import ProtectedPage from "../components/protectedPage"
import axios from "axios"
import {useHistory} from "react-router-dom"


const FeedPage = () =>{
     ProtectedPage()
     const history = useHistory()
     const [images,setImages] = useState([])
     const [loading,setLoading] = useState(true)
     
     const logOut =()=>{
      localStorage.removeItem("token")
      history.push("/")
    }

      useEffect(()=>{
        axios.get(`https://backend-fullstack-labenu.herokuapp.com/image/all`,{
            headers:{
            Authorization: localStorage.getItem("token")
        }}).then((response)=>{
            setImages(response)
            setLoading(false)
            console.log(response)
            })
      },[])
      
return(
  <div>
      {loading ? <span>loading</span> : images.data.map((image)=>{
       
        return(
        <div key={image.id}>
           <img  src={image.file} alt={image.subtitle}></img>
        </div>
       )

      })}
      <div>
          <button onClick={logOut}>logout</button>
      </div>
</div>
  )
}
export default FeedPage