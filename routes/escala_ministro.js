const express = require('express');
const connection = require('../connection');
const router = express.Router();
var auth = require('../services/authentication');
var checkRole = require('../services/checkRole');
let fs = require('fs');
let path = require('path');
let pdf = require('html-pdf');
let ejs = require('ejs');
let uuid = require('uuid');
const { resourceUsage } = require('process');

router.post('/gerarpdf',(req,res)=>{

  let escala_ministro = req.body;
  let paginas = escala_ministro.length;


    if(paginas == 1){

        let pagina1 = JSON.parse(escala_ministro[0].pagina1);
        let pagina2 = undefined
        let pagina3 = undefined
        let pagina4 = undefined
        let pagina5 = undefined
        let pagina6 = undefined
        let pagina7 = undefined
        let pagina8 = undefined
        let pagina9 = undefined
        let pagina10 = undefined
        let tipo = escala_ministro[0].tipo;
        const generateUuid = uuid.v1();
    
        

        if(pagina1.length <= 10){

    
            ejs.renderFile(path.join(__dirname,'./','escala_ministro.ejs'),
            {pagina1:pagina1,pagina2:pagina2,pagina3:pagina3,pagina4:pagina4,pagina5:pagina5,pagina6:pagina6,pagina7:pagina7,pagina8:pagina8,pagina9:pagina9,pagina10:pagina10,tipo:tipo},(err,results)=>{
              
               
                if(err){
                  console.log(err)
                  return res.status(500).json("error"+err)
                }else{
                 
                  pdf.create(results,{childProcessOptions: {env: {OPENSSL_CONF: '/dev/null',},}}).toFile('pdfs/escala-ministro-pdf/'+'escala-ministro-'+generateUuid+'.pdf',(err,data)=>{
                      if(err){
                        console.log("error"+err)
                        return res.status(500).json(err)
                      }else{

                          return res.status(200).json({message:'Escala criada com Sucesso !!!'})
                      }
                  })

                  let data = 'escala-ministro-'+generateUuid+'.pdf';
                  let query = 'insert into pdf_escala_ministro values (default,?)';
                
                  connection.query(query,[data],(err,results)=>{
                    if(!err){
       
                    }else{
                      return res.status(500).json(err)
                    } 
                  })
                }
            }) 
        }else{
          res.status(500).json().json({message:'Quantidade de escalas acima do limite'})
        }

    }

    if(paginas == 2){
      
   
      let pagina1 = JSON.parse(escala_ministro[0].pagina1);
      let pagina2 = JSON.parse(escala_ministro[1].pagina2);
      let pagina3 = undefined
      let pagina4 = undefined
      let pagina5 = undefined
      let pagina6 = undefined
      let pagina7 = undefined
      let pagina8 = undefined
      let pagina9 = undefined
      let pagina10 = undefined
      let tipo = escala_ministro[0].tipo;
      const generateUuid = uuid.v1();
      
  
  
       if(pagina1.length <= 10 && pagina2.length <= 10){
      
          ejs.renderFile(path.join(__dirname,'./','escala_ministro.ejs'),
          {pagina1:pagina1,pagina2:pagina2,pagina3:pagina3,pagina4:pagina4,pagina5:pagina5,pagina6:pagina6,pagina7:pagina7,pagina8:pagina8,pagina9:pagina9,pagina10:pagina10,tipo:tipo},(err,results)=>{
        
              if(err){
                return res.status(500).json("error"+err)
              }else{
                pdf.create(results,{childProcessOptions: {env: {OPENSSL_CONF: '/dev/null',},}}).toFile('pdfs/escala-ministro-pdf/'+'escala-ministro-'+generateUuid+'.pdf',(err,data)=>{
                    if(err){
                      console.log(err)
                      return res.status(500).json(err)
                    }else{
                      return res.status(200).json({message:'Escala criada com Sucesso !!!'})
                    }
                })
                
                let data = 'escala-ministro-'+generateUuid+'.pdf';
                let query = 'insert into pdf_escala_ministro values (default,?)';
              
                connection.query(query,[data],(err,results)=>{
                  if(!err){
     
                  }else{
                    return res.status(500).json(err)
                  } 
                })
              }
          })

        }else{
          res.status(500).json({message:'Quantidade de escalas acima do limite'})
        }
    }
    
    if(paginas == 3){
      
   
      let pagina1 = JSON.parse(escala_ministro[0].pagina1);
      let pagina2 = JSON.parse(escala_ministro[1].pagina2);
      let pagina3 = JSON.parse(escala_ministro[2].pagina3);
      let pagina4 = undefined
      let pagina5 = undefined
      let pagina6 = undefined
      let pagina7 = undefined
      let pagina8 = undefined
      let pagina9 = undefined
      let pagina10 = undefined
      let tipo = escala_ministro[0].tipo;
      const generateUuid = uuid.v1();
      
  
  
       if(pagina1.length <= 10 && pagina2.length <= 10 && pagina3.length <= 10){
      
          ejs.renderFile(path.join(__dirname,'./','escala_ministro.ejs'),
          {pagina1:pagina1,pagina2:pagina2,pagina3:pagina3,pagina4:pagina4,pagina5:pagina5,pagina6:pagina6,pagina7:pagina7,pagina8:pagina8,pagina9:pagina9,pagina10:pagina10,tipo:tipo},(err,results)=>{
        
              if(err){
                return res.status(500).json(err)
              }else{
                pdf.create(results,{childProcessOptions: {env: {OPENSSL_CONF: '/dev/null',},}}).toFile('pdfs/escala-ministro-pdf/'+'escala-ministro-'+generateUuid+'.pdf',(err,data)=>{
                    if(err){
                      console.log(err)
                      return res.status(500).json(err)
                    }else{
                      return res.status(200).json({message:'Escala criada com Sucesso !!!'})
                    }
                })
                
                let data = 'escala-ministro-'+generateUuid+'.pdf';
                let query = 'insert into pdf_escala_ministro values (default,?)';
              
                connection.query(query,[data],(err,results)=>{
                  if(!err){
     
                  }else{
                    return res.status(500).json(err)
                  } 
                })
              }
          })

        }else{
          res.status(500).json({message:'Quantidade de escalas acima do limite'})
        }
    }
    
    if(paginas == 4){
      
   
      let pagina1 = JSON.parse(escala_ministro[0].pagina1);
      let pagina2 = JSON.parse(escala_ministro[1].pagina2);
      let pagina3 = JSON.parse(escala_ministro[2].pagina3);
      let pagina4 = JSON.parse(escala_ministro[3].pagina4);
      let pagina5 = undefined
      let pagina6 = undefined
      let pagina7 = undefined
      let pagina8 = undefined
      let pagina9 = undefined
      let pagina10 = undefined
      let tipo = escala_ministro[0].tipo;
      const generateUuid = uuid.v1();
      

       if(pagina1.length <= 10 && pagina2.length <= 10 && pagina3.length <= 10 &&  pagina4.length <= 10){
      
          ejs.renderFile(path.join(__dirname,'./','escala_ministro.ejs'),
          {pagina1:pagina1,pagina2:pagina2,pagina3:pagina3,pagina4:pagina4,pagina5:pagina5,pagina6:pagina6,pagina7:pagina7,pagina8:pagina8,pagina9:pagina9,pagina10:pagina10,tipo:tipo},(err,results)=>{
        
              if(err){
                return res.status(500).json("error"+err)
              }else{
                pdf.create(results,{childProcessOptions: {env: {OPENSSL_CONF: '/dev/null',},}}).toFile('pdfs/escala-ministro-pdf/'+'escala-ministro-'+generateUuid+'.pdf',(err,data)=>{
                    if(err){
                      console.log(err)
                      return res.status(500).json(err)
                    }else{
                      return res.status(200).json({message:'Escala criada com Sucesso !!!'})
                    }
                })
                
                let data = 'escala-ministro-'+generateUuid+'.pdf';
                let query = 'insert into pdf_escala_ministro values (default,?)';
              
                connection.query(query,[data],(err,results)=>{
                  if(!err){
     
                  }else{
                    return res.status(500).json(err)
                  } 
                })
              }
          })

        }else{
          res.status(500).json({message:'Quantidade de escalas acima do limite'})
        }
    }
   
    if(paginas == 5){
      
      let pagina1 = JSON.parse(escala_ministro[0].pagina1);
      let pagina2 = JSON.parse(escala_ministro[1].pagina2);
      let pagina3 = JSON.parse(escala_ministro[2].pagina3);
      let pagina4 = JSON.parse(escala_ministro[3].pagina4);
      let pagina5 = JSON.parse(escala_ministro[4].pagina5);
      let pagina6 = undefined
      let pagina7 = undefined
      let pagina8 = undefined
      let pagina9 = undefined
      let pagina10 = undefined
      let tipo = escala_ministro[0].tipo;
      const generateUuid = uuid.v1();
      
  
  
       if(pagina1.length <= 10 && pagina2.length <= 10 && pagina3.length <= 10 &&  pagina4.length <= 10
        &&  pagina5.length <= 10){
      
          ejs.renderFile(path.join(__dirname,'./','escala_ministro.ejs'),
          {pagina1:pagina1,pagina2:pagina2,pagina3:pagina3,pagina4:pagina4,pagina5:pagina5,pagina6:pagina6,pagina7:pagina7,pagina8:pagina8,pagina9:pagina9,pagina10:pagina10,tipo:tipo},(err,results)=>{
        
              if(err){
                return res.status(500).json("error"+err)
              }else{
                pdf.create(results,{childProcessOptions: {env: {OPENSSL_CONF: '/dev/null',},}}).toFile('pdfs/escala-ministro-pdf/'+'escala-ministro-'+generateUuid+'.pdf',(err,data)=>{
                    if(err){
                      console.log(err)
                      return res.status(500).json(err)
                    }else{
                      return res.status(200).json({message:'Escala criada com Sucesso !!!'})
                    }
                })
                
                let data = 'escala-ministro-'+generateUuid+'.pdf';
                let query = 'insert into pdf_escala_ministro values (default,?)';
              
                connection.query(query,[data],(err,results)=>{
                  if(!err){
     
                  }else{
                    return res.status(500).json(err)
                  } 
                })
              }
          })

        }else{
          res.status(500).json({message:'Quantidade de escalas acima do limite'})
        }
    }
    
    if(paginas == 6){
      
      let pagina1 = JSON.parse(escala_ministro[0].pagina1);
      let pagina2 = JSON.parse(escala_ministro[1].pagina2);
      let pagina3 = JSON.parse(escala_ministro[2].pagina3);
      let pagina4 = JSON.parse(escala_ministro[3].pagina4);
      let pagina5 = JSON.parse(escala_ministro[4].pagina5);
      let pagina6 = JSON.parse(escala_ministro[5].pagina6);
      let pagina7 = undefined
      let pagina8 = undefined
      let pagina9 = undefined
      let pagina10 = undefined
      let tipo = escala_ministro[0].tipo;
      const generateUuid = uuid.v1();
      
  
  
       if(pagina1.length <= 10 && pagina2.length <= 10 && pagina3.length <= 10 &&  pagina4.length <= 10
        &&  pagina5.length <= 10   &&  pagina6.length <= 10){
      
          ejs.renderFile(path.join(__dirname,'./','escala_ministro.ejs'),
          {pagina1:pagina1,pagina2:pagina2,pagina3:pagina3,pagina4:pagina4,pagina5:pagina5,pagina6:pagina6,pagina7:pagina7,pagina8:pagina8,pagina9:pagina9,pagina10,tipo:tipo},(err,results)=>{
        
              if(err){
                return res.status(500).json("error"+err)
              }else{
                pdf.create(results,{childProcessOptions: {env: {OPENSSL_CONF: '/dev/null',},}}).toFile('pdfs/escala-ministro-pdf/'+'escala-ministro-'+generateUuid+'.pdf',(err,data)=>{
                    if(err){
                      console.log(err)
                      return res.status(500).json(err)
                    }else{
                      return res.status(200).json({message:'Escala criada com Sucesso !!!'})
                    }
                })
                
                let data = 'escala-ministro-'+generateUuid+'.pdf';
                let query = 'insert into pdf_escala_ministro values (default,?)';
              
                connection.query(query,[data],(err,results)=>{
                  if(!err){
     
                  }else{
                    return res.status(500).json(err)
                  } 
                })
              }
          })

        }else{
          res.status(500).json({message:'Quantidade de escalas acima do limite'})
        }
    }

     
    if(paginas == 7){
      
   
      let pagina1 = JSON.parse(escala_ministro[0].pagina1);
      let pagina2 = JSON.parse(escala_ministro[1].pagina2);
      let pagina3 = JSON.parse(escala_ministro[2].pagina3);
      let pagina4 = JSON.parse(escala_ministro[3].pagina4);
      let pagina5 = JSON.parse(escala_ministro[4].pagina5);
      let pagina6 = JSON.parse(escala_ministro[5].pagina6);
      let pagina7 = JSON.parse(escala_ministro[6].pagina7);
      let pagina8 = undefined
      let pagina9 = undefined
      let pagina10 = undefined
      let tipo = escala_ministro[0].tipo;
      const generateUuid = uuid.v1();
      
  
  
       if(pagina1.length <= 10 && pagina2.length <= 10 && pagina3.length <= 10 &&  pagina4.length <= 10
        &&  pagina5.length <= 10   &&  pagina6.length <= 10 &&  pagina7.length <= 10){
      
          ejs.renderFile(path.join(__dirname,'./','escala_ministro.ejs'),
          {pagina1:pagina1,pagina2:pagina2,pagina3:pagina3,pagina4:pagina4,pagina5:pagina5,pagina6:pagina6,pagina7:pagina7,pagina8:pagina8,pagina9:pagina9,pagina10,tipo:tipo},(err,results)=>{
        
              if(err){
                return res.status(500).json("error"+err)
              }else{
                pdf.create(results,{childProcessOptions: {env: {OPENSSL_CONF: '/dev/null',},}}).toFile('pdfs/escala-ministro-pdf/'+'escala-ministro-'+generateUuid+'.pdf',(err,data)=>{
                    if(err){
                      console.log(err)
                      return res.status(500).json(err)
                    }else{
                      return res.status(200).json({message:'Escala criada com Sucesso !!!'})
                    }
                })
                
                let data = 'escala-ministro-'+generateUuid+'.pdf';
                let query = 'insert into pdf_escala_ministro values (default,?)';
              
                connection.query(query,[data],(err,results)=>{
                  if(!err){
     
                  }else{
                    return res.status(500).json(err)
                  } 
                })
              }
          })

        }else{
          res.status(500).json({message:'Quantidade de escalas acima do limite'})
        }
    }

     
    if(paginas == 8){
      
   
      let pagina1 = JSON.parse(escala_ministro[0].pagina1);
      let pagina2 = JSON.parse(escala_ministro[1].pagina2);
      let pagina3 = JSON.parse(escala_ministro[2].pagina3);
      let pagina4 = JSON.parse(escala_ministro[3].pagina4);
      let pagina5 = JSON.parse(escala_ministro[4].pagina5);
      let pagina6 = JSON.parse(escala_ministro[5].pagina6);
      let pagina7 = JSON.parse(escala_ministro[6].pagina7);
      let pagina8 = JSON.parse(escala_ministro[7].pagina8);
      let pagina9 = undefined
      let pagina10 = undefined
      let tipo = escala_ministro[0].tipo;
      const generateUuid = uuid.v1();
      
  
  
       if(pagina1.length <= 10 && pagina2.length <= 10 && pagina3.length <= 10 &&  pagina4.length <= 10
        &&  pagina5.length <= 10   &&  pagina6.length <= 10 &&  pagina7.length <= 10  &&  pagina8.length <= 10){
      
          ejs.renderFile(path.join(__dirname,'./','escala_ministro.ejs'),
          {pagina1:pagina1,pagina2:pagina2,pagina3:pagina3,pagina4:pagina4,pagina5:pagina5,pagina6:pagina6,pagina7:pagina7,pagina8:pagina8,pagina9:pagina9,pagina10:pagina10,tipo:tipo},(err,results)=>{
        
              if(err){
                return res.status(500).json("error"+err)
              }else{
                pdf.create(results,{childProcessOptions: {env: {OPENSSL_CONF: '/dev/null',},}}).toFile('pdfs/escala-ministro-pdf/'+'escala-ministro-'+generateUuid+'.pdf',(err,data)=>{
                    if(err){
                      console.log(err)
                      return res.status(500).json(err)
                    }else{
                      return res.status(200).json({message:'Escala criada com Sucesso !!!'})
                    }
                })
                
                let data = 'escala-ministro-'+generateUuid+'.pdf';
                let query = 'insert into pdf_escala_ministro values (default,?)';
              
                connection.query(query,[data],(err,results)=>{
                  if(!err){
     
                  }else{
                    return res.status(500).json(err)
                  } 
                })
              }
          })

        }else{
          res.status(500).json({message:'Quantidade de escalas acima do limite'})
        }
    }

  
    if(paginas == 9){
      
   
       
      let pagina1 = JSON.parse(escala_ministro[0].pagina1);
      let pagina2 = JSON.parse(escala_ministro[1].pagina2);
      let pagina3 = JSON.parse(escala_ministro[2].pagina3);
      let pagina4 = JSON.parse(escala_ministro[3].pagina4);
      let pagina5 = JSON.parse(escala_ministro[4].pagina5);
      let pagina6 = JSON.parse(escala_ministro[5].pagina6);
      let pagina7 = JSON.parse(escala_ministro[6].pagina7);
      let pagina8 = JSON.parse(escala_ministro[7].pagina8);
      let pagina9 = JSON.parse(escala_ministro[8].pagina9);
      let pagina10 = undefined
      let tipo = escala_ministro[0].tipo;
      const generateUuid = uuid.v1();
      
  
  
       if(pagina1.length <= 10 && pagina2.length <= 10 && pagina3.length <= 10 &&  pagina4.length <= 10
        &&  pagina5.length <= 10   &&  pagina6.length <= 10 &&  pagina7.length <= 10  &&  pagina8.length <= 10
        &&  pagina9.length <= 10){
      
          ejs.renderFile(path.join(__dirname,'./','escala_ministro.ejs'),
          {pagina1:pagina1,pagina2:pagina2,pagina3:pagina3,pagina4:pagina4,pagina5:pagina5,pagina6:pagina6,pagina7:pagina7,pagina8:pagina8,pagina9:pagina9,pagina10:pagina10,tipo:tipo},(err,results)=>{
        
              if(err){
                return res.status(500).json("error"+err)
              }else{
                pdf.create(results,{childProcessOptions: {env: {OPENSSL_CONF: '/dev/null',},}}).toFile('pdfs/escala-ministro-pdf/'+'escala-ministro-'+generateUuid+'.pdf',(err,data)=>{
                    if(err){
                      console.log(err)
                      return res.status(500).json(err)
                    }else{
                      return res.status(200).json({message:'Escala criada com Sucesso !!!'})
                    }
                })
                
                let data = 'escala-ministro-'+generateUuid+'.pdf';
                let query = 'insert into pdf_escala_ministro values (default,?)';
              
                connection.query(query,[data],(err,results)=>{
                  if(!err){
     
                  }else{
                    return res.status(500).json(err)
                  } 
                })
              }
          })

        }else{
          res.status(500).json({message:'Quantidade de escalas acima do limite'})
        }
    }

      
    if(paginas == 10){
      
   
      let pagina1 = JSON.parse(escala_ministro[0].pagina1);
      let pagina2 = JSON.parse(escala_ministro[1].pagina2);
      let pagina3 = JSON.parse(escala_ministro[2].pagina3);
      let pagina4 = JSON.parse(escala_ministro[3].pagina4);
      let pagina5 = JSON.parse(escala_ministro[4].pagina5);
      let pagina6 = JSON.parse(escala_ministro[5].pagina6);
      let pagina7 = JSON.parse(escala_ministro[6].pagina7);
      let pagina8 = JSON.parse(escala_ministro[7].pagina8);
      let pagina9 = JSON.parse(escala_ministro[8].pagina9);
      let pagina10 = JSON.parse(escala_ministro[9].pagina10);
      let tipo = escala_ministro[0].tipo;
      const generateUuid = uuid.v1();
      
  
  
       if(pagina1.length <= 10 && pagina2.length <= 10 && pagina3.length <= 10 &&  pagina4.length <= 10
        &&  pagina5.length <= 10   &&  pagina6.length <= 10 &&  pagina7.length <= 10  &&  pagina8.length <= 10
        &&  pagina9.length <= 10 &&  pagina10.length <= 10){
      
          ejs.renderFile(path.join(__dirname,'./','escala_ministro.ejs'),
          {pagina1:pagina1,pagina2:pagina2,pagina3:pagina3,pagina4:pagina4,pagina5:pagina5,pagina6:pagina6,pagina7:pagina7,pagina8:pagina8,pagina9:pagina9,pagina10:pagina10,tipo:tipo},(err,results)=>{
        
              if(err){
                return res.status(500).json("error"+err)
              }else{
                pdf.create(results,{childProcessOptions: {env: {OPENSSL_CONF: '/dev/null',},}}).toFile('pdfs/escala-ministro-pdf/'+'escala-ministro-'+generateUuid+'.pdf',(err,data)=>{
                    if(err){
                      console.log(err)
                      return res.status(500).json(err)
                    }else{
                      return res.status(200).json({message:'Escala criada com Sucesso !!!'})
                    }
                })
                
                let data = 'escala-ministro-'+generateUuid+'.pdf';
                let query = 'insert into pdf_escala_ministro values (default,?)';
              
                connection.query(query,[data],(err,results)=>{
                  if(!err){
     
                  }else{
                    return res.status(500).json(err)
                  } 
                })
              }
          })

        }else{
          res.status(500).json({message:'Quantidade de escalas acima do limite'})
        }
    } 
  
});

