import React from 'react'
import './Birthdata.css'
import { Button } from '@material-ui/core'

function Birthdata({profilePicture,username,id}) {
   
    return (

        <div className="profile-of-each1">
            <img className="profile-img1" src={`${process.env.PUBLIC_URL}/assets/${profilePicture}`} alt=""  />
            <p>Name:{username}</p>
             <Button>check-profile</Button>
        </div>
    )
}

export default Birthdata
