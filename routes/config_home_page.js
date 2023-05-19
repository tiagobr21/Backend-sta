const express = require('express');
const connection =require('../connection');
const router = express.Router();
const multer = require('multer');
const multerConfig = require('../config/multer');
let fs = require('fs');
require('dotenv').config();



router.patch("/uploadaviso/:id", multer(multerConfig).single("file"),async (req,res)=>{


    let filename = req.file.filename;
    let id = req.params.id;

    let query = "update avisos set filename = ? where id = ?"
    const image = `http://localhost:3000/files/${filename}`;
   
    connection.query(query,[filename,id],(err,results)=>{
       if(!err){
         return res.status(200).json({message:'Aviso carregado com sucesso!'})
       }else{
         return res.status(500).json(err);
       }
   }) 
   
});

router.get("/read",(req,res)=>{

    const query = "select * from avisos";

    connection.query(query,(err,results)=>{
      if(err){
        res.status(500).json(err);
      }else{
        res.status(200).json(results)
      }
    });

});

module.exports = router;