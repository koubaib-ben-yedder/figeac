import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {Form,Row,Container,Col,Button} from 'react-bootstrap';
import '../css/form.css';
import axios from "axios";
import Alert from './alert';
import Valid from './valid';


const My_form  =(props)=>{



    const [ok_pc,setok_pc]=useState(false)
    const [ok_secter,setok_secter]=useState(false)
    const [ok,setok]=useState(false)
    const [alert,setalert]=useState(<> </>)
    const [valid,setvalid]=useState(<> </>)
    const [Admin_first_name,setAdmin_first_name]=useState("")
    const [Admin_last_name,setAdmin_last_name]=useState("")
    const [Admin_id,setAdmin_id]=useState(Math.floor(Math.random()*(1000-1+1)+1))
    const [Admin_first_name_validation,setAdmin_first_name_validation]=useState("his field never be blank")
    const [Admin_last_name_validation,setAdmin_last_name_validation]=useState("his field never be blank")
    const [Secter_name_validation,setsecter_name_validatin]=useState("his field never be blank")
    const [Secter,setsecter]=useState("")
    const [Admin,setadmin]=useState("")
    const [Admin_validation,setAdmin_validation]=useState("")
    const [Secter_name,setsecter_name]=useState("")
    const [Secter_validation,setsecter_validatin]=useState("")
    const [Secter_id,setsecter_id]=useState(Math.floor(Math.random()*(1000-1+1)+1))
    const [Pc_name,setPc_name]=useState("")
    const [Pc_name_validation,setpc_name_validation]=useState("his field never be blank")
    const [Pc_id,setPc_id]=useState(Math.floor(Math.random()*(1000-1+1)+1))
  
    const valid_admin=async()=>{

    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
   

    try{
        
        const res= await  axios.get("http://localhost:8000/id/admin",config)
      

        res.data.map(x=>{
       
       
       
            if(x.Admin_id==Admin_id){
       
                setAdmin_id(
       
                    Math.floor(Math.random()*(1000-1+1)+1),
                     
       
                )
       
               
       
       
            }   
            
               
        })
          
    }catch(error){

        console.error(error)
    }

     

   
    
}


const valid_secter =async()=>{

    const config = {

        headers: {

            'Content-Type': 'multipart/form-data'
        }
    }

  

    try{

       const res = await  axios.get("http://localhost:8000/id/secter",config)

       res.data.map(x=>{

        if (x.secter_id==Secter_id){

            setsecter_id(

            Math.floor(Math.random()*(1000-1+1)+1),
             
            )


        }

    })

    }catch(error){


        console.error(error)
    
        
    }
   
   
}

const  exist_pc =async()=>{

    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }



    try{

       const res= await axios.get("http://localhost:8000/id/secter",config)

    
    
        res.data.map((value,index)=>{

      
          
            if(res.data[index].secter_id==Secter){

               
                setok_pc(
                    true
                )
                console.log(ok_pc)
            }

        
        })

     


    
    }catch(error){

        console.error(error)
    }
   


}



useEffect(()=>{

    exist_pc()
    

},[Secter])

 const exist_secter =async()=>{

    const config = {

        headers: {

            'content-type': 'multipart/form-data'

        }
    }

    try{

        const res=  await  axios.get("http://localhost:8000/id/admin",config)

        res.data.map(x=>{
    


            if (x.admin_id  ==Admin){

            
                setok_secter(
                            true
                        )
                        console.log(ok_secter,x.admin_id  ==Admin)
                    
        
                }

        })




    }catch(error){

        console.log(error)
    }

 


}


const  valid_pc =async()=>{


    const config = {

        headers: {

            'Content-Type' :'multipart/form-data'
        }
    }



    try{
       
       const res=await  axios.get("http://localhost:8000/id/pc",config)

    
            
        res.data.map(x=>{
    
        
    
            if (x.Pc_id== Pc_id){
                
                setPc_id(
    
                    Math.floor(Math.random()*(1000-1+1)+1),
                        
                )
                    
            
            }
                
    
        })
    
    
   
   
    }catch(error){

        console.error(error)
    }
   

    
}

const update_pc=async()=>{

 
       let time =new Date();
       let day= time.getDate();
       let month= time.getMonth();
       let year= time.getFullYear();
    
        const config = {

          headers: {

                "Content-Type": "application/json"
            }
        }

        try{

            await axios.post("http://localhost:8000/add/pc",{"Pc_id":Pc_id,"Pc_name":Pc_name,"Secter":Secter,"day":day,"month":month,"year":year,"Secter_name":Secter_name},config)
        
        }catch(error){

            console.log(error)
        }
      
       
    
  

}
 


