var express = require('express');
var router = express.Router();
const path =require ("path")
var  path_image=[]
var p=""




var mysql = require('mysql');
 

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  port:"",
  password: "",
  database: "figeac"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

})

const multer=require("multer");
const { Console } = require('console');
const { reset } = require('nodemon');


const storage=multer.diskStorage({

  destination:(req,file,cb)=>{

    cb(null,"data")


  },
  filename:(req,res,cb)=>{

    p=Date.now()+path.extname(res.originalname)

    cb(null,p)

    path_image.push(p)


    
  }

})

const upload =multer({storage:storage})


router.post('/add/secter',(req, res)=> {

console.log(req.body)

  var sql = "INSERT INTO secter (Secter_name,Secter_id,admin) VALUES (?,?,?)";



  var value=[req.body.Secter_name,req.body.Secter_id,req.body.Admin]

  con.query(sql, value, (err)=> {

    if (err) throw err;

     console.log("1 record inserted in table secter");

  })


  path_image=[]
 
 

})


router.post('/add/admin' ,(req, res)=> {


console.log(req.body)

  var sql = "INSERT INTO admin (Admin_id,Admin_first_name,Admin_last_name) VALUES (?,?,?)";

  

  var value=[req.body.Admin_id,req.body.Admin_first_name,req.body.Admin_last_name]

  con.query(sql, value, (err)=> {

    if (err) throw err;


      console.log("1 record inserted in table admin");
      
 

  })


})



router.post('/add/pc',(req, res)=> {



 var sql ="SELECT (Secter_name) FROM secter WHERE Secter_id=?";

  var value=[req.body.Secter]

  console.log(req.body)

  con.query(sql,value,(err,result,field)=>{


    var sql = "INSERT INTO pc  (Pc_id,Pc_name,Secter,day,month,year,Secter_name) VALUES (?,?,?,?,?,?,?)";

    console.log(result)
   
    var val=[req.body.Pc_id,req.body.Pc_name,req.body.Secter,req.body.day,req.body.month,req.body.year,result[0].Secter_name]


    con.query(sql, val, (err)=> {

    if (err) throw err;

      console.log("1 record inserted in table");
        
      
      })

    
    })



  

})

router.get("/image/pc",(req,res)=>{

  console.log("--")

  con.query("SELECT * FROM pc", function (err, result, fields) {

   
   
    res.send(result)
   
  })
 
 
 
})



router.get("/image/secter",(req,res)=>{

  con.query("SELECT * FROM secter", function (err, result, fields) {
   
    res.send(result)
    console.log(result)
   
  })
 
 
})


router.get("/image/admin",(req,res)=>{

  con.query("SELECT * FROM admin", function (err, result, fields) {
   
    res.send(result)
   
  })
 
 
})



router.post('/update/pc' ,upload.single("Pc_image"),(req, res)=> {

 

    var sql = "UPDATE pc  SET  Pc_image = ?  WHERE Pc_id= ?";

    var val=[path_image[0], req.body.Pc_id]
   
    con.query(sql, val,function (err, result) {

      if (err) throw err;

      console.log(result+ " record(s) updated");
    });



    var sql = "SELECT  *    FROM pc  WHERE  Pc_id=?";


    var value=[req.body.Pc_id]
 
 
   con.query(sql, value, (err,result,fields)=> {

     
    var sql = "INSERT INTO history  (name,Secter,day,id,month,year,image,Secter_name) VALUES (?,?,?,?,?,?,?,?)";

    console.log(result)

    var value=[result[0].Pc_name,result[0].Secter,result[0].day,result[0].Pc_id,result[0].month,result[0].year,result[0].Pc_image,result[0].Secter_name]
 
 
   con.query(sql, value, (err)=> {
 
   if (err) throw err;
 
      console.log("1 record inserted in table pc");
       
     
    })



 
  
     
    })



   

  path_image=[]
 
  

})


router.get("/id/admin",(req,res)=>{

  con.query("SELECT (admin_id) FROM admin", function (err, result, fields) {
   
    res.send(result)
   
  })
 
 
})


router.get("/:id/:data/:operation/history",(req,res)=>{





console.log("-----------")

  const sql="SELECT * FROM history WHERE"+"  "+ req.params.id+req.params.operation+" ? ";

  const val=[req.params.data]


  con.query(sql,val, function (err, result, fields) {
   
   
    console.log(result)

    res.send(result)
   
  })


 
})

