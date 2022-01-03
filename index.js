import express from "express";
import mongoose from "mongoose";
import User from './Model'
import cors from "cors"
import path from 'path';
const __dirname = path.resolve();

import dotenv from "dotenv";
dotenv.config({path:__dirname+'/config.env'});

const apps = express()
apps.use(cors())
apps.use(express.json({limit: '50mb'}));
apps.use(express.urlencoded({limit: '50mb'}));



mongoose.connect(`${process.env.Databaseurl}`,
 {
   useNewUrlParser: true, 
   useUnifiedTopology: true ,
 }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
 console.log("Connected successfully");
});


apps.get('/', async (req, res) => {
  User.find((err,data)=>{
      if(err){
          console.log("error")
      }
      else{
       
          res.status(200).send(data)
      }
  })
})
apps.post("/add_user", async (request, response) => {
   const userdb = request.body
      User.create(userdb,(err,data)=>{
       if(err){
         response.status(500).send(err)
       }
       else{
           response.status(201).send(data)
       }
   })
});
apps.patch('/:id',async (request,response)=>{
  try {
const updatedStudent = await User.findByIdAndUpdate(request.params.id,request.body);
     response.json(updatedStudent);
  } catch(err) {
    response.status(400).send({ error: err });
    
  }

})
apps.put('/:id',async (request,response)=>{
  try {
const updatedStudent = await User.findByIdAndUpdate(request.params.id,request.body);
     response.json(updatedStudent);
  } catch(err) {
    response.status(400).send({ error: err });
    
  }

})
apps.delete('/:id',async (request,response)=>{
  try {
const updatedStudent = await User.findByIdAndRemove(request.params.id);
     response.json(updatedStudent);
  } catch(err) {
    response.status(400).send({ error: err });
    
  }

})
if(process.env.NODE_ENV === 'production'){    
  apps.use(express.static(path.join(__dirname, "./social-media/build"))); // set static folder 
  //returning frontend for any route other than api 
  app.get('*',(req,res)=>{     
      res.sendFile (path.resolve(__dirname,'social-media','build',         
                    'index.html' ));    
  });
}

const port = process.env.PORT || 8210;





apps.listen(port, () => {
    console.log("server is runnig",port)
})