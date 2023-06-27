const express = require('express');
const connection =require('../connection');
const router = express.Router();
const jwt = require('jsonwebtoken');
var auth = require('../services/authentication');
var checkRole = require('../services/checkRole');
const nodemailer = require('nodemailer');
const multer = require('multer');
const multerConfig = require('../config/multer');
let fs = require('fs');
require('dotenv').config();


// desenvolvimento: http://localhost:3000
  // prod: https://back-sta.herokuapp.com




router.patch("/uploadimage/:id", multer(multerConfig).single("file"), (req,res)=>{
    console.log(req.file);

     let url = req.file.location;
     let id = req.params.id;
     let query = 'update user set url = ? where id = ? ';

    
     connection.query(query,[url,id],(err,results)=>{
        if(!err){
          return res.status(200).json({message:'Imagem carregada com sucesso!'})
        }else{
          return res.status(500).json(err);
        }
    })  
    
 })

 router.get("/getimage/:id",auth.authenticateToken,(req,res)=>{

    let id = req.params.id;
    let query= 'select url from user where id = ? ';
   
        connection.query(query,[id],(err,results)=>{
            if(!err){
                return res.status(200).json(results)
            }else{
                return res.status(500).json(err);
            } 
        })
  
   
})



 router.delete('/deleteimage/:id',auth.authenticateToken,(req,res)=>{
    


    let id = req.params.id;
    let queryImage = 'update user set url = null where id = ?';
    let queryurl = 'select url from user where id = ?';
    console.log(id )
        connection.query(queryurl,[id],(err,url)=>{
               connection.query(queryImage,[id],(err,results)=>{
                if(!err){
                    if(results.affectedRows == 0){
                        res.status(404).json({message:"Usuário não encontrado"})
                    }
                    res.status(200).json({message:"Imagem deletada com sucesso !!!"})

                    fs.rm(`tmp/uploads/${url[0].url}`, { recursive:true }, (err) => {
                        if(err){
                            // File deletion failed
                            console.error(err.message);
                            return;
                        }
                        console.log("File deleted successfully");
                    })
               
                }else{
                    res.status(500).json(err)
                }
            })   
        }) 
 })
 


router.post('/signup',(req,res)=>{
    let user = req.body;
    let query = "select email,password,role,status from user where email=?"
    connection.query(query,[user.email],(err,results)=>{
       if(!err){             
        if(results.length <=0){
         
           var query = "insert into user(name,email,password,status,role) values(?,?,?,'false','user')"

            connection.query(query,[user.name,user.email,user.password],(err,results)=>{
                if(!err){
                   return res.status(200).json({message:"Cadastrado com Sucesso"})
                }else{
                   return res.status(500).json(err)
                }
            })

        }else{
           return res.status(400).json({message: "Email já Existe."}) 
        }
       }    
         else{
            return res.status(500).json(err);
        }
    })
})  

router.post('/login',(req,res)=>{

    const user = req.body;
    let query = "select id,name,email,password,status,role,url from user where email = ?"

    connection.query(query, [user.email] , (err,results)=>{

        if(!err){

            if(results.length <=0 || results[0].password != user.password){
                return res.status(401).json({mesagge:"Usuário ou Senha Incorreto"});


            }else if(results[0].status === 'false'){

                return res.status(404).json({message:"Espere o Administrador Aprovar"});

            }else if(results[0].password == user.password){

                const response = {email: results[0].email, role: results[0].role }
                const accessToken = jwt.sign(response,process.env.ACCESS_TOKEN,{expiresIn:'8h'})
                res.status(200).json({message:'Usuário '+ results[0].name +' logado com sucesso',id:results[0].id,user:results[0].name, role:results[0].role,url:results[0].url, token: accessToken})

            }else{
                return res.status(400).json({message: "Algo ocorreu errado, tente novamente mais tarde"});
            }
        }else{
            return res.status(500).json(err);
        }
    })
})


router.post('/sendemail',(req,res)=>{
    
    const transport = nodemailer.createTransport({
        host:'smtp.office365.com',
        port: 587,
        secure: false,
        auth:{
            user:'paroquiasantateresinhatest@outlook.com',
            pass:'Bondade07!'
        }
    })
    var mailOptions = {
        from: 'Sistema Santa Teresinha <paroquiasantateresinhatest@outlook.com>',
        to: 'paroquiasantateresinhatest@outlook.com',
        subject: 'Senha do Sta',
        html: '<p> <b> Seu Login da Sta</b> <br> <b>Email:</b>'+'paroquiasantateresinhatest@outlook.com'+'<br> <b>Senha:</b> '+'paroquiasantateresinhatest@outlook.com'+' <br> <a href="http://localhost:4200/"> Clique aqui para Entrar </a>  </p>',
        text: 'Olá , test'
      }
      transport.sendMail(mailOptions,function(error,info){
          if(error){
              console.log(error);
          }else{
              console.log('Email enviado: '+info.response);
          }
      }); 
});