router.get("/:id_1/:data_1/:operation_1/:id_2/:data_2/:operation_2/history",(req,res)=>{

  
  
  const sql="SELECT  * FROM history WHERE"+"  "+ req.params.id_1+ req.params.operation_1+"?"+" AND "+" "+req.params.id_2+req.params.operation_2+"?";

  console.log("SELECT  * FROM history WHERE"+"  "+ req.params.id_1+ req.params.operation_1+" AND "+" "+req.params.id_2+req.params.operation_2+"?")

  const val=[req.params.data_1,req.params.data_2]


  con.query(sql,val, function (err, result, fields) {
   
   
    console.log(result)

    res.send(result)
   
  })

   
})

  
router.get("/:id_1/:data_1/:operation_1/:id_2/:data_2/:operation_2/:id_3/:data_3/:operation_3/history",(req,res)=>{

  
  
  const sql="SELECT  * FROM history WHERE"+"  "+ req.params.id_1+req.params.operation_1+"?"+" AND "+" "+req.params.id_2+ req.params.operation_2+"?" +"AND "+" "+req.params.id_3+req.params.operation_3+"?";

  console.log("SELECT  * FROM history WHERE"+"  "+ req.params.id_1+req.params.data_1+"?"+" AND "+" "+req.params.id_2+ req.params.data_2+"?" +"AND "+" "+req.params.id_3+req.params.data_3+"?"); 

  const val=[req.params.data_1,req.params.data_2,req.params.data_3]


  con.query(sql,val, function (err, result, fields) {
   
   
    console.log(result)

    res.send(result)
   
  })


  })

  console.log("--------------")

router.get("/:id_1/:data_1/:operation_1/:id_2/:data_2/:operation_2/:id_3/:data_3/:operation_3/:id_4/:data_4/:operation_4/history",(req,res)=>{

  console.log("SELECT  * FROM pc WHERE"+"  "+ req.params.id_1+"= ? AND "+" "+req.params.id_2+"= ?  AND"+" "+req.params.id_3+"= ? And "+" "+req.params.id_4+"= ?"); 

  
  const sql="SELECT  * FROM history WHERE"+"  "+ req.params.id_1+req.params.operation_1+"?"+ "AND "+" "+req.params.id_2+req.params.operation_2+"?" +"AND "+" "+req.params.id_3+req.params.operation_3+"?" +"AND"+" "+req.params.id_4+req.params.operation_4+"?";


  const val=[req.params.data_1,req.params.data_2,req.params.data_3,req.params.data_4]


  con.query(sql,val, function (err, result, fields) {
   
   
    console.log(result)

    res.send(result)

  })
  

       
  })



  

  


  router.get("/:id_1/:data_1/:operation_1/:id_2/:data_2/:operation_2/:id_3/:data_3/:operation_3/:id_4/:data_4/:operation_4/:id_5/:data_5/:operation_5/history",(req,res)=>{


 
 const sql="SELECT  * FROM history WHERE"+"  "+ req.params.id_1+req.params.operation_1+"?"+ "AND "+" "+req.params.id_2+req.params.operation_2+"?"+" " +"AND "+" "+req.params.id_3+req.params.operation_3+"?"+" " +"AND"+" "+req.params.id_4+req.params.operation_4+"?"+" "+"AND"+" "+req.params.id_5+req.params.operation_5+"?";


  const val=[req.params.data_1,req.params.data_2,req.params.data_3,req.params.data_4,req.params.data_5]

  console.log("SELECT  * FROM history WHERE"+"  "+ req.params.id_1+req.params.operation_1+"?"+ "AND "+" "+req.params.id_2+req.params.operation_2+"?" +"AND "+" "+req.params.id_3+req.params.operation_3+"?" +"AND"+" "+req.params.id_4+req.params.operation_4+"?"+"AND"+" "+req.params.id_5+req.params.operation_5+"?")


  con.query(sql,val, function (err, result, fields) {
   
   
    console.log(result)

    res.send(result)

  })
  


         
})



router.get("/:id_1/:data_1/:operation_1/:id_2/:data_2/:operation_2/:id_3/:data_3/:operation_3/:id_4/:data_4/:operation_4/:id_5/:data_5/:operation_5/:id_6/:data_6/:operation_6/history",(req,res)=>{


  const sql="SELECT  * FROM history WHERE"+"  "+ req.params.id_1+req.params.operation_1+"?" +"AND "+" "+req.params.id_2+req.params.operation_2+"?" +"AND "+" "+req.params.id_3+req.params.operation_3+"?"+"AND"+" "+req.params.id_4+req.params.operation_4+"?" +"AND"+" "+req.params.id_5+req.params.operation_5+"?" +"And"+" "+req.params.id_6+req.params.operation_6+"?";

 
  console.log("SELECT  * FROM history WHERE"+"  "+ req.params.id_1+req.params.operation_1+"?" +"AND "+" "+req.params.id_2+req.params.operation_2+"?" +"AND "+" "+req.params.id_3+req.params.operation_3+"?"+"AND"+" "+req.params.id_4+req.params.operation_4+"?" +"AND"+" "+req.params.id_5+req.params.operation_5+"?" +"And"+" "+req.params.id_6+req.params.operation_6+"?")

  const val=[req.params.data_1,req.params.data_2,req.params.data_3,req.params.data_4,req.params.data_5,req.params.data_6]

 


  con.query(sql,val, function (err, result, fields) {
   
   
    console.log(result)


    
    res.send(result)
 

  

  })
  



           
})
          
