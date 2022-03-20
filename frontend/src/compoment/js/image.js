import React, { useState,useEffect } from 'react';
import '../css/image.css';
import {io} from 'socket.io-client';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';

const My_image =()=>{



    const [Pc_id,setPc_id]=useState("")
    const [data,setdata]=useState("")
    const [spinner,setspinner]=useState(<></>)


   const  change =(e)=>{

        if(e.target.name=="Pc_id"){

            setPc_id(e.target.value)

        }
   
    
    }


const trangaction =async()=>{
   

    const config = {

        headers: {
            
            'Content-Type' :'multipart/form-data'
            
            }
        }

    try{


        const res=   await  axios.get("http://localhost:8000/image/pc",config)


      

            const image =res.data.filter((x)=>{
                
                return x.Pc_id==Pc_id
                 
            })
    
                
                
            setdata(
    
                image[0].Pc_image

            )
                    
               
    
    }catch(error){

        console.error(error)
    }
      

    const socket= io("http://localhost:5000/")

      
        
    socket.on("connect",()=>{



      
        console.log("--")

        setspinner(

            <Spinner animation="grow" variant="success" />

        )


        socket.emit('id_image',Pc_id); 

            


           

        socket.on("room",(room)=>{

              


            setdata(

                room.data.Pc_image
                  
            )

               

        })
           

    })

     
       
}

  const  add =(e)=>{


        
    setPc_id(

        e.target.value

    )
    trangaction()

   
}


  
    
       
    
  
     
    return(


        <div  className="parent-image">


            <div className="content-image">
               

                <div className="content-image-img">

                    <img className="img" src={"http://localhost:8000/image/"+data}/>

                </div>

                
                <div className="add">

                    <input type="text"  name="Pc_id" value={Pc_id}  onChange={change} />

                    {spinner}

                    <input type="button" value="add" onClick={add} /> 

                </div>


            </div>
        
        </div>
    );
}

export default My_image;