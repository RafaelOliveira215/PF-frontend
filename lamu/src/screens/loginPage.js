import React,{useState} from "react"
import axios from "axios"
import {useHistory} from "react-router-dom"
import UnprotectedPage from "../components/unprotectedPage"



const LoginPage = () =>{
    UnprotectedPage()
    const history = useHistory()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const onChangeEmail = (event) =>{
        setEmail(event.target.value)
    }
    const onChangepassword = (event) =>{
        setPassword(event.target.value)
    }
    const login =() =>{
        const body ={
            "email": email,
            "password": password
        }
        axios.post(`https://backend-fullstack-labenu.herokuapp.com/user/login`,body).then((response)=>{
                 localStorage.setItem("token",response.data.token)
                 history.push("/feed")
            })
    }
    
    const goTocreateAccount=()=>{
        history.push("/signup")
    }
    return(
        <div>
            <label>Email</label> <input value={email} onChange={onChangeEmail}/> <br/>
            <label>Senha </label> <input value={password} onChange={onChangepassword}/> <br/>
            <button onClick={login}>login</button>
            <button onClick={goTocreateAccount}>criar conta</button>
        </div>
    )
}
export default LoginPage