router.post('/forgotpassword',(req,res)=>{ 
    const user = req.body;
    let query = "select email,password from user where email=?";
    connection.query(query,[user.email],(err,results)=>{
        if(!err){
            console.log(results);
             if(results.length <= 0){
               return res.status(200).json({message: "Recuperação de senha enviado com sucesso para seu email !!!"});
            }else{
                const transport = nodemailer.createTransport({
                    host:'smtp.gmail.com',
                    port: 465,
                    secure: true,
                    auth:{
                        user:'santateresinhamanaus@gmail.com',
                        pass:'mmsibnoqnfmlvgzw'
                    }
                })
                var mailOptions = {
                  from: 'Sistema Santa Teresinha <santateresinhamanaus@gmail.com>',
                  to: results[0].email,
                  subject: 'Recuperação de Senha',
                  html: '<p> <b> Seu Login da Sta</b> <br> <b>Email:</b>'+results[0].email+'<br> <b>Senha:</b> '+results[0].password+' <br> <a href="https://front-sta.herokuapp.com/login"> Clique aqui para Entrar </a>  </p>',
                  text: 'Olá , test'
                }
                transport.sendMail(mailOptions,function(error,info){
                    if(error){
                        console.log(error);
                    }else{
                        console.log('Email enviado: '+info.response);
                        res.status(200).json({message: "Recuperação de senha enviado com sucesso para seu email !!!"});
                    }
                }); 
                
            }
        }else{
            res.status(500).json(err)
        }
    })
})      





router.get('/get',auth.authenticateToken,checkRole.checkRole,(req,res)=>{
    let query = "select id,name,email,password,status,role from user"
    connection.query(query,(err,results)=>{
        if(!err){
           return res.status(200).json(results);
        }else{
           return res.status(500).json(err);
        }
    })
})


router.get('/getbyid/:id',auth.authenticateToken,checkRole.checkRole,(req,res)=>{
    let id = req.params.id;
    let query = ('select *from user where id=?');
    connection.query(query,[id],(err,results)=>{
      if(!err){
        if(results.affectedRows==0){
            res.status(404).json({message:'id não encontrado'});
        }
        return res.status(200).json(results);
    }else{
        res.status(500).json(err);
    }
  });
  });

router.patch('/updateuser/:id',auth.authenticateToken,checkRole.checkRole,(req,res)=>{
    let id = req.params.id
    let user = req.body;
    let query = "update user set name=?, email=? , password=?, status=? , role=? where id=?"
    connection.query(query,[user.name,user.email,user.password,user.status,user.role,id],(err,results)=>{
        if(!err){
          if(results.affectedRows == 0){
            return res.status(404).json({message:"O Usuário não existe "});
          }
          return res.status(200).json({message:"Usuário Atualizado com Sucesso!!!"});
        }else{
          return res.status(500).json(err);
        }
    })
});

router.delete("/delete/:id",auth.authenticateToken,checkRole.checkRole,(req,res)=>{
   let id = req.params.id
   let query = 'delete from user where id = ?';
   connection.query(query,[id],(err,results)=>{
      if(!err){
        if(results.affectedRows == 0){
           res.status(404).json({mesagge:'usuário não encontrado'})
        }
        res.status(200).json({message:'Usuário deletado com sucesso !!!'})
      }else{
        res.status(500).json(err)
      }
   })
})



router.get('/checkToken',auth.authenticateToken,(req,res)=>{
    return res.status(200).json({message:"true"});
})

router.post('/changePassword',auth.authenticateToken,(req,res)=>{
    const user = req.body;
    const email = res.locals.email;
    console.log(email)
    let query = "select * from user where email=? and password=?";
    connection.query(query,[email,user.oldPassword],(err,results)=>{
        if(!err){
           if(results.length <=0){

             return res.status(400).json({message:"Senha atual incorreta!"});

           }else if(results[0].password == user.oldPassword){
               let query = "update user set password=? where email=?";
               connection.query(query,[user.newPassword,email],(err,results)=>{
                  if(!err){
                      return res.status(200).json({message:"Senha trocada com sucesso !!!"})
                  }else{
                    return res.status(500).json(err)
                  }
               }) 
           }else{
              return res.status(400).json({message:"Alguma coisa aconteceu errado. Por favor tente novamente mais tarde"});
           }

        }else{
            return res.status(500).json(err);
        }
    })
})


module.exports = router;