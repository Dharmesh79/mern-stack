import React,{useState,useEffect} from 'react'
import Button from '@material-ui/core/Button';
import {auth} from '../Firebase'
import Modelbox from './Modelbox';
import './Login.css'
import { useNavigate } from 'react-router';
import {useGlobalContext} from '../Stateprovider'

function Login() {
    const {dispatch} = useGlobalContext()
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const [string, setstring] = useState("");

    const [input, setinput] = useState("");
    const [password, setpassword] = useState("");
     const logIn=(e)=>{
         e.preventDefault()
         auth.signInWithEmailAndPassword(input, password)
             .then(auth => {
                navigate('/Home', { replace: true })
                 dispatch({
                    type: "SET_USER",
                    user: auth,
                    verify:true
                  });
               
             })
             .catch(error => setOpen(true),setstring("email or password does not exist"))
     }
   
     const sigUp=(e)=>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(input, password)
        .then((auth) => {
            if (auth) {
                // navigate('../', { replace: true })
            }
        })
        .catch(error => setOpen(true),setstring("email or password not acceptable"))
    }
    return (
        <div className="Login-Container">
            <div className="Main-container">
        Welcome to your Own Social media App
            <form action="" className="form">
                <input type="email" value={input} onChange={(e)=>setinput(e.target.value)} placeholder="Enter Email" name="" id="" />
                <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Enter Password" name="" id="" />
                <div className="sumbit-btns">
                    <button className="log-in">
                    <Button variant="outlined" onClick={logIn}>
                        LOG-IN
                    </Button>   
                    </button>
                    <button className="sig-up">
                    <Button variant="outlined" onClick={sigUp}>
                        SIG-UP/CREATE NEW ACCOUNT\
                    </Button>
                     </button>
                </div>
            </form>
            </div>
           {open&&<Modelbox  value={open} setvalue={setOpen} statement={string}/>}
        </div>
    )
}

export default Login