const  update_Admin =async()=>{


    const config = {

        headers: {

            'content-type' :'application/json'
        }
    }



    try{

       await axios.post("http://localhost:8000/add/admin",{'Admin_id':Admin_id,'Admin_first_name':Admin_first_name,'Admin_last_name':Admin_last_name},config)

    }catch(error){

        console.log(error)
    }

       

}



const  update_Secter =async()=>{



   
    const config = {

        headers: {

                'Content-Type' :'application/json'
        }
    }

    try{

       await  axios.post("http://localhost:8000/add/secter",{'Secter_name':Secter_name,'Secter_id':Secter_id,'Admin':Admin},config)

    }catch(error){

        console.error(error)
    }
   
 
                 
 
    
}

 


const validation_red=(x)=>{

    if( x == "Admin_first_name"){

       setAdmin_first_name_validation(

           <div style={{color:"red"}}> <li> The  first name can't be empty   </li>  <li>The  first name  can't  containe number or special caracteres     </li>   </div>

       )

    
    
    }   

    if( x == "Admin_last_name"){

        setAdmin_last_name_validation(

            <div style={{color:"red"}}>  <li> The  last name can't be empty   </li>  <li>  The  last name can't containe number or special caracteres  </li> </div>
        )
      
    }

  
   


    if(x == "Secter_name"){

        setsecter_name_validatin(

            <div style={{color:"red"}}>   <li> The  secter name can't be empty   </li>  <li>The  secter name  can't  containe number or special caracteres     </li>   </div>
        )
   
    }

    
   

    if(x=="Secter"){

        setsecter_validatin(

            <div style={{color:"red"}}>   <li>   The  Secter admin  can't be empty or something expect image  </li>  </div>
        )
        console.log(x)
    }

    if (x=="Admin"){
        
        setAdmin_validation(

            <div style={{color:"red"}}>   <li>   The Admin  can't be empty or something expect image  </li>  </div>
        )

    }

 

    if (x=="Pc_name"){
       

        setpc_name_validation(

            <div style={{color:"red"}}>   <li>   The  pc name  can't be empty or something expect image  </li>  </div>
        )

    }

  

    
 
}

useEffect(()=>{

    validation_green()
    validation_red()

},[Admin_first_name,Admin_last_name,Admin_id,Secter_name,Secter_id,Pc_name,Pc_id])

const change_admin =(e)=>{


    if(e.target.name=="Admin_first_name"){

        setAdmin_first_name(e.target.value)

    }  else{

        if(e.target.name=="Admin_last_name"){

            setAdmin_last_name(e.target.value)
        }
      
        
    }  


}

const change_secter =(e)=>{

    if(e.target.name=="Secter_name"){

        setsecter_name(e.target.value)
    }
    else {

        if(e.target.name=="Admin"){

            setadmin(e.target.value)
        }
    }

   
}




const change_pc =(e)=>{


    if(e.target.name=="Secter"){
        

        setsecter(e.target.value)
    }   

    else{
    
        if(e.target.name="Pc_name"){


            setPc_name(e.target.value)

        }    

    }
    
 
  
}


const validation_green =(x)=>{

        if(x == "Admin_first_name"){

           setAdmin_first_name_validation(

              <div style={{color:"green"}}> The  first name can't be empty  </div>

            )
        
        
        }   



        if(x == "Admin_last_name"){

            setAdmin_last_name_validation(

              <div style={{color:"green"}}> The  first name can't be empty  </div>

            )
        
        
        }   


      

        if( x == "Secter_name"){

            setsecter_name_validatin(

                <div style={{color:"green"}}>   The  port  can't be empty  </div>

            )
    
        }
    
    
    
   

        if(x=="Secter"){

            setsecter_validatin(

                <div style={{color:"green"}}>   The  image  can't be empty  </div>

            )
        }

        if(x=="Admin"){

           setAdmin_validation(

                <div style={{color:"green"}}>   The  image  can't be empty  </div>

            )

        }   
      
        console.log(x)

        if (x=="Pc_name"){

            setpc_name_validation(

                <div style={{color:"green"}}>     The  pc name  can't be empty or something expect image  </div>
            )
    
        }
    
 
}


