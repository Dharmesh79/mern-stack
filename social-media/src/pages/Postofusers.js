import React,{useEffect, useRef,useState} from 'react'
import './Postofusers.css'
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ClearIcon from '@mui/icons-material/Clear';
import axios from "axios";
import { useNavigate } from 'react-router';
function Postofusers({_id,desc,photo,date,Userid,comment,like,imgCollection,commentCollection,AddComment,Addlikes,DeleteMongoobj}) {
    const [comments, setcomments] = useState("")
    const [showComments, setshowComments] = useState(false)
    const [numberoflikes, setnumberoflikes] = useState(0)
    const [indexofarr, setindex] = useState(0)
     const navigate =useNavigate()
    const changerouteto=()=>{
        navigate(`/Home/upload/edit${_id}`, { replace: true })
      }
      const inputEl = useRef(null);
     const ShowComments =()=>{
       setshowComments(!showComments)
     }
     useEffect(() => {
      Addlikes(numberoflikes,_id)
     }, [numberoflikes]);
     const Eachlikes=()=>{
       setnumberoflikes(like+1)
      console.log(numberoflikes)
     }
  //  const AddComment=(id)=>{
  //   const addComment={
  //      commentCollection:comments
  //    }
  //   axios
  //   .patch(`http://localhost:8210/${id}`, addComment)
  //   .then((response) => console.log(response.data))
  //   .catch((err) => {
  //     console.log(err);
  //   });
  //  console.log(commentCollection)
  //  }
const onButtonClick = () => {
    // inputEl.current.scrollLeft -= 600;
    if (indexofarr<=0) {
    return  setindex(imgCollection.length-1)
    }
    setindex(indexofarr-1)

  };

  const onButtonClickleft = () => {
    // inputEl.current.scrollLeft += 600;
    if (indexofarr>=imgCollection.length-1) {
      return setindex(0)
    }
    setindex(indexofarr+1)
    
  };
    return (
        <div className="Post_da_baap">
            <div className="Post_data">
                <div className="disc-date">
                <p>{desc}</p>
                <p>{date}</p>
                </div> 
                <div className="image-container" >
                  <div className="image-container"  >
                  <img className="_img" src={imgCollection[indexofarr]}  alt="" srcset="" />
                  <div className="point">
                {imgCollection.map((item,ind)=>{
                  if (ind==indexofarr) {
                    return <span className="colorofpoint colorchange">1</span>
                  }
                  return <span className="colorofpoint"></span>     
                })}
                   </div>
                 </div>
        <ArrowBackIosIcon className="iconbtn1"    onClick={onButtonClick} />
                <ArrowForwardIosIcon className="iconbtn2" onClick={onButtonClickleft} />
                </div>
             <EditIcon className="edit-icon" onClick={changerouteto} />
             <ClearIcon className="delete-icon"  onClick={()=>DeleteMongoobj(_id)}           />
             <div className="ch_container">
             <div className="heart_container">
              <div className="one-more">
              <img className="heart_logo btnofcomment" onClick={Eachlikes} src={`${process.env.PUBLIC_URL}/assets/heart.png`} srcset="" />
             <p>{like}</p>
          
              </div>
             <div className="comment_container">
             <input type="text" value={comments} onChange={(e)=>setcomments(e.target.value)} placeholder="Enter Comment hear"/>
             <span ><CommentIcon className="showcomment" onClick={ShowComments}/>{comment}</span>
             <SendIcon className="btnofcomment" onClick={()=>AddComment(_id,comments,setcomments,commentCollection)}/>
            
             </div>
    
             </div>
             <div className="comment-container">
             {showComments==true&&commentCollection.map((comment)=>{
               return <p className="Commentsmsg">{comment}</p>
             })}
             </div>
       
             </div>
            </div>
        </div>
    )
}

export default Postofusers
