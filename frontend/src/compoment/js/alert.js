import React, { useState } from 'react';
import '../css/alert.css';
import {Link,Nav} from 'react-bootstrap';

const Alert =(props)=>{

    

    const  display =()=>{
       
        window.location.reload();
      
    }

    return(
        
        <div className="parent-alert">

            <div className="content-alert">   
            
                <div className="box-1-alert">     </div>     

                <div className="box-2-alert"> Error </div>

                <div className="box-3-alert">    {props.message}     </div>

                <div className="box-4-alert">    <Nav.Link className="link" onClick={display}>ok</Nav.Link>  </div>


                
            </div>

        </div>
    )
}

export default Alert;