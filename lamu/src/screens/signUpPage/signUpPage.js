import React, {useState} from "react"
import UnprotectedPage from "../../components/unprotectedPage"
import axios from "axios"
import {useHistory} from "react-router-dom"
import {SignUpCard, Input, Text,Form ,LoginButton, SignUpButton } from "./signUpStyle"

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
        
         axios.post(`http://localhost:3003/users/signup`,body).then((response)=>{
             console.log(response)
         })
    }

    const goToLogin =()=>{
        history.push("/")
    }

    return(
        <SignUpCard>
            <Form>
            <Text>Nome </Text> <Input placeholder={"Digite seu nome"} value={name} onChange={onChangeName}/> <br/>
            <Text>Email</Text> <Input placeholder={"Digite seu Email"} value={email} onChange={onChangeEmail}/> <br/>
            <Text>Senha </Text> <Input placeholder={"Digite sua senha"} value={password} onChange={onChangepassword}/> <br/>
            <Text>Apelido </Text> <Input placeholder={"Digite seu apelido"} value={nickname} onChange={onChangeNickname}/><br/>
            <SignUpButton onClick={signUp}>cadastrar</SignUpButton><br/>
            <p>Já tem uma conta?<LoginButton onClick={goToLogin}>Clique aqui</LoginButton></p>
            </Form>
        </SignUpCard>
    )
}

export default SignUpPage