import React, { useEffect, useState } from "react";
import FileBase64 from "react-file-base64";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Resizer from "react-image-file-resizer";
import { useParams } from "react-router-dom";
import { useGlobalContext } from './Stateprovider';
import "./Upload.css";
function Upload() {
  const {item,setItem} = useGlobalContext()
  let { id } = useParams();
  const [des, setdes] = useState({ des: "" });
  let arr = [];
  const [state, setstate] = useState({ theInputKey: "" });
  const [compress, setcompress] = useState(null);

  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        800,
        800,
        "JPEG",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });
  const onChange = async (event) => {
    const mainfile = event.target.files;
    // mainfile.forEach(ele => {
    //   console.log(ele)
    // });
    for (let i = 0; i < mainfile.length; i++) {
      const element = mainfile[i];
      const image = await resizeFile(element);
      arr.push(image);
    }
    setItem({img:[...item.img,...arr]})
  };
  const onSubmitHandler = async (e) => {
    console.log(item.img);
    let randomString = Math.random().toString(36);
    setstate({ theInputKey: randomString });
    e.preventDefault();
    const article = {
      desc: des.des,
      imgCollection: item.img
    };

    axios
      .post("http://localhost:8210/add_user", article)
      .then((response) => console.log(response.data))
      .catch((err) => {
        console.log(err);
      });
    setdes({ des: "" });
  };
  
  const update = () => {
    let article1
    if (item.img.length>0) {
      article1 = {
        desc: des.des,
       imgCollection: item.img
      }
    }else{
       article1 = {
        desc: des.des,
      }
    }
  
    axios
      .patch(`http://localhost:8210/${id}`, article1)
      .then((response) => console.log(response.data))
      .catch((err) => {
        console.log(err);
      });
    setdes({ des: "" });
  };

  return (
    <div className="upload-section">
      <form action="" onSubmit={onSubmitHandler}>
        <textarea
          value={des.des}
          onChange={(e) => setdes({ des: e.target.value })}
          placeholder="Enter text here..."
          rows="8"
          cols="80"
          name="comment"
          form="usrform"
        />

        <input
          onChange={onChange}
          key={state.theInputKey || ""}
          type="file"
          multiple
        />

        {id == undefined && <button className="btn">Upload</button>}
      </form>
      <button className="btn" onClick={update}>
        edit
      </button>
    </div>
  );
}

export default Upload;
