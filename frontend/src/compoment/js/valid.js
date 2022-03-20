import React, { usestate } from 'react';
import '../css/valid.css';
import {Nav} from 'react-bootstrap';

const  Valid =((props)=>{

       
    

    const display_validation =()=>{
       
        window.location.reload();
      
    }

    return(
        <div className="parent-valid">

            <div className="content-valid">   
            
                <div className="box-1-valid">     </div>     

                <div className="box-2-valid"> success </div>

                <div className="box-3-valid">    {props.message}     </div>

                <div className="box-4-valid">    <Nav.Link className="link" onClick={display_validation}>ok</Nav.Link>  </div>


                
            </div>

        </div>
    )
})

export default Valid;