router.get("/:id_1/:data_1/:operation_1/:id_2/:data_2/:operation_2/:id_3/:data_3/:operation_3/:id_4/:data_4/:operation_4/:id_5/:data_5/:operation_5/:id_6/:data_6/:operation_6/:id_7/:data_7/:operation_7/history",(req,res)=>{

  sql="SELECT  * FROM history WHERE"+"  "+ req.params.id_1+req.params.operation_1+"?" +"AND "+" "+req.params.id_2+req.params.operation_2+"?" +"AND "+" "+req.params.id_3+req.params.operation_3+"?"+"AND"+" "+req.params.id_4+req.params.operation_4+"?" +"AND"+" "+req.params.id_5+req.params.operation_5+"?" +"And"+" "+req.params.id_6+req.params.operation_6+"?" +"And"+" "+req.params.id_7+req.params.operation_7+"?";

 
  console.log("SELECT  * FROM history WHERE"+"  "+ req.params.id_1+req.params.operation_1+"?" +"AND "+" "+req.params.id_2+req.params.operation_2+"?" +"AND "+" "+req.params.id_3+req.params.operation_3+"?"+"AND"+" "+req.params.id_4+req.params.operation_4+"?" +"AND"+" "+req.params.id_5+req.params.operation_5+"?" +"And"+" "+req.params.id_6+req.params.operation_6+"?")

  const val=[req.params.data_1,req.params.data_2,req.params.data_3,req.params.data_4,req.params.data_5,req.params.data_6,req.params.data_7]

 


  con.query(sql,val, function (err, result, fields) {
   
   
    console.log(result)


    
    res.send(result)
 

  

  })
  
})



router.get("/:id_1/:data_1/:operation_1/:id_2/:data_2/:operation_2/:id_3/:data_3/:operation_3/:id_4/:data_4/:operation_4/:id_5/:data_5/:operation_5/:id_6/:data_6/:operation_6/:id_7/:data_7/:operation_7/:id_8/:data_8/:operation_8/history",(req,res)=>{

  sql="SELECT  * FROM history WHERE"+"  "+ req.params.id_1+req.params.operation_1+"?" +"AND "+" "+req.params.id_2+req.params.operation_2+"?" +"AND "+" "+req.params.id_3+req.params.operation_3+"?"+"AND"+" "+req.params.id_4+req.params.operation_4+"?" +"AND"+" "+req.params.id_5+req.params.operation_5+"?" +"And"+" "+req.params.id_6+req.params.operation_6+"?" +"And"+" "+req.params.id_7+req.params.operation_7+"?" +"And"+" "+req.params.id_8+req.params.operation_8+"?";

 
  console.log("SELECT  * FROM history WHERE"+"  "+ req.params.id_1+req.params.operation_1+"?" +"AND "+" "+req.params.id_2+req.params.operation_2+"?" +"AND "+" "+req.params.id_3+req.params.operation_3+"?"+"AND"+" "+req.params.id_4+req.params.operation_4+"?" +"AND"+" "+req.params.id_5+req.params.operation_5+"?" +"And"+" "+req.params.id_6+req.params.operation_6+"?")

  const val=[req.params.data_1,req.params.data_2,req.params.data_3,req.params.data_4,req.params.data_5,req.params.data_6,req.params.data_7,req.params.data_8]

 


  con.query(sql,val, function (err, result, fields) {
   
   
    console.log(result)


    
    res.send(result)
 

  

  })
  
})



router.get("/id/secter",(req,res)=>{

  con.query("SELECT (secter_id) FROM secter", function (err, result, fields) {
   
    res.send(result)
   
  })
 
 
})

const io=require("socket.io")(5000,{
  cors:{
    origin:["http://localhost:3000"]
  }
})



io.on("connection",(socket)=>{

  console.log(socket.id)


  socket.on("id_image",(data)=>{

    console.log("id_image",data)

    


    socket.join(data);

    
  })


  socket.on("id_add",(data)=>{

    socket.join(data);

   
    console.log("id_add",data)

   


    

   
    const val=[data]

    const sql="SELECT (Pc_image) FROM pc WHERE Pc_id = ? ";
  
    
  
    con.query(sql,val, function (err, result, fields) {


      console.log(result[0])

    


      socket.in(data).emit('room', {"id":data,"data":result[0]})



    })

  
   
  })


  
 
  

  
 
  
})





module.exports = router;
