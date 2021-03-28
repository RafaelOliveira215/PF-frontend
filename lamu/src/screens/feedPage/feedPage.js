import React,{useState,useEffect} from "react"
import ProtectedPage from "../../components/protectedPage"
import axios from "axios"
import {useHistory} from "react-router-dom"
import {PostCard, ImageBox, AuthorBox, SubtitleBox, LogOutButton, DeleteButton} from "./feedStyle"
import userEvent from "@testing-library/user-event"

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
        axios.get(`http://localhost:3003/posts`,{
            headers:{
            Authorization: localStorage.getItem("token")
        }}).then((response)=>{
            setImages(response)
            setLoading(false)
            })
      },[])

      const goToPostDetails = (post) =>{
        history.push(`/postdetails/${post}`)
      }
      console.log(images)
return(
  <div>
      <LogOutButton onClick={logOut}>logout</LogOutButton>
      {loading ? <span>loading</span> : images.data.map((image)=>{
        return(
 
        <PostCard key={image.id}>
        <AuthorBox >
          <p>{image.name}</p>
        </AuthorBox>
        {image.authorId === image.userId ? <DeleteButton>Delete</DeleteButton>:<span> </span>}
        <ImageBox onClick={()=>goToPostDetails(image.id)} src={new Buffer.from(image.file).toString("ascii")} alt={image.subtitle}>
        </ImageBox>
        <SubtitleBox>
          <p>{image.subtitle}</p>
        </SubtitleBox>
        </PostCard>
        
       )

      })}
      
      <div>
         
      </div> 
</div>
  )
}
export default FeedPage