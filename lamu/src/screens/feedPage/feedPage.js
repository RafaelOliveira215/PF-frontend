import React,{useState,useEffect} from "react"
import ProtectedPage from "../../components/protectedPage"
import axios from "axios"
import {useHistory} from "react-router-dom"
import {PostCard, ImageBox, AuthorBox, SubtitleBox,Select, LogOutButton, DeleteButton, CollectionInput, SubmitButton, Form, ImageFormInput} from "./feedStyle"

const FeedPage = () =>{
    ProtectedPage()
    const history = useHistory()
    const [images,setImages] = useState([])
    const [loading,setLoading] = useState(true)
    const [subtitle, setSubtitle] = useState("");
    const [file, setFile] = useState(null);
    const [colection, setColection] = useState("");
    const [colectionList, setColectionList] = useState(null);
    const [colectionName, setColectionName] = useState("");
     
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

      useEffect(() => {
        axios
          .get(`http://localhost:3003/images/collections`, {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          })
          .then((response) => {
            setColectionList(response.data[0]);
          });
      }, []);

      const createCollection = () => {
        const body = {
          name: colectionName,
        };

        axios
          .post(`http://localhost:3003/images/createcollection`, body, {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          })
          .then((response) => {
            console.log(response);
          });
      }

      const createImage = () => {
        const body = {
          subtitle: subtitle,
          file: file,
          collection: colection 
        };
    
        axios.post(`http://localhost:3003/image/create`, body, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
      };

      const onChangeColectiontName = (event) => {
        setColectionName(event.target.value);
      };
    
      const onChangeSubtitle = (event) => {
        setSubtitle(event.target.value);
      };

     const onChangeFile = (event) => {
        setFile(event.target.files[0]);
      
      };
      // const onChangeFile = (event) => {
      //   setFile(event.target.value);
      // };
    
      const onChangeColection = (event) => {
        setColection(event.target.value);
      };
        
return(
  <div>
    <Form>
      <ImageFormInput placeholder={"Descreva sua imagem"} value={subtitle} onChange={onChangeSubtitle} />
      <input type={"file"} onChange={onChangeFile}/>
      {/* <ImageFormInput placeholder={"Link da imagem"}  onChange={onChangeFile}/> */}
      <Select onChange={onChangeColection}>
        <option>selecione uma coleção</option>
        {!colectionList ? (
          <option></option>
        ) : (
          colectionList.map((colection) => (
            <option key={colection.id} value={colection.id}>
              {colection.name}
            </option>
          ))
        )}
      </Select>
      <SubmitButton onClick={createImage}>Criar post</SubmitButton>
      </Form>
      <Form>
      <CollectionInput placeholder={"Digite o nome da coleção que deseja criar"} value={colectionName} onChange={onChangeColectiontName} />
      <SubmitButton onClick={createCollection}>criar coleção</SubmitButton>
      <br />
      </Form>
      
      <LogOutButton onClick={logOut}>logout</LogOutButton>
      {loading ? <span>loading</span> : images.data.map((image)=>{
        return(
       
        <PostCard key={image.id}>
        <AuthorBox >
          <p>{image.name}</p>
        </AuthorBox>
        {image.authorId === image.userId ? <DeleteButton>Delete</DeleteButton>:<span> </span>}
        <ImageBox onClick={()=>goToPostDetails(image.id)} src={new Buffer.from(image.file.data).toString("ascii")} alt={image.subtitle}>
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