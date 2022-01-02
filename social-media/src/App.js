import './App.css';
import Login from './pages/Login'
import Header from './pages/Header'
import Upload from './Upload'
import {Route,Routes} from 'react-router-dom'
import AllPosts from './pages/AllPosts'
import { useNavigate } from 'react-router';
import {useGlobalContext} from './Stateprovider'
import { Button } from '@mui/material';
function App() {
  const navigate = useNavigate();
  const {state} = useGlobalContext()
  const toLogin=()=>{
    navigate('/', { replace: true })
  }
  return (
    
    <div className="App">
    
        <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
    <Routes>
    <Route path="/Home" element={ <Header/>}/>
    </Routes>
    {state.userdata.length>0?  <Routes>
         <Route path="/Home" element={ <AllPosts />} />
         <Route path="/Home/upload" element={ <Header/>} />
         <Route path="Home/upload" element={ <Upload />} />
                </Routes>:<Button onClick={toLogin}>Login To Get Access</Button>}
             
               
                <Routes>
         <Route path="/Home/upload" element={ <Upload />} />
                </Routes>
                <Routes>
                <Route path="/Home/upload/edit:id" element={ <Header/>} />
       
                </Routes>
                <Routes>
               
         <Route path="/Home/upload/edit:id" element={ <Upload />} />
                </Routes>
    </div>
  );
}
export default App;
