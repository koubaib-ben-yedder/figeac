import React from 'react';  
import {Navbar,Nav} from 'react-bootstrap';



const  My_navbar =()=>{




    return(

      <div>

     
      
                      
        <Navbar bg="dark" variant="dark">
                      
          <Navbar.Brand>figeac</Navbar.Brand>

            <Nav className="me-auto">
            <Nav.Link href="/add">add</Nav.Link>
            <Nav.Link href="/form">form</Nav.Link>
            <Nav.Link href="/state">State</Nav.Link>
            <Nav.Link href="/img">display</Nav.Link>
            <Nav.Link href="/hist">history</Nav.Link>
       


          </Nav>
                        
        </Navbar>

      </div>
            
    );
}


export default My_navbar;