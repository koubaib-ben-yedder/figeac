import React, { useEffect, useState } from 'react';  
import '../css/add.css';
import axios from "axios";
import  {io}  from 'socket.io-client';
import Info   from './info.js';
const   My_add =()=>{


    
 const [Pc_image,setPc_image]=useState("");
 const [Pc_id,setPc_id]=useState("");
 const [Pc_image_validation,setPc_image_validation]=useState("");
 const [Pc_id_validation,setPc_id_validation]=useState("");
 const [data,setdata]=useState([]);
 const [info,setinfo]=useState(<></>);
 const [ok,setok]=useState(<></>);


 

  

  const  fetch_item =async()=>{

        const config = {

            headers: {
    
                'Content-Type': 'multipart/form-data',
    
            }
        }
        
        try{

          const res= await   axios.get("http://localhost:8000/image/pc",config)
        
            setdata(res.data)
            console.log(res.data)
        }
        catch(error){

            console.error(error)

        }
    
     
                    
    }

   const send_data =async()=>{


    
        const config = {

            headers: {
    
                'Content-Type':  'multipart/form-data',
    
            }
        }

  

        const  data_updated = new FormData();
        data_updated.append("Pc_image",Pc_image)
        data_updated.append("Pc_id",Pc_id)           

        try{

           await axios.post("http://localhost:8000/update/pc",data_updated,config)
            
        }catch(error){

            console.log(error)
        }
      
      
     
        
      
    
          
     
                    
    }

    useEffect(()=>{
        console.log(data)

        fetch_item()
       
    },[])
     
               



   const  add =(e)=>{

        e.preventDefault()

        setPc_image(

            e.target.name=="Pc_image"?e.target.files[0]:e.target.value
        )

      

        if(Pc_id =="" ){

            setPc_id_validation(

                <div style={{color:"red"}}> <li>the id not be empty </li>    </div>
            )


        }

        if(Pc_id !="" ){

            setPc_id_validation(

                <div style={{color:"green"}}> <li>the image is correct </li>    </div>
            )

        }

        if(Pc_image =="" && Pc_id !="" ){

            setPc_image_validation(
                
                <div style={{color:"red"}}> <li>the image not be empty </li>    </div>
            )

        }

        if(Pc_image !="" ){

            setPc_image_validation(
                
                <div style={{color:"green"}}> <li>the image is correct </li>    </div>
            )

        }
     
       if(Pc_image !="" && Pc_id !=""){

    

            send_data()

      


            const socket= io("http://localhost:5000/")


            socket.on("connect", () => {
        
            
            socket.emit("id_add",Pc_id)
        
        
            
        
            setok(
                <Info id={Pc_id} />
            )
        
            setTimeout(() => {
        
                window.location.reload();
        
            }, 4000);
        
        
            
        
        })
        
            
    } 
          
 
   
}

const change =(e)=>{

    if(e.target.name=="Pc_image" &&  e.target.value!=""){

        setPc_image(

            e.target.files[0]
    
        )
    }else{

        if(e.target.name=="Pc_id" && e.target.value!=""){

            setPc_id(e.target.value)
        }
    }

   
  

}
        
    


   

    return(
           <>


             <div className="info"> {info} </div>

        <div className="form-parent">
            

         {ok}
           
            <form  encType='multipart/form-data'>

                <div  className="form">
                
                    <div className="el-1">

                        <select className="select" onChange={change} name="Pc_id" value={Pc_id}>   

                        
                            <option>id</option>
                        
                            {
                             
                                data!=[]?data.map((x)=>(
                                

                             

                                    <option key={x.Pc_id} > {x.Pc_id}</option>

                                    
                                
                                )):<option>id</option>
                                
                            }

                        </select>
             
                       <div  className="el-3">  {Pc_id_validation}  </div>
                    </div>

            
                   
                    <div className="el-2">
                
                        <input type="file" name="Pc_image" onChange={change}/>

                        <div  className="el-3">  {Pc_image_validation}  </div>
                     
                        {}
                  

                        
                        

                    </div>

                    <div className="el-2">
                  
                     <button onClick={add}> envoyer </button>

                    </div>
                </div>

            </form>

          
            
     
         
        </div>

        </>

    )
 }
         
           
      
export default My_add;
