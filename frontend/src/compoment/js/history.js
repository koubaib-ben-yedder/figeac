import { Component, useCallback, useEffect, useState } from 'react';
import React from 'react-dom';
import '../css/history.css';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import {Button,Card} from 'react-bootstrap';

const My_History= (props)=> {




   
const [id,setid]=useState("")
const  [data,setdata]=useState("")
const [object,setobject]=useState("")
const  [choose,setchoose]=useState([])
const [data_fetched,setdatafetched]=useState("")
const [choose_ui,setchoose_ui]=useState(<></>)
const [operation,setoperation]=useState("=")

 


const exist =()=>{




    choose.map((value,index)=>{
       
  
        choose.map((x,i)=>{

            if (value.id == x.id &&  index <i ){

                choose.splice(i, 1);

                setchoose(

                    choose

                )


            }
           

        })
          
    })

    
}


const fetch_data =async()=>{

    exist()
  

    if(choose.length==1   ){


        setdatafetched(
            <> </>

        )

        const config = {

            headers: {

                'Content-Type' :'multipart/form-data'
            }
        }
    
              

        try{

            const res= await   axios.get("http://localhost:8000/"+this.state.choose[0].id+"/"+this.state.choose[0].data+"/"+this.state.choose[0].operation+"/history",config)
                                
                const element=res.data.map((x)=>(
    
            
                        <div   className="card-history-content" key={Math.floor(Math.random()*(10000000-1+1)+1)}>
                                             
                                                    <Card style={{ width: '18rem' }}>
                                                    <Card.Img  className="img-history" variant="top"   style={{backgroundSize:"cover"}} src={"http://localhost:8000/image/"+x.image}  />
                                                    <Card.Body>
                                                        <Card.Title>
                                                            History  
                                                        </Card.Title>
                                                        <Card.Text>
                                                            <div> the pc id  :  {x.id} </div>
                                                            <div> the pc name  : {x.name}  </div>
                                                            <div> the Secter id: {x.Secter}  </div>
                                                            <div> the Secter name: {x.Secter_name}  </div>
                                                            <div> the date of insert  :{x.day}/{x.month}/{x.year}  </div>
                                                        </Card.Text>
                                                     
                                                    </Card.Body>
                                                    </Card>
                                
                        </div>
                    
                    
                ))
    
    
               setdatafetched(
                 element
               )
    
                 
        
            
        
        }catch(error){

            console.log(error)
        }
      

    }else{

        if(choose.length==2){


                
            setdatafetched(
                <> </>

            )




            const config = {
    
                headers: {
            
                    'Content-Type' :'multipart/form-data'
            
                }
            }
        
                

            try{

               
              const res= await axios.get("http://localhost:8000/"+this.state.choose[0].id+"/"+this.state.choose[0].data+"/"+this.state.choose[0].operation+"/"+this.state.choose[1].id+"/"+this.state.choose[1].data+"/"+this.state.choose[1].operation+"/history",config)
               

                setdatafetched(
    
                    res.data
                        
                    )
    
            
                const element=res.data.map((x)=>{
                 
                    return(
            
                        <div className="card-history-content" key={Math.floor(Math.random()*(10000000-1+1)+1)}>
                                                   
    
                                                    <Card style={{ width: '18rem' }}>
                                                    <Card.Img  className="img-history" variant="top" src={"http://localhost:8000/image/"+x.image} />
                                                    <Card.Body>
                                                        <Card.Title>history</Card.Title>
                                                        <Card.Text>
                                                            <div> the pc id  :  {x.id} </div>
                                                            <div> the pc name  : {x.name}  </div>
                                                            <div> the Secter id: {x.Secter}  </div>
                                                            <div> the Secter name: {x.Secter_name}  </div>
                                                            <div> the date of insert  :{x.day}/{x.month}/{x.year}  </div>
                                                        </Card.Text>
                                                     
                                                    </Card.Body>
                                                    </Card>
                                                                                
                                
            
                        </div>
                    )
                
                    
                })
    
                setdatafetched(
                
                 element 
    
                )
    
                
        
        }catch(error){

            console.log(error)

        }

                            
                                
          
    
    

    }else{


        if(choose.length==3){

                
            setdatafetched(
                <> </>

            )

            const config = {

                headers: {
            
                    'Content-Type' :'multipart/form-data'
                }
            }

            try{

                const res= await axios.get("http://localhost:8000/"+this.state.choose[0].id+"/"+this.state.choose[0].data+"/"+this.state.choose[0].operation+"/"+this.state.choose[1].id+"/"+this.state.choose[1].data+"/"+this.state.choose[1].operation+"/"+this.state.choose[2].id+"/"+this.state.choose[2].data+"/"+this.state.choose[2].operation+"/history",config)

                

                const element=res.data.map((x)=>(
    
            
                        <div  className="card-history-content" key={Math.floor(Math.random()*(10000000-1+1)+1)}>
                                                
    
                                                    <Card style={{ width: '18rem' }}>
                                                    <Card.Img className="img-history" variant="top" src={"http://localhost:8000/image/"+x.image} />
                                                    <Card.Body>
                                                        <Card.Title> history</Card.Title>
                                                        <Card.Text>
                                                            <div> the pc id  :  {x.id} </div>
                                                            <div> the pc name  : {x.name}  </div>
                                                            <div> the Secter id: {x.Secter}  </div>
                                                            <div> the Secter name: {x.Secter_name}  </div>
                                                            <div> the date of insert  :{x.day}/{x.month}/{x.year}  </div>
                                                        </Card.Text>
                                                   
                                                    </Card.Body>
                                                    </Card>
                                                                                
            
                        </div>
                    
                    
                    ))
    
    
                    setdatafetched(
                    element
    
                    )
    
                 
                
        
           
            }catch(error){

                console.error(error)
            }
        

            
        }else{

            if(choose.length==4){


                
                setdatafetched(
                    <> </>

                )


                const config = {
        
                    headers: {
                
                        'Content-Type' :'multipart/form-data'
                
                    }
                }


                try{

                   const res= await axios.get("http://localhost:8000/"+this.state.choose[0].id+"/"+this.state.choose[0].data+"/"+this.state.choose[0].operation+"/"+this.state.choose[1].id+"/"+this.state.choose[1].data+"/"+this.state.choose[1].operation+"/"+this.state.choose[2].id+"/"+this.state.choose[2].data+"/"+this.state.choose[2].operation+"/"+this.state.choose[3].id+"/"+this.state.choose[3].data+"/"+this.state.choose[3].operation+"/history",config)
             
                
                        
                    const element=res.data.map((x)=>(

                        
                
                        <div className="card-history-content"  key={Math.floor(Math.random()*(10000000-1+1)+1)}>
                                              
                                                <Card style={{ width: '18rem' }}>
                                                <Card.Img  className="img-history"  variant="top" src={"http://localhost:8000/image/"+x.image} />
                                                <Card.Body>
                                                    <Card.Title>history</Card.Title>
                                                    <Card.Text>
                                                        <div> the pc id  :  {x.id} </div>
                                                        <div> the pc name  : {x.name}  </div>
                                                        <div> the Secter id: {x.Secter}  </div>
                                                        <div> the Secter name: {x.Secter_name}  </div>
                                                        <div> the date of insert  :{x.day}/{x.month}/{x.year}  </div>
                                                    </Card.Text>
                                                  
                                                </Card.Body>
                                                </Card>
                                                                            
            
                        </div>
                    
                        
                    ))

        
        

                    setdatafetched(
                        element
                    )
         
            
                  
                }catch(error){

                    console.error(error)
                }
        
               
             
            }else{

                if(choose.length==5){


                                
                    setdatafetched(
                       <> </>

                    )




                    const config = {
            
                        headers: {
                    
                            'Content-Type' :'multipart/form-data'
                    
                        }
                    }
                
                          

                    try{

                       const res= await axios.get("http://localhost:8000/"+this.state.choose[0].id+"/"+this.state.choose[0].data+"/"+this.state.choose[0].operation+"/"+this.state.choose[1].id+"/"+this.state.choose[1].data+"/"+this.state.choose[1].operation+"/"+this.state.choose[2].id+"/"+this.state.choose[2].data+"/"+this.state.choose[2].operation+"/"+this.state.choose[3].id+"/"+this.state.choose[3].data+"/"+this.state.choose[3].operation+"/"+this.state.choose[4].id+"/"+this.state.choose[4].data+"/"+this.state.choose[4].operation+"/history",config)
             
                                
                        const element=res.data.map((x)=>(

                            
                    
                            <div className="card-history-content" key={Math.floor(Math.random()*(10000000-1+1)+1)}>
                                      
                                                <Card style={{ width: '18rem' }}>
                                                <Card.Img className="img-history"  variant="top" src={"http://localhost:8000/image/"+x.image} />
                                                <Card.Body>
                                                    <Card.Title>history</Card.Title>
                                                    <Card.Text>
                                                        <div> the pc id  :  {x.id} </div>
                                                        <div> the pc name  : {x.name}  </div>
                                                        <div> the Secter id: {x.Secter}  </div>
                                                        <div> the Secter name: {x.Secter_name}  </div>
                                                        <div> the date of insert  :{x.day}/{x.month}/{x.year}  </div>
                                                    </Card.Text>
                                               
                                                </Card.Body>
                                                </Card>

                                                                            
                
                            </div>
                        
                        
                    ))



                    

                    setdatafetched(
                        element
                    )

                    
                
                }catch(error){

                    console.error(error)
                }

                   
    
                }else{


                        
                    if(choose.length==6){


                                        
                        setdatafetched(
                            <> </>

                        )




                        const config = {
                
                            headers: {
                        
                                'Content-Type' :'multipart/form-data'
                        
                            }
                        }
                    
                            
                        
                        
                        try{

                          const res= await axios.get("http://localhost:8000/"+this.state.choose[0].id+"/"+this.state.choose[0].data+"/"+this.state.choose[0].operation+"/"+this.state.choose[1].id+"/"+this.state.choose[1].data+"/"+this.state.choose[1].operation+"/"+this.state.choose[2].id+"/"+this.state.choose[2].data+"/"+this.state.choose[2].operation+"/"+this.state.choose[3].id+"/"+this.state.choose[3].data+"/"+this.state.choose[3].operation+"/"+this.state.choose[4].id+"/"+this.state.choose[4].data+"/"+this.state.choose[4].operation+"/"+this.state.choose[5].id+"/"+this.state.choose[5].data+"/"+this.state.choose[5].operation+"/history",config)
                  
                        
                            const element=res.data.map((x)=>(

                                
                        
                                <div className="card-history-content" key={Math.floor(Math.random()*(10000000-1+1)+1)}>
                                           
                                            <Card style={{ width: '18rem' }}>

                                            <Card.Img className="img-history"  variant="top" src={"http://localhost:8000/image/"+x.image}/>

                                            <Card.Body>

                                                <Card.Title>history </Card.Title>

                                                <Card.Text>
                                                    <div> the pc id  :  {x.id} </div>
                                                    <div> the pc name  : {x.name}  </div>
                                                    <div> the Secter id: {x.Secter}  </div>
                                                    <div> the Secter name: {x.Secter_name}  </div>
                                                    <div> the date of insert  :{x.day}/{x.month}/{x.year}  </div>
                                                </Card.Text>

                                            
                                            </Card.Body>
                                            </Card>
                                                                        
                                </div>
                            
                            
                        ))

      

                        setdatafetched(

                          element
                        )

                        
                    
                    }catch(error){

                            console.log(error)
                    }
                      
    
                    }else{

                              
                        if(choose.length==7){
                            
                            setdatafetched(
                                <> </>

                            )

                            const config = {
                    
                                headers: {
                            
                                    'Content-Type' :'multipart/form-data'
                            
                                }
                            }

                            try{

                                const  res=  await axios.get("http://localhost:8000/"+this.state.choose[0].id+"/"+this.state.choose[0].data+"/"+this.state.choose[0].operation+"/"+this.state.choose[1].id+"/"+this.state.choose[1].data+"/"+this.state.choose[1].operation+"/"+this.state.choose[2].id+"/"+this.state.choose[2].data+"/"+this.state.choose[2].operation+"/"+this.state.choose[3].id+"/"+this.state.choose[3].data+"/"+this.state.choose[3].operation+"/"+this.state.choose[4].id+"/"+this.state.choose[4].data+"/"+this.state.choose[4].operation+"/"+this.state.choose[5].id+"/"+this.state.choose[5].data+"/"+this.state.choose[5].operation+"/"+this.state.choose[6].id+"/"+this.state.choose[6].data+"/"+this.state.choose[6].operation+"/history",config)
                   
                               
                            
                                                         
                                const element=res.data.map((x)=>(

                                        
                                
                                        <div className="card-history-content" key={Math.floor(Math.random()*(10000000-1+1)+1)}>
                                               
                                                <Card style={{ width: '18rem' }}>
                                                <Card.Img   className="img-history"  variant="top" src={"http://localhost:8000/image/"+x.image}/>
                                                <Card.Body>
                                                    <Card.Title>history</Card.Title>
                                                    <Card.Text>
                                                        <div> the pc id  :  {x.id} </div>
                                                        <div> the pc name  : {x.name}  </div>
                                                        <div> the Secter id: {x.Secter}  </div>
                                                        <div> the Secter name: {x.Secter_name}  </div>
                                                        <div> the date of insert  :{x.day}/{x.month}/{x.year}  </div>
                                                    </Card.Text>
                                                
                                                </Card.Body>
                                                </Card>
                                        </div>
                                    
                                    
                                ))



                                setdatafetched(
                                    element

                                )
                            
    
                            }catch(error){

                                console.error(error)
                            }
                            
                                        
                         
                             
                        }else{
                        

                            if(choose.length==8){


                                
                                setdatafetched(
                                   <> </>

                                )




                                const config = {
                        
                                    headers: {
                                
                                        'Content-Type' :'multipart/form-data'
                                
                                    }
                                }
                            
                                try{

                                    const res=   await axios.get("http://localhost:8000/"+this.state.choose[0].id+"/"+this.state.choose[0].data+"/"+this.state.choose[0].operation+"/"+this.state.choose[1].id+"/"+this.state.choose[1].data+"/"+this.state.choose[1].operation+"/"+this.state.choose[2].id+"/"+this.state.choose[2].data+"/"+this.state.choose[2].operation+"/"+this.state.choose[3].id+"/"+this.state.choose[3].data+"/"+this.state.choose[0].operation+"/"+this.state.choose[4].id+"/"+this.state.choose[4].data+"/"+this.state.choose[4].operation+"/"+this.state.choose[5].id+"/"+this.state.choose[5].data+"/"+this.state.choose[5].operation+"/"+this.state.choose[6].id+"/"+this.state.choose[6].data+"/"+this.state.choose[6].operation+"/"+this.state.choose[7].id+"/"+this.state.choose[7].data+"/"+this.state.choose[7].operation+"/history",config)
                 
                                      
                                    const element=res.data.map((x)=>(
    
                                            
                                    
                                            <div className="card-history-content" key={Math.floor(Math.random()*(10000000-1+1)+1)}>
                                                 
                                                    <Card style={{ width: '18rem' }}>
                                                    <Card.Img className="img-history" variant="top" src={"http://localhost:8000/image/"+x.image} />
                                                    <Card.Body>
                                                        <Card.Title>
                                                            history
                                                        </Card.Title>
                                                        <Card.Text>
                                                            <div> the pc id  :  {x.id} </div>
                                                            <div> the pc name  : {x.name}  </div>
                                                            <div> the Secter id: {x.Secter}  </div>
                                                            <div> the Secter name: {x.Secter_name}  </div>
                                                            <div> the date of insert  :{x.day}/{x.month}/{x.year}  </div>
                                                        </Card.Text>
                                                   
                                                    </Card.Body>
                                                    </Card>
                                            </div>
                                        
                                        
                                        ))
    
                 
    
                                            setdatafetched(
                                                element
                                            )
    
                                    
                                
                                                            
                                }catch(error){

                                    console.log(error)                               
                                
                                }
                                    
                                
                                            
                               
                                                                                                
                            }
                        }

                    }
                        
                }
                        
            }    
           
        }         
    }
    
}

}
 

  




const add =()=>{

  


    
        setchoose(
    
    
        
            [...choose,object]
    

        )
                        
            const element=choose.map((value,index)=>{


                if(index=choose.length-1){

                    return  ( 
                    
                        <div    className="card_history" key={Math.floor(Math.random()*(10000000-1+1)+1)}>
                        
                    
                            <Modal.Dialog>

                                <Modal.Header closeButton onClick={del}>

                                <Modal.Title className="history-title-1"> add</Modal.Title>

                                </Modal.Header>
                            
                                <Modal.Body>

                                    <div  className="card-content-1">{value.id}  </div>


            
                                    <div  className="card-content-2 ">  {value.data} </div>


                                    <Button variant="secondary" onClick={back} >back</Button>
                                    
                                </Modal.Body>
                            
                            

                            </Modal.Dialog>
              
    
                
                          </div>
                        
                       
    
                    )
                }

               
                    
              
        
             
        
                setchoose_ui(

                 element
            
                )
          
               fetch_data()
   
  
            

        })
            
   
    

   
}
   

const change =(e)=>{

    

    if(e.target.name=="data"){
        setdata(
            e.target.value
        )
    }
    else
        if(e.target.name=="id"){
            setid(
                e.target.value
            )
        }
    
        else{

            if(e.target.name=="operation"){
                setoperation(
                    e.target.value
                )
            }
            else{
                if (e.target.name=="data" && e.target.name=="id" && e.target.name=="operation"){
                    setobject(
                        {"id":id,"data":data,"operation":operation}
                    )
                }
            }

    }
 
    

  
   
}



const back =()=>{

    const element=this.state.choose.map((value,index)=>{



        return  ( 
        
            <div    className="back" key={Math.floor(Math.random()*(10000000-1+1)+1)}>
            
            <Modal.Dialog>

                <Modal.Header closeButton onClick={del}>

                <Modal.Title className="history-title-1"> back</Modal.Title>

                </Modal.Header>
            
                <Modal.Body>

                <div  className="card-content-1">{value.id}  </div>



                <div  className="card-content-2 ">  {value.data} </div>

           

                <Button variant="secondary" onClick={back} >back</Button>

                </Modal.Body>
            
              

            </Modal.Dialog>

  

    
</div>
            
           

     )


   
        
    })

 



    setchoose_ui(

         element

    )
}

const view =()=>{


    const element=this.state.choose.map((value,index)=>{



            return  ( 
            
                <div    className="card_history-view" key={Math.floor(Math.random()*(10000000-1+1)+1)}>
                
                <Modal.Dialog>

                    <Modal.Header closeButton onClick={del}>

                    <Modal.Title className="history-title-1"> view</Modal.Title>

                    </Modal.Header>
                
                    <Modal.Body>

                    <div  className="card-content-1">{value.id}  </div>



                    <div  className="card-content-2 ">  {value.data} </div>

               

                    <Button variant="secondary" onClick={this.back} >back</Button>

                    </Modal.Body>
                
                  

                </Modal.Dialog>

      

        
    </div>
                
               

         )
    

       
            
        })

     

        setchoose_ui(

         element
    
        )

  
}

const del =(index)=>{


   choose.splice(index, 1)



    const element=choose.map((value,index)=>{

      

    
        return  ( 
        
        
            <div    className="card_history" key={Math.floor(Math.random()*(10000000-1+1)+1)}>
                    
                    <Modal.Dialog>

                        <Modal.Header closeButton  onClick={del}>
                            {console.log(index)}
                          

                        <Modal.Title className="history-title-1"> del</Modal.Title>

                        </Modal.Header>
                    
                        <Modal.Body>

                        <div  className="card-content-1">{value.id}  </div>



                        <div  className="card-content-2 ">  {value.data} </div>



                        <Button variant="secondary" >back</Button>{console.log()}
                        

                        </Modal.Body>
                    
                      

                    </Modal.Dialog>

          

            
            </div>
        )
            
    })
        
        






    setchoose(

    choose

    )

    setchoose_ui(
    element
    
    )



    fetch_data()

    if(choose=[]){

        setdatafetched(

        ""
            
        )
    }


}




     
 
    

       return(
            <>
                <div className="content-parent">

                  

                   {choose_ui}
      

                </div>

                

              

                <div className="content-data">

                    {data_fetched}

                </div>

                <form  encType='multipart/form-data'>

                    <div className="history-content">

                    
                     
                        <input  type="text"  name="data" value={data}  onChange={change} placeholder="search :" />


                        <select name="id" onChange={change}> 
  
                        
                            <option> 	id:  </option>   

                            <option> 	name  </option>   


                            <option> 	Secter   </option>  


                            <option>	day </option>   


                            <option> 	id  </option>  

                        
                            <option>month </option>  
                            
                            
                            <option> year </option>   


                            <option> image </option>  


                            <option> Secter_name </option>  
                            
                            
                            
                        </select>

                          <select  name="operation"   onChange={change}>   <option>  operations: </option> <option>  {"<"}</option> <option>  {">"}  </option> <option> {"="} </option>  <option> {">="} </option> <option>  {"<="}  </option> </select>

                        <input type="button" value="add" onClick={add}/>


                        <input type="button" value="del" onClick={del}/>
                       

                        <input type="button" value="view" onClick={view}/>
 
       
                </div>

            </form>




        </>

    )
    
}

export default My_History;