const add_admin =(e)=>{

    e.preventDefault();


    if (ok ==false){


        if(Admin_first_name == ""  ){
            
            validation_red("Admin_first_name");  

            }
            else{

                 
                if(Admin_last_name == "" ){
                    
                    validation_red("Admin_last_name");  
                    validation_green("Admin_first_name");  

                }

                else{
        
                    

                    validation_green("Admin_last_name");  
                    validation_green("Admin_first_name");  
                    validation_green("Admin_data");
                    update_Admin();
                
                                
                     setvalid(
                        < Valid message="data added with suceess"  />
                     )

                    setok(
                        true
                    )
     

                    
                }        
                
            
            }
        }
    else{

        setvalid(
            <>  </>
        )
        setalert(
            <Alert message="you can add the same datta" />
        
        )
       
    }
   
    
    
        
}

useEffect(()=>{

    exist_secter()

},[Admin])

const add_secter =(e)=>{

  e.preventDefault();


    if(ok==false ){
    


        if(Secter_name=="" ){
    
             validation_red("Secter_name");
                     
        
            }   
                    
            else {
        
                 if(Admin==""){
        
                    validation_red("Admin");
                    validation_green("Secter_name");
        
        
                }
        
                else{
        
  
                 
                    validation_green("Secter_name");
                    validation_green("Admin");
                    
                  
                    exist_secter() 
                 
                   
                   
                    

                 
              

                        if (ok_secter==true ){

                            setvalid( 

                                <Valid message="you can add the same datta" />
        

                            )
                         
                          

                                
                            

                          

                            

                            update_Secter();

                        }else{

                            setalert(

                                <Alert message="Admin should be exist" />
                            )
                            
                        }
                     
                    
              
                  
                        
                }    
                    
            }   
        
          
        } else{

            setvalid(
                <>  </>
            )

            setalert(

                <Alert message="you can add the same datta" />
            )
        
    
        }

}





  

