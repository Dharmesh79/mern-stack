import React, { useEffect, useState } from "react";
import "./Post.css";
import Postofusers from "./Postofusers";
import axios from "axios";
import Button from '@material-ui/core/Button';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { useNavigate } from 'react-router';
function Posts() {
  const navigate = useNavigate();
  const [Postdata, setPostdata] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8210/`).then((res) => {
      const persons = res.data;
      setPostdata(persons);
    })
  }, [Postdata])
  const changeroute=()=>{
    navigate('/Home/upload', { replace: true })
  }
  const AddComment=(id,comments,setcomments,commentCollection)=>{
      const addComment={
         commentCollection: [...commentCollection,comments],
         comment:commentCollection.length+1
       }
      axios
      .put(`http://localhost:8210/${id}`, addComment)
      .then((response) => console.log(response.data))
      .catch((err) => {
        console.log(err);
      });
     setcomments("")
     }

     const DeleteMongoobj=(id)=>{
      axios.delete(`http://localhost:8210/${id}`)
      .then((response) => console.log(response.data))
      .catch((err) => {
        console.log(err);
      });
     }
     
  
 
    
     const AddLikes=(totallikes,id)=>{
      const addlikes={
       like:totallikes
      }
      
      axios
      .put(`http://localhost:8210/${id}`, addlikes)
      .then((response) => console.log(response.data))
      .catch((err) => {
        console.log(err);
      });
    }
     
  return (
    <div className="Post-container">
      <div className="posts">
        {Postdata.map((post) => {
          return <Postofusers {...post} AddComment={AddComment} Addlikes = {AddLikes}  DeleteMongoobj={DeleteMongoobj} />;
        })}
      </div>
       <div className="uploadbtnposition">

       <Button className="upload" onClick={changeroute}>
         <FileUploadOutlinedIcon className="upload-icon" />
       </Button>

       </div>
    </div>
  );
}

export default Posts;
