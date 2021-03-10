import React,{useEffect, useState} from "react"
import ProtectedPage from "../components/protectedPage"
import {useHistory} from "react-router-dom"
import axios from "axios"

const CreatePostPage = () =>{
    ProtectedPage()
    const history =useHistory()
    const [subtitle,setSubtitle] = useState("")
    const [file,setFile] = useState("")
    const [colectionList,setColectionList] = useState({})
    const [colectionName,setColectionName] = useState("")

    useEffect(()=>{
      axios.get(`https://backend-fullstack-labenu.herokuapp.com/image/collections`,{
          headers:{
              Authorization: localStorage.getItem("token")
          }
      }).then((response)=>{
          setColectionList(response.data)
      })
    },[])
     console.log(colectionList)
    const logOut =()=>{
        localStorage.removeItem("token")
        history.push("/")
    }
 
    const createCollection = () =>{

        const body={
            name: colectionName
        }

        axios.post(`https://backend-fullstack-labenu.herokuapp.com/image/createCollection`,body,{
            headers:{
                Authorization: localStorage.getItem("token")
            }}
        ).then((response)=>{
            console.log(response)
        })
    }

    // const createImage =()=>{
    //     const body={
    //         subtitle:,
    //         file:,
    //         tagsIds:,
    //         collectionId:
    //     }

    //     axios.post(`https://backend-fullstack-labenu.herokuapp.com/image/createImage`,body,{
    //         headers:{
    //             Authorization:localStorage.getItem("token")
    //         }
    //     })
    // }
    
    const onChangeColectiontName = (event) =>{
        setColectionName(event.target.value)
    }

        console.log(colectionList)

    return(
        <div>

        <button onClick={logOut}>logout</button>
        <button onClick={createCollection}>create colection</button>
        <span>colection name</span><input value={colectionName} onChange={onChangeColectiontName}/>
        <select>
        {colectionList.map(colection=><option key={colection.id} value={colection.id}>{colection.name}</option>)}
        </select>

        </div>
    )
}
export default CreatePostPage