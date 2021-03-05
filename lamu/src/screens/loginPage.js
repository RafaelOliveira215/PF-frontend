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
    //
    function randomInteger() {
        return Math.floor(3 + Math.random()*(3))
    }

    let rollDie = randomInteger();
    let myArray = []

    function randomName(length) {
        let result           = '';
        const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        myArray.push(result);
     }
     for(let i=0;i < 10000; i++){
        randomName(rollDie)
     }
     
     function checkPalindrome(word) {     
        for(let i = 0; i < word.length / 2; i++) if (word[i] !== word[word.length - i - 1]) return false;
        return true;
    }
     let count = 0;
     for(let  i = 0; i < myArray.length; ++i){
       if(checkPalindrome(myArray[i]))
        count++;
}
console.log(count)
     //
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