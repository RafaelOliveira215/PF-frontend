import React, { useEffect, useState } from "react";
import ProtectedPage from "../../components/protectedPage";
import { useHistory } from "react-router-dom";
import axios from "axios";

const CreatePostPage = () => {
  ProtectedPage();
  const history = useHistory();
  const [subtitle, setSubtitle] = useState("");
  const [file, setFile] = useState(null);
  const [colection, setColection] = useState("");
  const [colectionList, setColectionList] = useState(null);
  const [colectionName, setColectionName] = useState("");

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
  const logOut = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

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
  };

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
    setFile(event.target.value);
  };

  const onChangeColection = (event) => {
    setColection(event.target.value);
  };

  return (
    <div>
      <button onClick={logOut}>logout</button>
      <span>colection name</span>
      <input value={colectionName} onChange={onChangeColectiontName} />
      <button onClick={createCollection}>create colection</button>
      <br />
      <span>Descrição</span>
      <input value={subtitle} onChange={onChangeSubtitle} />
      <span>Arquivo da Imagem</span>
      <input  onChange={onChangeFile}/>
      <select onChange={onChangeColection}>
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
      </select>
  
      <button onClick={createImage}>Criar post</button>

    </div>
  );
};
export default CreatePostPage;
