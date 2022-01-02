import React,{useState,useEffect} from 'react'
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PublicIcon from '@mui/icons-material/Public';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import { Avatar, IconButton } from '@material-ui/core';
import {useGlobalContext} from '../Stateprovider'
import { useNavigate } from 'react-router';
import './Header.css'
function Header() {
  const navigate = useNavigate()
    const {state} = useGlobalContext()
    const [seed, setseed] = useState(0);
    useEffect(() => {
      setseed(Math.floor(Math.random() * 5000))
    }, [])
    const changetohome=()=>{
      navigate('/Home', { replace: true })
    }
    return (
        <div className="Header-Container">
            <div className="header">
             <h1 id="btn" onClick={changetohome}>Social-Media</h1>
             <div className="search-input">
             <input type="text" placeholder="Enter person Name"/>
             <IconButton>
             <YoutubeSearchedForIcon />
             </IconButton>
             </div>
              <div className="social-icons">
                <IconButton>
                <NotificationAddIcon/>
                </IconButton>
                <IconButton>
                <ChatBubbleOutlineIcon />
                </IconButton>
                <IconButton>
                <PublicIcon />
                </IconButton>
              </div>
              <IconButton>
                {state.user?<Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/> :<Avatar/>}
                {state.user&&<small>you are logged-in</small>}
               </IconButton>
            </div>

        </div>
    )
}

export default Header
