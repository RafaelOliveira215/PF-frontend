import styled from "styled-components"

export const SignUpCard = styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
margin: 0;
position: absolute;
top: 50%;
left: 50%;
  transform: translate(-50%, -50%);
border:solid 1px;
height:500px;
width:500px;
`

export const Input = styled.input`
height:25px;
width: 250px;
border-width:0 0 1px 0;
outline:0;
align-self:center;
`

export const Text= styled.p`
font-family:Arial, Helvetica, sans-serif;
font-size:15px;
font-weight:bold;
`

export const Form = styled.form`
margin:auto;
`

export const SignUpButton = styled.button`
background-color:#09316f;
color:white;
width:250px;
height:30px;
margin-top:20px;
border-radius:20px;
box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);
cursor: pointer;
`

export const LoginButton = styled.button`
background:none;
border:none;
cursor: pointer;
color:#09316f;
`