router.get('/getpdf',(req,res)=>{
  let pdf = req.body
  let query = 'select id,filename from pdf_escala_ministro order by id DESC';

  connection.query(query,[pdf],(err,results)=>{
    if(!err){
      res.status(200).json(results)
    }else{
      res.status(500).json(err)
    }
  })
})

router.delete("/deletepdf/:id",(req,res)=>{
  
  let id = req.params.id;
  let body = req.body
  let query = 'delete from pdf_escala_ministro where id = ?';
  namepdf = 'select * from pdf_escala_ministro where id = ?'

     connection.query(namepdf,[id],(err,nomepdf)=>{
           connection.query(query,[id],(err,results)=>{
         
            if(!err){
              if(results.affectedRows == 0){
                res.status(404).json({message:'id não encontrado'})
              }
               fs.rm(`pdfs/escala-ministro-pdf/${nomepdf[0].filename}`, { recursive:true }, (err) => {
                if(err){
                    // File deletion failed
                    console.error(err.message);
                    return;
                }
                console.log("File deleted successfully");
            }) 
              res.status(200).json({message:'Pdf deletado com sucesso !!!'})
            }else{
              res.status(500).json(err)
            } 
         })
     }) 
})


router.post('/create',(req,res)=>{
  let escala_ministro = req.body;
       console.log(escala_ministro)
              if(escala_ministro.missa === 'Domingo: Missa/Celebração Santa Teresinha 7h'){     
                let query_criar = ("insert into escala_ministro (id,missa,data,mes,ano,dia,hora,comunidade,ministros) values(default,?,?,?,?,'Domingo','7h','Santa Teresinha',?)");
                connection.query(query_criar,[escala_ministro.missa,escala_ministro.data,escala_ministro.mes,escala_ministro.ano,escala_ministro.ministro],
                (err,results)=>{
                  if(!err){
                    res.status(200).json({message:'Escala Cadastrada com sucesso'});
                  }else{
                    res.status(500).json(err);
                  }
                });
              }else if(escala_ministro.missa === 'Domingo: Missa/Celebração N.S.Rosário 7h'){
                let query_criar = ("insert into escala_ministro (id,missa,data,mes,ano,dia,hora,comunidade,ministros) values(default,?,?,?,?,'Domingo','7h','N.S.Rosário',?)");
                connection.query(query_criar,[escala_ministro.missa,escala_ministro.data,escala_ministro.mes,escala_ministro.ano,escala_ministro.ministro],
                  (err,results)=>{
                    
                    if(!err){
                      res.status(200).json({message:'Escala Cadastrada com sucesso'});
                  }else{
                      res.status(500).json(err);
                  }
              });
              }else if(escala_ministro.missa === 'Domingo: Missa/Celebração N.S.Perpétuo Socorro 8h30'){
                let query_criar = ("insert into escala_ministro (id,missa,data,mes,ano,dia,hora,comunidade,ministros) values(default,?,?,?,?,'Domingo','8h30','N.S.Perpétuo Socorro',?)");
                connection.query(query_criar,[escala_ministro.missa,escala_ministro.data,escala_ministro.mes,escala_ministro.ano,escala_ministro.ministro],
                  (err,results)=>{
                    if(!err){
                      res.status(200).json({message:'Escala Cadastrada com sucesso'});
                    }else{
                      res.status(500).json(err);
                    }
                  });
              }else if(escala_ministro.missa === 'Domingo: Missa/Celebração N.S.Rosário 17h'){
                let query_criar = ("insert into escala_ministro (id,missa,data,mes,ano,dia,hora,comunidade,ministros) values(default,?,?,?,?,'Domingo','17h','N.S.Rosário',?)");
                connection.query(query_criar,[escala_ministro.missa,escala_ministro.data,escala_ministro.mes,escala_ministro.ano,escala_ministro.ministro],
                  (err,results)=>{
                    if(!err){
                      res.status(200).json({message:'Escala Cadastrada com sucesso'});
                    }else{
                      res.status(500).json(err);
                    }
                  });
              }else if(escala_ministro.missa === 'Domingo: Missa/Celebração Santa Teresinha 19h'){
                let query_criar = ("insert into escala_ministro (id,missa,data,mes,ano,dia,hora,comunidade,ministros) values(default,?,?,?,?,'Domingo','17h','N.S.Rosário',?)");
                connection.query(query_criar,[escala_ministro.missa,escala_ministro.data,escala_ministro.mes,escala_ministro.ano,escala_ministro.ministro],
                  (err,results)=>{
                    if(!err){
                      res.status(200).json({message:'Escala Cadastrada com sucesso'});
                    }else{
                      res.status(500).json(err);
                    }
                  });
              }else if(escala_ministro.missa === 'Terça: Novena com Adoração e Celebração Eucarística Santa Teresinha 19h'){
                let query_criar = ("insert into escala_ministro (id,missa,data,mes,ano,dia,hora,comunidade,ministros) values(default,?,?,?,?,'Terça','19h','Santa Teresinha',?)");
                connection.query(query_criar,[escala_ministro.missa,escala_ministro.data,escala_ministro.mes,escala_ministro.ano,escala_ministro.ministro],
                  (err,results)=>{
                    if(!err){
                        res.status(200).json({message:'Escala Cadastrada com sucesso'});
                    }else{
                        res.status(500).json(err);
                    }
                  });
              }else if(escala_ministro.missa === 'Terça: Novena com Adoração e Celebração Eucarística São Pedro 19h'){
                let query_criar = ("insert into escala_ministro (id,missa,data,mes,ano,dia,hora,comunidade,ministros) values(default,?,?,?,?,'Terça','19h','São Pedro',?)");
                connection.query(query_criar,[escala_ministro.missa,escala_ministro.data,escala_ministro.mes,escala_ministro.ano,escala_ministro.ministro],
                  (err,results)=>{
                    if(!err){
                        res.status(200).json({message:'Escala Cadastrada com sucesso'});
                    }else{
                        res.status(500).json(err);
                    }
                  });
              }else if(escala_ministro.missa === 'Terça: Novena com Adoração e Celebração Eucarística N. S. Perpétuo Socorro 19h'){
                let query_criar = ("insert into escala_ministro (id,missa,data,mes,ano,dia,hora,comunidade,ministros) values(default,?,?,?,?,'Terça','19h','N. S. Perpétuo Socorro',?)");
                connection.query(query_criar,[escala_ministro.missa,escala_ministro.data,escala_ministro.mes,escala_ministro.ano,escala_ministro.ministro],
                   (err,results)=>{
                      if(!err){
                        res.status(200).json({message:'Escala Cadastrada com sucesso'});
                      }else{
                        res.status(500).json(err);
                      }
                    });
              }else if(escala_ministro.missa === 'Quarta: Terço dos Homens Ministração da Palavra de Deus Santa Teresinha 19h'){
                let query_criar = ("insert into escala_ministro (id,missa,data,mes,ano,dia,hora,comunidade,ministros) values(default,?,?,?,?,'Quarta','19h','Santa Teresinha',?)");
                connection.query(query_criar,[escala_ministro.missa,escala_ministro.data,escala_ministro.mes,escala_ministro.ano,escala_ministro.ministro],
                   (err,results)=>{
                      if(!err){
                        res.status(200).json({message:'Escala Cadastrada com sucesso'});
                      }else{
                        res.status(500).json(err);
                      }
                    });
              }else if(escala_ministro.missa === 'Quarta: Terço dos Homens Ministração da Palavra de Deus Santa Teresinha 19h'){
                let query_criar = ("insert into escala_ministro (id,missa,data,mes,ano,dia,hora,comunidade,ministros) values(default,?,?,?,?,'Quarta','19h','Santa Teresinha',?)");
                connection.query(query_criar,[escala_ministro.missa,escala_ministro.data,escala_ministro.mes,escala_ministro.ano,escala_ministro.ministro],
                   (err,results)=>{
                      if(!err){
                        res.status(200).json({message:'Escala Cadastrada com sucesso'});
                      }else{
                        res.status(500).json(err);
                      }
                    });
              }else if(escala_ministro.missa === 'Quinta: Novena com Adoração e Celebração Eucarística N.S.Rosário 19h'){
                let query_criar = ("insert into escala_ministro (id,missa,data,mes,ano,dia,hora,comunidade,ministros) values(default,?,?,?,?,'Quinta','19h','N.S.Rosário',?)");
                connection.query(query_criar,[escala_ministro.missa,escala_ministro.data,escala_ministro.mes,escala_ministro.ano,escala_ministro.ministro],
                   (err,results)=>{
                      if(!err){
                        res.status(200).json({message:'Escala Cadastrada com sucesso'});
                      }else{
                        res.status(500).json(err);
                      }
                    });
              }else if(escala_ministro.missa === 'Quinta: Adoração ao Santíssimo Grupo de Oração Santa Teresinha 20h'){
                let query_criar = ("insert into escala_ministro (id,missa,data,mes,ano,dia,hora,comunidade,ministros) values(default,?,?,?,?,'Quinta','20h','Santa Teresinha',?)");
                connection.query(query_criar,[escala_ministro.missa,escala_ministro.data,escala_ministro.mes,escala_ministro.ano,escala_ministro.ministro],
                   (err,results)=>{
                      if(!err){
                        res.status(200).json({message:'Escala Cadastrada com sucesso'});
                      }else{
                        res.status(500).json(err);
                      }
                    });
              }else if(escala_ministro.missa === 'Sábado: Missa/Celebração São Pedro 19h'){
                let query_criar = ("insert into escala_ministro (id,missa,data,mes,ano,dia,hora,comunidade,ministros) values(default,?,?,?,?,'Sábado','19h','São Pedro',?)");
                connection.query(query_criar,[escala_ministro.missa,escala_ministro.data,escala_ministro.mes,escala_ministro.ano,escala_ministro.ministro],
                   (err,results)=>{
                      if(!err){
                        res.status(200).json({message:'Escala Cadastrada com sucesso'});
                      }else{
                        res.status(500).json(err);
                      }
                    });
              }else if(escala_ministro.missa === 'Sábado: Missa/Celebração Sagrado Coração de Jesus 19h'){
                let query_criar = ("insert into escala_ministro (id,missa,data,mes,ano,dia,hora,comunidade,ministros) values(default,?,?,?,?,'Sábado','19h','Sagrado Coração de Jesus',?)");
                connection.query(query_criar,[escala_ministro.missa,escala_ministro.data,escala_ministro.mes,escala_ministro.ano,escala_ministro.ministro],
                   (err,results)=>{
                      if(!err){
                        res.status(200).json({message:'Escala Cadastrada com sucesso'});
                      }else{
                        res.status(500).json(err);
                      }
                    });
              }else if(escala_ministro.missa === 'Sábado: Missa em Reparação ao Imaculado Coração de Maria Santa Teresinha 17h45'){
                let query_criar = ("insert into escala_ministro (id,missa,data,mes,ano,dia,hora,comunidade,ministros) values(default,?,?,?,?,'Sábado','17h45','Santa Teresinha',?)");
                connection.query(query_criar,[escala_ministro.missa,escala_ministro.data,escala_ministro.mes,escala_ministro.ano,escala_ministro.ministro],
                   (err,results)=>{
                      if(!err){
                        res.status(200).json({message:'Escala Cadastrada com sucesso'});
                      }else{
                        res.status(500).json(err);
                      }
                    });
              }
       });//ROUTER


  router.get('/getSingleData/:id',(req,res)=>{
        let id = req.params.id;
        let query = ('select * from escala_ministro where id=?');
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
    


router.get('/read',(req,res)=>{
   let escala_ministro = req.body;
   let query_read=('select missa,data,mes,ano,dia,hora,comunidade,ministros from escala_ministro where id = ?');
   connection.query(query_read,[escala_ministro.missa],(err,results)=>{
    if(!err){
       if(results.length <= 0){
            let query = ('select id,missa,data,mes,ano,dia,hora,comunidade,ministros from escala_ministro order by id DESC');
            connection.query(query,(err,results)=>{
               if(!err){
                 res.status(200).json(results);
               }else{
                 res.status(500).json(err);
               }
            });//connection2
       }else{
         res.status(400).json({message:'erro!'});
       }//results 
     }else{
        res.status(500).json(err);
     }//err
   });//connection
});//router




router.delete('/delete/:id',(req,res)=>{
  let id = req.params.id
  let query = ('delete from escala_ministro where id = ?');
  connection.query(query,[id],(err,result)=>{
    if(!err){
       if(result.affectedRows == 0){
          res.status(400).json({message:'id não encontrado'});
       }else{
          res.status(200).json({message:'Escala deletada'});
       }
    }else{
      res.status(500).json(err);
    }
  })
});


router.put('/update/:id',(req,res)=>{
  let id = req.params.id;
  let body = req.body;
  
  let query = ("update escala_ministro set missa = ?, data = ?,ministros = ?");
  connection.query(query,[body.missa,body.data, body.ministros,id],(err,result)=>{
    if(!err){
      return res.status(200).json({message:'Escala Atualizada'});
    }else{
      res.status(500).json(err);
    }
    res.status(404).json({message:'id não encontrado'});
  });
});

router.get('/select_ministro',(req,res)=>{
   let body = req.body;
   let query = ('select id,nome from ministros order by nome');
   connection.query(query,(err,result)=>{
     if(!err){
        res.status(200).json(result);
     }else{
        res.status(500).json(err);
     }
   });
});


router.get('/select_comunidade',(req,res)=>{
  let body = req.body;
  let query = ('select nome from comunidades');
  connection.query(query,(err,result)=>{
    if(!err){
      res.status(200).json(result);
    }else{
      res.status(500).json(err);
    }
  });
});

router.get('/select_missa',(req,res)=>{
  let body = req.body;
  let query = ('select nome from missa_celebracao');
  connection.query(query,(err,result)=>{
    if(!err){
       res.status(200).json(result);
    }else{
       res.status(500).json(err);
    }
  })
});

// funcões do administrador

router.post('/create_ministro',auth.authenticateToken,checkRole.checkRole,(req,res)=>{
  let body = req.body
  let query_consulta = ('select id,nome from ministros');
  connection.query(query_consulta,[query_consulta.nome],(err,results)=>{
    if(!err){
          let query = ('insert into ministros values (default,?)');
          connection.query(query,[body.nome],(err,result)=>{
            if(!err){
              res.status(200).json({message:'Ministro criado com Sucesso'});
            }else{
              res.status(500).json(err);
            }
          });
     
    }else{
      res.status(500).json(err);
    }
  }); 
});



router.put('/update_ministro/:id',auth.authenticateToken,checkRole.checkRole,(req,res)=>{
  let id = req.params.id
  let body = req.body;
 
  let query = ("update ministros set nome = ? where id = ?");
  connection.query(query,[body.nome,id],(err,result)=>{
    if(!err){
      return res.status(200).json({message:'Ministro atualizado com Sucesso'});
    }else{
      res.status(500).json(err);
    }
    res.status(400).json({message:'id não encontrado'});
  }); 
});


router.delete('/delete_ministro/:id',auth.authenticateToken,checkRole.checkRole,(req,res)=>{
  let id = req.params.id
  let query = ('delete from ministros where id = ?');
  connection.query(query,[id],(err,result)=>{
      if(!err){
          if(result.affectedRows==0){
              res.status(404).json({message:'id não encontrado'});
          }
          return res.status(200).json({message:'Ministro deletado com Sucesso'});
      }else{
          res.status(500).json(err);
      }
    });
});

module.exports = router;