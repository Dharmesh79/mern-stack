import React from 'react'
import {Users} from '../Dummydata'
import Birthdata from './Birthdata'
import './Birhdaypage.css'
function Birthdaypage() {
  
    return (
        <div className="birth-container">
              <h1>Birthday-reminder</h1>
            <div className="birthday">
                   {Users.map((data)=>{
                      return <Birthdata {...data}  />
                   })}
            </div>
        </div>
    )

}

export default Birthdaypage