const add_pc=(e)=>{


        
    
    
    e.preventDefault();

        
        

            
    if(ok==false){

    
        
        if(Pc_name==""){
            
                validation_red("Pc_name");

            }else{

                if(Secter==""){

                    validation_red("Secter");
                    validation_green("Pc_name");
                                    

                }
            
                                            
                else{

                                            
                    validation_green("Secter");
                    validation_green("Pc_name");
                                             
                    exist_pc() 

                


                        if (ok_pc==true){
                                                                
                            setvalid(

                                < Valid message="data added with suceess"  />
                            )

                            setok(

                                true
                            )
            

                            
                            update_pc()
                            
                        }else{

                                setalert(

                                    <Alert message="Secter should be exist" />
                                )
                            


                            }
                    
                
                                    
            
                                                                        
                                
                                
                        

                        
                }
            }
        }


        else{

            setvalid(
                <>  </>
            )
            setalert(

                <Alert message="you can add the same datta" />
            )
                                            
              
         }
            
        
    
}










    return(

            <div className="con">

            

            <Container className="container" >

                <div className="parent">

                
                    
                            <div className="file-1" >

                                <Row> 

                                    <div className="title"> 

                                        <div> Admin  </div>  


                                    </div> 

                                    <div className="content">

                                    <Col>   
                                            
                                            <Form method="POST"  encType='multipart/form-data' onSubmit={add_admin} >
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>first name :</Form.Label>
                                                    <Form.Control type="text" name="Admin_first_name"  value={Admin_first_name} onChange={change_admin} placeholder="first name :" />
                                                    <Form.Text className="text-muted"> 
                                                     {Admin_first_name_validation}
                                                    
                                                    </Form.Text>
                                                </Form.Group>

                                            </Form>
                                                    

                                        </Col>

                                     
                                        
                                        <div className="alert">   {alert} </div>


                                        <div className="valid">   {valid} </div>
                                 


                                        <Col>   
                                            
                                            <Form method="POST"   encType='multipart/form-data' onSubmit={add_admin}>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>last name :</Form.Label>
                                                    <Form.Control type="text" name="Admin_last_name" value={Admin_last_name} onChange={change_admin} placeholder="last name :" />
                                                    <Form.Text className="text-muted"> 
                                                    {Admin_last_name_validation}
                                                    </Form.Text>
                                                </Form.Group>

                                            </Form>

                                        
                                                    

                                        </Col>

                                             
                                        <Col>
                                            <Form  method="POST"   encType='multipart/form-data' onSubmit={add_admin}>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label> Admin id : </Form.Label>
                                                        <Form.Control  type="text"  placeholder={Admin_id} />
                                                        <Form.Text className="text-muted">

                                                        </Form.Text>
                                                </Form.Group>

                                            </Form>

                                        </Col>
                                                
                                     

                                        <Col> <Form method="POST"    encType='multipart/form-data' onSubmit={add_admin} ><Button type="submit" variant="outline-secondary">valid</Button></Form></Col>

                                    </div>
                                    
                                </Row>

                            </div>
                            
                        

                        
                            <div className="file-2" >
                            <Row> 
                                    <div className="title"> 

                                        <div>  Secteur :    </div> 

                                    </div>

                                    <div className="content">
                               
                                    
                                    <Col>
                                            <Form method="POST"   encType='multipart/form-data' onSubmit={add_secter}>
                                                <Form.Group method="POST" className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label> name : </Form.Label>
                                                        <Form.Control  type="text" name="Secter_name"  value={Secter_name} onChange={change_secter}  placeholder="name :" />
                                                        <Form.Text className="text-muted">
                                                        {Secter_name_validation}
                                                        </Form.Text>
                                                </Form.Group>


                                            </Form>

                                        </Col>

                                           

                                            <Col>   
                                            
                                            <Form method="POST"  encType='multipart/form-data' onSubmit={add_secter}>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label> Admin id:</Form.Label>
                                                    <Form.Control type="text" name="Admin"  value={Admin} onChange={change_secter} placeholder="Admin id :" />
                                                    <Form.Text className="text-muted"> 
                                                     {Admin_validation}
                                                    
                                                    </Form.Text>
                                                </Form.Group>

                                            </Form>
                                                    

                                        </Col>

                                        
                                        <Col>   
                                            
                                            <Form method="POST"  encType='multipart/form-data' onSubmit={add_secter}>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label> Secter id:</Form.Label>
                                                    <Form.Control placeholder={Secter_id} />
                                                    <Form.Text className="text-muted"> 
                                                    </Form.Text>
                                                </Form.Group>

                                            </Form>
                                                    

                                        </Col>

                                

                                            <Col><Form  method="POST"   encType='multipart/form-data' onSubmit={add_secter}><Button  type="submit" variant="outline-secondary">valid</Button></Form></Col>
                                        
                                            
                                        </div>

                                    </Row>
                                    </div>
                            
                        
                        
                            <div className="file-3" >
                            <Row>   
                                    <div className="title">

                                        <div>  pc  : </div>
                                    </div>

                                    <div className="content">
                                    <Col>
                                            <Form method="POST" encrypt="multipart/form-data" onSubmit={add_pc}>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>name : </Form.Label>
                                                    <Form.Control type="text" placeholder="name :" name="Pc_name" value={Pc_name} onChange={change_pc}/>
                                                    <Form.Text className="text-muted">
                                                    {Pc_name_validation}
                                                    </Form.Text>
                                                </Form.Group>

                                            </Form>
                                            

                                        </Col>
                                    

                                   

                                   
                                   

                                      
                                            <Col>
                                                <Form method="POST" encrypt="multipart/form-data" onSubmit={add_pc}>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>secter id :</Form.Label>
                                                        <Form.Control type="type"  name="Secter" value={Secter} onChange={change_pc} placeholder="secter id :" />
                                                        <Form.Text className="text-muted">
                                                       {Secter_validation}
                                                        </Form.Text>
                                                    </Form.Group>

                                                </Form>

                                            </Col>
                                        
                                        
                                            <div>
                                            
                                                <Col>
                                                    <Form method="POST" encrypt="multipart/form-data" onSubmit={add_pc}>
                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                            <Form.Label>Pc id :</Form.Label>
                                                            <Form.Control  placeholder={Pc_id}/>
                                                            <Form.Text className="text-muted">
                                                
                                                            </Form.Text>
                                                        </Form.Group>

                                                     </Form>

                                                </Col>
                                   

                                                

                                                <Col> <Form method="POST"  encrypt="multipart/form-data" onSubmit={add_pc}> <Button  type="submit" variant="outline-secondary">valid </Button></Form></Col>

                                                </div>

                                            </div>
                                      
                                        </Row>
                                    </div>
                          

                </div>
            </Container>

        </div>
    )

}    
 

export default My_form;