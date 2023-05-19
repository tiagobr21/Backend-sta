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

//log 

router.post('/gerarpdf',(req,res)=>{

  let escala_celebrante = req.body;
  let paginas = escala_celebrante.length;


    if(paginas == 1){

        let pagina1 = JSON.parse(escala_celebrante[0].pagina1);
        let pagina2 = undefined
        let pagina3 = undefined
        let pagina4 = undefined
        let pagina5 = undefined
        let pagina6 = undefined
        let pagina7 = undefined
        let pagina8 = undefined
        let pagina9 = undefined
        let pagina10 = undefined
        let tipo = escala_celebrante[0].tipo;
        const generateUuid = uuid.v1();
    
        

        if(pagina1.length <= 10){

    
            ejs.renderFile(path.join(__dirname,'./','escala_celebrante.ejs'),
            {pagina1:pagina1,pagina2:pagina2,pagina3:pagina3,pagina4:pagina4,pagina5:pagina5,pagina6:pagina6,pagina7:pagina7,pagina8:pagina8,pagina9:pagina9,pagina10:pagina10,tipo:tipo},(err,results)=>{
              
               
                if(err){
                  console.log(err)
                  return res.status(500).json("error"+err)
                }else{
                 
                  pdf.create(results,{childProcessOptions: {env: {OPENSSL_CONF: '/dev/null',},}}).toFile('pdfs/escala-celebrante-pdf/'+'escala-celebrante-'+generateUuid+'.pdf',(err,data)=>{
                      if(err){
                        console.log("error"+err)
                        return res.status(500).json(err)
                      }else{

                          return res.status(200).json({message:'Escala criada com Sucesso !!!'})
                      }
                  })

                  let data = 'escala-celebrante-'+generateUuid+'.pdf';
                  let query = 'insert into pdf_escala_celebrante values (default,?)';
                
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
      
   
      let pagina1 = JSON.parse(escala_celebrante[0].pagina1);
      let pagina2 = JSON.parse(escala_celebrante[1].pagina2);
      let pagina3 = undefined
      let pagina4 = undefined
      let pagina5 = undefined
      let pagina6 = undefined
      let pagina7 = undefined
      let pagina8 = undefined
      let pagina9 = undefined
      let pagina10 = undefined
      let tipo = escala_celebrante[0].tipo;
      const generateUuid = uuid.v1();
      
  
  
       if(pagina1.length <= 10 && pagina2.length <= 10){
      
          ejs.renderFile(path.join(__dirname,'./','escala_celebrante.ejs'),
          {pagina1:pagina1,pagina2:pagina2,pagina3:pagina3,pagina4:pagina4,pagina5:pagina5,pagina6:pagina6,pagina7:pagina7,pagina8:pagina8,pagina9:pagina9,pagina10:pagina10,tipo:tipo},(err,results)=>{
        
              if(err){
                return res.status(500).json("error"+err)
              }else{
                pdf.create(results,{childProcessOptions: {env: {OPENSSL_CONF: '/dev/null',},}}).toFile('pdfs/escala-celebrante-pdf/'+'escala-celebrante-'+generateUuid+'.pdf',(err,data)=>{
                    if(err){
                      console.log(err)
                      return res.status(500).json(err)
                    }else{
                      return res.status(200).json({message:'Escala criada com Sucesso !!!'})
                    }
                })
                
                let data = 'escala-celebrante-'+generateUuid+'.pdf';
                let query = 'insert into pdf_escala_celebrante values (default,?)';
              
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
      
   
      let pagina1 = JSON.parse(escala_celebrante[0].pagina1);
      let pagina2 = JSON.parse(escala_celebrante[1].pagina2);
      let pagina3 = JSON.parse(escala_celebrante[2].pagina3);
      let pagina4 = undefined
      let pagina5 = undefined
      let pagina6 = undefined
      let pagina7 = undefined
      let pagina8 = undefined
      let pagina9 = undefined
      let pagina10 = undefined
      let tipo = escala_celebrante[0].tipo;
      const generateUuid = uuid.v1();
      
  
  
       if(pagina1.length <= 10 && pagina2.length <= 10 && pagina3.length <= 10){
      
          ejs.renderFile(path.join(__dirname,'./','escala_celebrante.ejs'),
          {pagina1:pagina1,pagina2:pagina2,pagina3:pagina3,pagina4:pagina4,pagina5:pagina5,pagina6:pagina6,pagina7:pagina7,pagina8:pagina8,pagina9:pagina9,pagina10:pagina10,tipo:tipo},(err,results)=>{
        
              if(err){
                return res.status(500).json(err)
              }else{
                pdf.create(results,{childProcessOptions: {env: {OPENSSL_CONF: '/dev/null',},}}).toFile('pdfs/escala-celebrante-pdf/'+'escala-celebrante-'+generateUuid+'.pdf',(err,data)=>{
                    if(err){
                      console.log(err)
                      return res.status(500).json(err)
                    }else{
                      return res.status(200).json({message:'Escala criada com Sucesso !!!'})
                    }
                })
                
                let data = 'escala-celebrante-'+generateUuid+'.pdf';
                let query = 'insert into pdf_escala_celebrante values (default,?)';
              
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
      
   
      let pagina1 = JSON.parse(escala_celebrante[0].pagina1);
      let pagina2 = JSON.parse(escala_celebrante[1].pagina2);
      let pagina3 = JSON.parse(escala_celebrante[2].pagina3);
      let pagina4 = JSON.parse(escala_celebrante[3].pagina4);
      let pagina5 = undefined
      let pagina6 = undefined
      let pagina7 = undefined
      let pagina8 = undefined
      let pagina9 = undefined
      let pagina10 = undefined
      let tipo = escala_celebrante[0].tipo;
      const generateUuid = uuid.v1();
      

       if(pagina1.length <= 10 && pagina2.length <= 10 && pagina3.length <= 10 &&  pagina4.length <= 10){
      
          ejs.renderFile(path.join(__dirname,'./','escala_celebrante.ejs'),
          {pagina1:pagina1,pagina2:pagina2,pagina3:pagina3,pagina4:pagina4,pagina5:pagina5,pagina6:pagina6,pagina7:pagina7,pagina8:pagina8,pagina9:pagina9,pagina10:pagina10,tipo:tipo},(err,results)=>{
        
              if(err){
                return res.status(500).json("error"+err)
              }else{
                pdf.create(results,{childProcessOptions: {env: {OPENSSL_CONF: '/dev/null',},}}).toFile('pdfs/escala-celebrante-pdf/'+'escala-celebrante-'+generateUuid+'.pdf',(err,data)=>{
                    if(err){
                      console.log(err)
                      return res.status(500).json(err)
                    }else{
                      return res.status(200).json({message:'Escala criada com Sucesso !!!'})
                    }
                })
                
                let data = 'escala-celebrante-'+generateUuid+'.pdf';
                let query = 'insert into pdf_escala_celebrante values (default,?)';
              
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
      
      let pagina1 = JSON.parse(escala_celebrante[0].pagina1);
      let pagina2 = JSON.parse(escala_celebrante[1].pagina2);
      let pagina3 = JSON.parse(escala_celebrante[2].pagina3);
      let pagina4 = JSON.parse(escala_celebrante[3].pagina4);
      let pagina5 = JSON.parse(escala_celebrante[4].pagina5);
      let pagina6 = undefined
      let pagina7 = undefined
      let pagina8 = undefined
      let pagina9 = undefined
      let pagina10 = undefined
      let tipo = escala_celebrante[0].tipo;
      const generateUuid = uuid.v1();
      
  
  
       if(pagina1.length <= 10 && pagina2.length <= 10 && pagina3.length <= 10 &&  pagina4.length <= 10
        &&  pagina5.length <= 10){
      
          ejs.renderFile(path.join(__dirname,'./','escala_celebrante.ejs'),
          {pagina1:pagina1,pagina2:pagina2,pagina3:pagina3,pagina4:pagina4,pagina5:pagina5,pagina6:pagina6,pagina7:pagina7,pagina8:pagina8,pagina9:pagina9,pagina10:pagina10,tipo:tipo},(err,results)=>{
        
              if(err){
                return res.status(500).json("error"+err)
              }else{
                pdf.create(results,{childProcessOptions: {env: {OPENSSL_CONF: '/dev/null',},}}).toFile('pdfs/escala-celebrante-pdf/'+'escala-celebrante-'+generateUuid+'.pdf',(err,data)=>{
                    if(err){
                      console.log(err)
                      return res.status(500).json(err)
                    }else{
                      return res.status(200).json({message:'Escala criada com Sucesso !!!'})
                    }
                })
                
                let data = 'escala-celebrante-'+generateUuid+'.pdf';
                let query = 'insert into pdf_escala_celebrante values (default,?)';
              
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
      
      let pagina1 = JSON.parse(escala_celebrante[0].pagina1);
      let pagina2 = JSON.parse(escala_celebrante[1].pagina2);
      let pagina3 = JSON.parse(escala_celebrante[2].pagina3);
      let pagina4 = JSON.parse(escala_celebrante[3].pagina4);
      let pagina5 = JSON.parse(escala_celebrante[4].pagina5);
      let pagina6 = JSON.parse(escala_celebrante[5].pagina6);
      let pagina7 = undefined
      let pagina8 = undefined
      let pagina9 = undefined
      let pagina10 = undefined
      let tipo = escala_celebrante[0].tipo;
      const generateUuid = uuid.v1();
      
  
  
       if(pagina1.length <= 10 && pagina2.length <= 10 && pagina3.length <= 10 &&  pagina4.length <= 10
        &&  pagina5.length <= 10   &&  pagina6.length <= 10){
      
          ejs.renderFile(path.join(__dirname,'./','escala_celebrante.ejs'),
          {pagina1:pagina1,pagina2:pagina2,pagina3:pagina3,pagina4:pagina4,pagina5:pagina5,pagina6:pagina6,pagina7:pagina7,pagina8:pagina8,pagina9:pagina9,pagina10,tipo:tipo},(err,results)=>{
        
              if(err){
                return res.status(500).json("error"+err)
              }else{
                pdf.create(results,{childProcessOptions: {env: {OPENSSL_CONF: '/dev/null',},}}).toFile('pdfs/escala-celebrante-pdf/'+'escala-celebrante-'+generateUuid+'.pdf',(err,data)=>{
                    if(err){
                      console.log(err)
                      return res.status(500).json(err)
                    }else{
                      return res.status(200).json({message:'Escala criada com Sucesso !!!'})
                    }
                })
                
                let data = 'escala-celebrante-'+generateUuid+'.pdf';
                let query = 'insert into pdf_escala_celebrante values (default,?)';
              
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
      
   
      let pagina1 = JSON.parse(escala_celebrante[0].pagina1);
      let pagina2 = JSON.parse(escala_celebrante[1].pagina2);
      let pagina3 = JSON.parse(escala_celebrante[2].pagina3);
      let pagina4 = JSON.parse(escala_celebrante[3].pagina4);
      let pagina5 = JSON.parse(escala_celebrante[4].pagina5);
      let pagina6 = JSON.parse(escala_celebrante[5].pagina6);
      let pagina7 = JSON.parse(escala_celebrante[6].pagina7);
      let pagina8 = undefined
      let pagina9 = undefined
      let pagina10 = undefined
      let tipo = escala_celebrante[0].tipo;
      const generateUuid = uuid.v1();
      
  
  
       if(pagina1.length <= 10 && pagina2.length <= 10 && pagina3.length <= 10 &&  pagina4.length <= 10
        &&  pagina5.length <= 10   &&  pagina6.length <= 10 &&  pagina7.length <= 10){
      
          ejs.renderFile(path.join(__dirname,'./','escala_celebrante.ejs'),
          {pagina1:pagina1,pagina2:pagina2,pagina3:pagina3,pagina4:pagina4,pagina5:pagina5,pagina6:pagina6,pagina7:pagina7,pagina8:pagina8,pagina9:pagina9,pagina10,tipo:tipo},(err,results)=>{
        
              if(err){
                return res.status(500).json("error"+err)
              }else{
                pdf.create(results,{childProcessOptions: {env: {OPENSSL_CONF: '/dev/null',},}}).toFile('pdfs/escala-celebrante-pdf/'+'escala-celebrante-'+generateUuid+'.pdf',(err,data)=>{
                    if(err){
                      console.log(err)
                      return res.status(500).json(err)
                    }else{
                      return res.status(200).json({message:'Escala criada com Sucesso !!!'})
                    }
                })
                
                let data = 'escala-celebrante-'+generateUuid+'.pdf';
                let query = 'insert into pdf_escala_celebrante values (default,?)';
              
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
      
   
      let pagina1 = JSON.parse(escala_celebrante[0].pagina1);
      let pagina2 = JSON.parse(escala_celebrante[1].pagina2);
      let pagina3 = JSON.parse(escala_celebrante[2].pagina3);
      let pagina4 = JSON.parse(escala_celebrante[3].pagina4);
      let pagina5 = JSON.parse(escala_celebrante[4].pagina5);
      let pagina6 = JSON.parse(escala_celebrante[5].pagina6);
      let pagina7 = JSON.parse(escala_celebrante[6].pagina7);
      let pagina8 = JSON.parse(escala_celebrante[7].pagina8);
      let pagina9 = undefined
      let pagina10 = undefined
      let tipo = escala_celebrante[0].tipo;
      const generateUuid = uuid.v1();
      
  
  
       if(pagina1.length <= 10 && pagina2.length <= 10 && pagina3.length <= 10 &&  pagina4.length <= 10
        &&  pagina5.length <= 10   &&  pagina6.length <= 10 &&  pagina7.length <= 10  &&  pagina8.length <= 10){
      
          ejs.renderFile(path.join(__dirname,'./','escala_celebrante.ejs'),
          {pagina1:pagina1,pagina2:pagina2,pagina3:pagina3,pagina4:pagina4,pagina5:pagina5,pagina6:pagina6,pagina7:pagina7,pagina8:pagina8,pagina9:pagina9,pagina10:pagina10,tipo:tipo},(err,results)=>{
        
              if(err){
                return res.status(500).json("error"+err)
              }else{
                pdf.create(results,{childProcessOptions: {env: {OPENSSL_CONF: '/dev/null',},}}).toFile('pdfs/escala-celebrante-pdf/'+'escala-celebrante-'+generateUuid+'.pdf',(err,data)=>{
                    if(err){
                      console.log(err)
                      return res.status(500).json(err)
                    }else{
                      return res.status(200).json({message:'Escala criada com Sucesso !!!'})
                    }
                })
                
                let data = 'escala-celebrante-'+generateUuid+'.pdf';
                let query = 'insert into pdf_escala_celebrante values (default,?)';
              
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
      
   
       
      let pagina1 = JSON.parse(escala_celebrante[0].pagina1);
      let pagina2 = JSON.parse(escala_celebrante[1].pagina2);
      let pagina3 = JSON.parse(escala_celebrante[2].pagina3);
      let pagina4 = JSON.parse(escala_celebrante[3].pagina4);
      let pagina5 = JSON.parse(escala_celebrante[4].pagina5);
      let pagina6 = JSON.parse(escala_celebrante[5].pagina6);
      let pagina7 = JSON.parse(escala_celebrante[6].pagina7);
      let pagina8 = JSON.parse(escala_celebrante[7].pagina8);
      let pagina9 = JSON.parse(escala_celebrante[8].pagina9);
      let pagina10 = undefined
      let tipo = escala_celebrante[0].tipo;
      const generateUuid = uuid.v1();
      
  
  
       if(pagina1.length <= 10 && pagina2.length <= 10 && pagina3.length <= 10 &&  pagina4.length <= 10
        &&  pagina5.length <= 10   &&  pagina6.length <= 10 &&  pagina7.length <= 10  &&  pagina8.length <= 10
        &&  pagina9.length <= 10){
      
          ejs.renderFile(path.join(__dirname,'./','escala_celebrante.ejs'),
          {pagina1:pagina1,pagina2:pagina2,pagina3:pagina3,pagina4:pagina4,pagina5:pagina5,pagina6:pagina6,pagina7:pagina7,pagina8:pagina8,pagina9:pagina9,pagina10:pagina10,tipo:tipo},(err,results)=>{
        
              if(err){
                return res.status(500).json("error"+err)
              }else{
                pdf.create(results,{childProcessOptions: {env: {OPENSSL_CONF: '/dev/null',},}}).toFile('pdfs/escala-celebrante-pdf/'+'escala-celebrante-'+generateUuid+'.pdf',(err,data)=>{
                    if(err){
                      console.log(err)
                      return res.status(500).json(err)
                    }else{
                      return res.status(200).json({message:'Escala criada com Sucesso !!!'})
                    }
                })
                
                let data = 'escala-celebrante-'+generateUuid+'.pdf';
                let query = 'insert into pdf_escala_celebrante values (default,?)';
              
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
      
   
      let pagina1 = JSON.parse(escala_celebrante[0].pagina1);
      let pagina2 = JSON.parse(escala_celebrante[1].pagina2);
      let pagina3 = JSON.parse(escala_celebrante[2].pagina3);
      let pagina4 = JSON.parse(escala_celebrante[3].pagina4);
      let pagina5 = JSON.parse(escala_celebrante[4].pagina5);
      let pagina6 = JSON.parse(escala_celebrante[5].pagina6);
      let pagina7 = JSON.parse(escala_celebrante[6].pagina7);
      let pagina8 = JSON.parse(escala_celebrante[7].pagina8);
      let pagina9 = JSON.parse(escala_celebrante[8].pagina9);
      let pagina10 = JSON.parse(escala_celebrante[9].pagina10);
      let tipo = escala_celebrante[0].tipo;
      const generateUuid = uuid.v1();
      
  
  
       if(pagina1.length <= 10 && pagina2.length <= 10 && pagina3.length <= 10 &&  pagina4.length <= 10
        &&  pagina5.length <= 10   &&  pagina6.length <= 10 &&  pagina7.length <= 10  &&  pagina8.length <= 10
        &&  pagina9.length <= 10 &&  pagina10.length <= 10){
      
          ejs.renderFile(path.join(__dirname,'./','escala_celebrante.ejs'),
          {pagina1:pagina1,pagina2:pagina2,pagina3:pagina3,pagina4:pagina4,pagina5:pagina5,pagina6:pagina6,pagina7:pagina7,pagina8:pagina8,pagina9:pagina9,pagina10:pagina10,tipo:tipo},(err,results)=>{
        
              if(err){
                return res.status(500).json("error"+err)
              }else{
                pdf.create(results,{childProcessOptions: {env: {OPENSSL_CONF: '/dev/null',},}}).toFile('pdfs/escala-celebrante-pdf/'+'escala-celebrante-'+generateUuid+'.pdf',(err,data)=>{
                    if(err){
                      console.log(err)
                      return res.status(500).json(err)
                    }else{
                      return res.status(200).json({message:'Escala criada com Sucesso !!!'})
                    }
                })
                
                let data = 'escala-celebrante-'+generateUuid+'.pdf';
                let query = 'insert into pdf_escala_celebrante values (default,?)';
              
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
  let query = 'select id,filename from pdf_escala_celebrante order by id DESC';

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
  let query = 'delete from pdf_escala_celebrante where id = ?';
  namepdf = 'select * from pdf_escala_celebrante where id = ?'

     connection.query(namepdf,[id],(err,nomepdf)=>{
           connection.query(query,[id],(err,results)=>{
         
            if(!err){
              if(results.affectedRows == 0){
                res.status(404).json({message:'id não encontrado'})
              }
               fs.rm(`pdfs/escala-celebrante-pdf/${nomepdf[0].filename}`, { recursive:true }, (err) => {
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
  let escala_celebrante = req.body;
       console.log(escala_celebrante)
              if(escala_celebrante.missa === 'Domingo: Missa/Celebração Santa Teresinha 7h'){     
                let query_criar = ("insert into escala_celebrante (id,missa,data,mes,ano,dia,hora,comunidade,celebrante) values(default,?,?,?,?,'Domingo','7h','Santa Teresinha',?)");
                connection.query(query_criar,[escala_celebrante.missa,escala_celebrante.data,escala_celebrante.mes,escala_celebrante.ano,escala_celebrante.celebrante],
                (err,results)=>{
                  if(!err){
                    res.status(200).json({message:'Escala Cadastrada com sucesso'});
                  }else{
                    res.status(500).json(err);
                  }
                });
              }else if(escala_celebrante.missa === 'Domingo: Missa/Celebração N.S.Rosário 7h'){
                let query_criar = ("insert into escala_celebrante (id,missa,data,mes,ano,dia,hora,comunidade,celebrante) values(default,?,?,?,?,'Domingo','7h','N.S.Rosário',?)");
                connection.query(query_criar,[escala_celebrante.missa,escala_celebrante.data,escala_celebrante.mes,escala_celebrante.ano,escala_celebrante.celebrante],
                  (err,results)=>{
                    
                    if(!err){
                      res.status(200).json({message:'Escala Cadastrada com sucesso'});
                  }else{
                      res.status(500).json(err);
                  }
              });
              }else if(escala_celebrante.missa === 'Domingo: Missa/Celebração N.S.Perpétuo Socorro 8h30'){
                let query_criar = ("insert into escala_celebrante (id,missa,data,mes,ano,dia,hora,comunidade,celebrante) values(default,?,?,?,?,'Domingo','8h30','N.S.Perpétuo Socorro',?)");
                connection.query(query_criar,[escala_celebrante.missa,escala_celebrante.data,escala_celebrante.mes,escala_celebrante.ano,escala_celebrante.celebrante],
                  (err,results)=>{
                    if(!err){
                      res.status(200).json({message:'Escala Cadastrada com sucesso'});
                    }else{
                      res.status(500).json(err);
                    }
                  });
              }else if(escala_celebrante.missa === 'Domingo: Missa/Celebração N.S.Rosário 17h'){
                let query_criar = ("insert into escala_celebrante (id,missa,data,mes,ano,dia,hora,comunidade,celebrante) values(default,?,?,?,?,'Domingo','17h','N.S.Rosário',?)");
                connection.query(query_criar,[escala_celebrante.missa,escala_celebrante.data,escala_celebrante.mes,escala_celebrante.ano,escala_celebrante.celebrante],
                  (err,results)=>{
                    if(!err){
                      res.status(200).json({message:'Escala Cadastrada com sucesso'});
                    }else{
                      res.status(500).json(err);
                    }
                  });
              }else if(escala_celebrante.missa === 'Domingo: Missa/Celebração Santa Teresinha 19h'){
                let query_criar = ("insert into escala_celebrante (id,missa,data,mes,ano,dia,hora,comunidade,celebrante) values(default,?,?,?,?,'Domingo','17h','N.S.Rosário',?)");
                connection.query(query_criar,[escala_celebrante.missa,escala_celebrante.data,escala_celebrante.mes,escala_celebrante.ano,escala_celebrante.celebrante],
                  (err,results)=>{
                    if(!err){
                      res.status(200).json({message:'Escala Cadastrada com sucesso'});
                    }else{
                      res.status(500).json(err);
                    }
                  });
              }else if(escala_celebrante.missa === 'Terça: Novena com Adoração e Celebração Eucarística Santa Teresinha 19h'){
                let query_criar = ("insert into escala_celebrante (id,missa,data,mes,ano,dia,hora,comunidade,celebrante) values(default,?,?,?,?,'Terça','19h','Santa Teresinha',?)");
                connection.query(query_criar,[escala_celebrante.missa,escala_celebrante.data,escala_celebrante.mes,escala_celebrante.ano,escala_celebrante.celebrante],
                  (err,results)=>{
                    if(!err){
                        res.status(200).json({message:'Escala Cadastrada com sucesso'});
                    }else{
                        res.status(500).json(err);
                    }
                  });
              }else if(escala_celebrante.missa === 'Terça: Novena com Adoração e Celebração Eucarística São Pedro 19h'){
                let query_criar = ("insert into escala_celebrante (id,missa,data,mes,ano,dia,hora,comunidade,celebrante) values(default,?,?,?,?,'Terça','19h','São Pedro',?)");
                connection.query(query_criar,[escala_celebrante.missa,escala_celebrante.data,escala_celebrante.mes,escala_celebrante.ano,escala_celebrante.celebrante],
                  (err,results)=>{
                    if(!err){
                        res.status(200).json({message:'Escala Cadastrada com sucesso'});
                    }else{
                        res.status(500).json(err);
                    }
                  });
              }else if(escala_celebrante.missa === 'Terça: Novena com Adoração e Celebração Eucarística N. S. Perpétuo Socorro 19h'){
                let query_criar = ("insert into escala_celebrante (id,missa,data,mes,ano,dia,hora,comunidade,celebrante) values(default,?,?,?,?,'Terça','19h','N. S. Perpétuo Socorro',?)");
                connection.query(query_criar,[escala_celebrante.missa,escala_celebrante.data,escala_celebrante.mes,escala_celebrante.ano,escala_celebrante.celebrante],
                   (err,results)=>{
                      if(!err){
                        res.status(200).json({message:'Escala Cadastrada com sucesso'});
                      }else{
                        res.status(500).json(err);
                      }
                    });
              }else if(escala_celebrante.missa === 'Quarta: Terço dos Homens Ministração da Palavra de Deus Santa Teresinha 19h'){
                let query_criar = ("insert into escala_celebrante (id,missa,data,mes,ano,dia,hora,comunidade,celebrante) values(default,?,?,?,?,'Quarta','19h','Santa Teresinha',?)");
                connection.query(query_criar,[escala_celebrante.missa,escala_celebrante.data,escala_celebrante.mes,escala_celebrante.ano,escala_celebrante.celebrante],
                   (err,results)=>{
                      if(!err){
                        res.status(200).json({message:'Escala Cadastrada com sucesso'});
                      }else{
                        res.status(500).json(err);
                      }
                    });
              }else if(escala_celebrante.missa === 'Quarta: Terço dos Homens Ministração da Palavra de Deus Santa Teresinha 19h'){
                let query_criar = ("insert into escala_celebrante (id,missa,data,mes,ano,dia,hora,comunidade,celebrante) values(default,?,?,?,?,'Quarta','19h','Santa Teresinha',?)");
                connection.query(query_criar,[escala_celebrante.missa,escala_celebrante.data,escala_celebrante.mes,escala_celebrante.ano,escala_celebrante.celebrante],
                   (err,results)=>{
                      if(!err){
                        res.status(200).json({message:'Escala Cadastrada com sucesso'});
                      }else{
                        res.status(500).json(err);
                      }
                    });
              }else if(escala_celebrante.missa === 'Quinta: Novena com Adoração e Celebração Eucarística N.S.Rosário 19h'){
                let query_criar = ("insert into escala_celebrante (id,missa,data,mes,ano,dia,hora,comunidade,celebrante) values(default,?,?,?,?,'Quinta','19h','N.S.Rosário',?)");
                connection.query(query_criar,[escala_celebrante.missa,escala_celebrante.data,escala_celebrante.mes,escala_celebrante.ano,escala_celebrante.celebrante],
                   (err,results)=>{
                      if(!err){
                        res.status(200).json({message:'Escala Cadastrada com sucesso'});
                      }else{
                        res.status(500).json(err);
                      }
                    });
              }else if(escala_celebrante.missa === 'Quinta: Adoração ao Santíssimo Grupo de Oração Santa Teresinha 20h'){
                let query_criar = ("insert into escala_celebrante (id,missa,data,mes,ano,dia,hora,comunidade,celebrante) values(default,?,?,?,?,'Quinta','20h','Santa Teresinha',?)");
                connection.query(query_criar,[escala_celebrante.missa,escala_celebrante.data,escala_celebrante.mes,escala_celebrante.ano,escala_celebrante.celebrante],
                   (err,results)=>{
                      if(!err){
                        res.status(200).json({message:'Escala Cadastrada com sucesso'});
                      }else{
                        res.status(500).json(err);
                      }
                    });
              }else if(escala_celebrante.missa === 'Sábado: Missa/Celebração São Pedro 19h'){
                let query_criar = ("insert into escala_celebrante (id,missa,data,mes,ano,dia,hora,comunidade,celebrante) values(default,?,?,?,?,'Sábado','19h','São Pedro',?)");
                connection.query(query_criar,[escala_celebrante.missa,escala_celebrante.data,escala_celebrante.mes,escala_celebrante.ano,escala_celebrante.celebrante],
                   (err,results)=>{
                      if(!err){
                        res.status(200).json({message:'Escala Cadastrada com sucesso'});
                      }else{
                        res.status(500).json(err);
                      }
                    });
              }else if(escala_celebrante.missa === 'Sábado: Missa/Celebração Sagrado Coração de Jesus 19h'){
                let query_criar = ("insert into escala_celebrante (id,missa,data,mes,ano,dia,hora,comunidade,celebrante) values(default,?,?,?,?,'Sábado','19h','Sagrado Coração de Jesus',?)");
                connection.query(query_criar,[escala_celebrante.missa,escala_celebrante.data,escala_celebrante.mes,escala_celebrante.ano,escala_celebrante.celebrante],
                   (err,results)=>{
                      if(!err){
                        res.status(200).json({message:'Escala Cadastrada com sucesso'});
                      }else{
                        res.status(500).json(err);
                      }
                    });
              }else if(escala_celebrante.missa === 'Sábado: Missa em Reparação ao Imaculado Coração de Maria Santa Teresinha 17h45'){
                let query_criar = ("insert into escala_celebrante (id,missa,data,mes,ano,dia,hora,comunidade,celebrante) values(default,?,?,?,?,'Sábado','17h45','Santa Teresinha',?)");
                connection.query(query_criar,[escala_celebrante.missa,escala_celebrante.data,escala_celebrante.mes,escala_celebrante.ano,escala_celebrante.celebrante],
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
        let query = ('select * from escala_celebrante where id=?');
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
   let escala_celebrante = req.body;
   let query_read=('select missa,data,mes,ano,dia,hora,comunidade,celebrante from escala_celebrante where id = ?');
   connection.query(query_read,[escala_celebrante.missa],(err,results)=>{
    if(!err){
       if(results.length <= 0){
            let query = ('select id,missa,data,mes,ano,dia,hora,comunidade,celebrante from escala_celebrante order by id DESC');
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
  let query = ('delete from escala_celebrante where id = ?');
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
  
  let query = ("update escala_celebrante set missa = ?, data = ?,celebrante = ?");
  connection.query(query,[body.missa,body.data, body.celebrantes,id],(err,result)=>{
    if(!err){
      return res.status(200).json({message:'Escala Atualizada'});
    }else{
      res.status(500).json(err);
    }
    res.status(404).json({message:'id não encontrado'});
  });
});

router.get('/select_celebrante',(req,res)=>{
   let body = req.body;
   let query = ('select id,nome from celebrantes order by nome');
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

router.post('/create_celebrante',auth.authenticateToken,checkRole.checkRole,(req,res)=>{
  let body = req.body
  let query_consulta = ('select id,nome from celebrantes');
  connection.query(query_consulta,[query_consulta.nome],(err,results)=>{
    if(!err){
          let query = ('insert into celebrantes values (default,?)');
          connection.query(query,[body.nome],(err,result)=>{
            if(!err){
              res.status(200).json({message:'celebrante criado com Sucesso'});
            }else{
              res.status(500).json(err);
            }
          });
     
    }else{
      res.status(500).json(err);
    }
  }); 
});



router.put('/update_celebrante/:id',auth.authenticateToken,checkRole.checkRole,(req,res)=>{
  let id = req.params.id
  let body = req.body;
 
  let query = ("update celebrantes set nome = ? where id = ?");
  connection.query(query,[body.nome,id],(err,result)=>{
    if(!err){
      return res.status(200).json({message:'celebrante atualizado com Sucesso'});
    }else{
      res.status(500).json(err);
    }
    res.status(400).json({message:'id não encontrado'});
  }); 
});


router.delete('/delete_celebrante/:id',auth.authenticateToken,checkRole.checkRole,(req,res)=>{
  let id = req.params.id
  let query = ('delete from celebrantes where id = ?');
  connection.query(query,[id],(err,result)=>{
      if(!err){
          if(result.affectedRows==0){
              res.status(404).json({message:'id não encontrado'});
          }
          return res.status(200).json({message:'celebrante deletado com Sucesso'});
      }else{
          res.status(500).json(err);
      }
    });
});

module.exports = router;