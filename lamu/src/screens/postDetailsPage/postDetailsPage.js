import React,{useState, useEffect} from "react"
import ProtectedPage from "../../components/protectedPage"
import {useParams} from "react-router-dom"
import axios from "axios"
import {PostCard,ImageBox, AuthorBox, SubtitleBox} from "./postDetailsStyle"

const PostDetailsPage = () =>{
    ProtectedPage()
    const [image,setImage] = useState(null)
    const pathParams = useParams()


    useEffect(()=>{
        axios.get(`http://localhost:3003/posts/${pathParams.id}`,{
            headers:{
            Authorization: localStorage.getItem("token")
        }}).then((response)=>{
            setImage(response)
            })
      },[pathParams.id])
      
return(
    <div>
           {image? (
            <div>
                <PostCard>
                <AuthorBox>{image.data.name}</AuthorBox>
                <ImageBox alt={`${image.data.subtitle}`} src={`${image.data.file}`}/>
                <SubtitleBox>{image.data.subtitle}</SubtitleBox>
                </PostCard>
           </div>
           ) 
           :<span>loading</span>}
    </div>
)
}
export default PostDetailsPage