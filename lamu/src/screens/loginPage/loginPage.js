import React,{useState} from "react"
import axios from "axios"
import {useHistory} from "react-router-dom"
import UnprotectedPage from "../../components/unprotectedPage"
import {LoginCard, Input, Text,Form ,LoginButton, SignUpButton } from "./loginStyle"



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
    const login =(event) =>{
        event.preventDefault()
        const body ={
            "email": email,
            "password": password
        }
        axios.post(`http://localhost:3003/users/login`,body).then((response)=>{

                 localStorage.setItem("token",response.data)
                 history.push("/feed")
            })
    }
    
    const goTocreateAccount=()=>{
        history.push("/signup")
    }
    return(

        <LoginCard>
            <Form>
            <Text>Email</Text> <Input placeholder={"Digite seu email"} value={email} onChange={onChangeEmail}/> <br/>
            <Text>Senha </Text> <Input type={"password"} placeholder={"Digite sua senha"} value={password} onChange={onChangepassword}/> <br/>
            <LoginButton onClick={login}>login</LoginButton><br/>
            <p>Não tem uma conta?<SignUpButton onClick={goTocreateAccount}>Clique aqui</SignUpButton></p>
            </Form>
        </LoginCard>

    )
}
export default LoginPage