import React, { useState,useEffect } from 'react';
import '../css/info.css';
import axios from 'axios';



const  Info =(props)=> {

    


    const [data,setdata]=useState("")



const fetch_image =async()=>{


  const   config={

        Headers:{

            'Content-Type': 'multipart/form-data',
        }
    }
    try{
        
        const res= await   axios.get('http://localhost:8000/image/pc/',config)

       

            res.data.map((x,index)=>{
  
            
  
              if(props.id == x.Pc_id){
  
                setdata(
  
                    x.Pc_image
      
                )
  
            
  
  
  
            }
  
        })
  
        console.log(data)
  
        
             
 

    }catch(error){

        console.log(error)
    }

  
}


useEffect(()=>{

    console.log("--",data)

    fetch_image()
    
})


  
    
     

        return(

            <div className="parent-info" >

                <div className="content-info">


                    <div className="box-1-info">



                  



                 
                    <img src={"http://localhost:8000/image/"+data}  style={{backgroundSize:"cover",width:"500px",height:"300px",borderRadius:"10px"}} />


                    </div>

                    <div  className="box-2-info">

                           
                               this image has   add with suscess 


                    </div>
                        
                


                </div>

            </div>


        )
    }

export default Info;