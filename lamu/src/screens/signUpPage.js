import React, {useState} from "react"
import UnprotectedPage from "../components/unprotectedPage"
import axios from "axios"
import {useHistory} from "react-router-dom"

const SignUpPage = () =>{
    UnprotectedPage()
    const history = useHistory()
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [nickname,setNickname] = useState("")

    const onChangeName = (event) =>{
        setName(event.target.value)
    }
    const onChangeEmail = (event) =>{
        setEmail(event.target.value)
    }
    const onChangepassword = (event) =>{
        setPassword(event.target.value)
    }
    const onChangeNickname = (event) =>{
        setNickname(event.target.value)
    }
    const signUp = () =>{
        const body ={
            "name": name,
            "email": email,
            "password": password,
            "nickname": nickname
        }
        
         axios.post(`https://backend-fullstack-labenu.herokuapp.com/user/signup`,body).then((response)=>{
             console.log(response)
         })
    }

    const goToLogin =()=>{
        history.push("/")
    }

    return(
        <div>
            <label>Nome </label> <input value={name} onChange={onChangeName}/> <br/>
            <label>Email</label> <input value={email} onChange={onChangeEmail}/> <br/>
            <label>Senha </label> <input value={password} onChange={onChangepassword}/> <br/>
            <label>Apelido </label> <input value={nickname} onChange={onChangeNickname}/><br/>
            <button onClick={signUp}>cadastrar</button>
            <button onClick={goToLogin}>ir para login</button>
        </div>
    )
}

export default SignUpPage