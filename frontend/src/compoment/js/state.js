import React, { useEffect, useState } from 'react';  
import axios from 'axios';
import '../css/state.css';
import {Card,Button,Navbar,Nav} from  'react-bootstrap';



const  My_State  =(()=>{



    const [data,setdata]=useState([]);

    
    const fetch =async()=>{

            const config = {

                headers: {

                    'Content-Type' :'multipart/form-data'

                }
            }


            try{

                const res=   await axios.get("http://localhost:8000/image/pc",config)

           
                setdata( [...data,res.data]);     
    
                            
                
            }catch(error){

                console.error(error)
            

            }

                
         
        }

       
        
     
           
            
    useEffect(()=>{

        fetch()
        
    },[])


     


    return(

    
        <div  className="card-parent">

            

            {
                data.map((x)=>{

                x.map((y)=>(

             

                           

                        <Card  key={y.Pc_id} className="card">

                            <Card.Img variant="top"  src={"http://localhost:8000/image/"+y.Pc_image }  className="card-image"   />

                            <Card.Body className="content_body">

                                <Card.Title  className="title_card">the pc name :          {y.Pc_name}</Card.Title>

                                <Card.Text  className="content_card">

                                    <div>the  pc  id : {y.Pc_id} </div>

                                    <div > the  seter id :  {y.Secter} </div>

                                    <div > the secter name:  {y.Secter_name} </div>   

                                    

                                </Card.Text>
                                
                                <Card.Text  className="content_card">

                                    <div > date :  {y.day}/{y.month}/{y.year} </div>   

                                </Card.Text>   

                            

                            </Card.Body>
                            
                        </Card>

                        
                    ))
                })
                    
           
            }
    
          
         
        </div>
    
    )
})


export default My_State;