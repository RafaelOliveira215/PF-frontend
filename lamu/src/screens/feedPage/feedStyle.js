import styled from "styled-components"

export const PostCard = styled.div`
display:flex;
flex-direction:column;
width:400px;
height:400px;
margin:auto;
border: solid 1px;
margin-bottom:20px;
`
export const AuthorBox = styled.div`
height:50px;
margin-left:30px;
`
export const ImageBox = styled.img`
height:300px;
width:400px;

`
export const SubtitleBox = styled.div`
height:50px;
margin:auto;
`
export const LogOutButton = styled.button`
background-color:#09316f;
color:white;
border-radius:20px;
width:60px;
height:25px;
position:fixed;
right:5px;
top:5px;
cursor: pointer;
`
export const DeleteButton = styled.button`
background-color:red;
width:60px;
height:25px;
position:absolute;
cursor: pointer;
border-radius:20px;
margin-left:320px;
margin-top:10px;
`
export const CollectionInput = styled.input`
width:308px;
border-radius:20px;
margin: 5px 5px 5px 0;
`
export const ImageFormInput = styled.input`
width:135px;
margin: 5px 5px 5px 0;
border-radius:20px;
`
export const SubmitButton = styled.button`
background-color:#09316f;
color:white;
border-radius:20px;
width:92px;
height:25px;
cursor: pointer;
margin: 5px 5px 5px 0;
`

export const Form = styled.form`
display:flex;
justify-content:center;
`
export const Select = styled.select`
height:25px;
margin: 5px 5px 5px 0;
border-radius:20px;
`