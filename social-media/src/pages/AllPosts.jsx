import React from 'react'
import Birthdaypage from './Birthdaypage';
import Posts from './Posts';
import {useGlobalContext} from '../Stateprovider'
function AllPosts() {
    const {dispatch,state} = useGlobalContext()
    return (
        <div>
         <div className="Main-Container">
           <div className="birthpage">
           <Birthdaypage />
           </div>
           <div className="postpage">
           <Posts />
           </div>
         </div> 
        </div>
    )
}

export default AllPosts
