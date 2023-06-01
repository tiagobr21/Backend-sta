
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

  let escala_liturgia = req.body;
  let paginas = escala_liturgia.length;


    if(paginas == 1){

        let pagina1 = JSON.parse(escala_liturgia[0].pagina1);
        let pagina2 = undefined
        let pagina3 = undefined
        let pagina4 = undefined
        let pagina5 = undefined
        let pagina6 = undefined
        let pagina7 = undefined
        let pagina8 = undefined
        let pagina9 = undefined
        let pagina10 = undefined
        let tipo = escala_liturgia[0].tipo;
        const generateUuid = uuid.v1();


        if(pagina1.length <= 10){
   
            ejs.renderFile(path.join(__dirname,'./','escala_liturgia.ejs'),
            {pagina1:pagina1,pagina2:pagina2,pagina3:pagina3,pagina4:pagina4,pagina5:pagina5,pagina6:pagina6,pagina7:pagina7,pagina8:pagina8,pagina9:pagina9,pagina10:pagina10,tipo:tipo},(err,results)=>{
                
           
                if(err){
                  console.log(err)
                  return res.status(500).json("error"+err)
                }else{
                 
                  pdf.create(results,{childProcessOptions: {env: {OPENSSL_CONF: '/dev/null',},}}).toFile('pdfs/escala-liturgia-pdf/'+'escala-liturgia-'+generateUuid+'.pdf',(err,data)=>{
                      if(err){
                        console.log(err)
                        return res.status(500).json(err)
                      }else{

                          return res.status(200).json({message:'Escala criada com Sucesso !!!'})
                      }
                  })

                  let data = 'escala-liturgia-'+generateUuid+'.pdf';
                  let query = 'insert into pdf_escala_liturgia values (default,?)';
                
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
      
   
      let pagina1 = JSON.parse(escala_liturgia[0].pagina1);
      let pagina2 = JSON.parse(escala_liturgia[1].pagina2);
      let pagina3 = undefined
      let pagina4 = undefined
      let pagina5 = undefined
      let pagina6 = undefined
      let pagina7 = undefined
      let pagina8 = undefined
      let pagina9 = undefined
      let pagina10 = undefined
      let tipo = escala_liturgia[0].tipo;
      const generateUuid = uuid.v1();
      
  
  
       if(pagina1.length <= 10 && pagina2.length <= 10){
      
          ejs.renderFile(path.join(__dirname,'./','escala_liturgia.ejs'),
          {pagina1:pagina1,pagina2:pagina2,pagina3:pagina3,pagina4:pagina4,pagina5:pagina5,pagina6:pagina6,pagina7:pagina7,pagina8:pagina8,pagina9:pagina9,pagina10:pagina10,tipo:tipo},(err,results)=>{
        
              if(err){
                return res.status(500).json("error"+err)
              }else{
                pdf.create(results,{childProcessOptions: {env: {OPENSSL_CONF: '/dev/null',},}}).toFile('pdfs/escala-liturgia-pdf/'+'escala-liturgia-'+generateUuid+'.pdf',(err,data)=>{
                    if(err){
                      console.log(err)
                      return res.status(500).json(err)
                    }else{
                      return res.status(200).json({message:'Escala criada com Sucesso !!!'})
                    }
                })
                
                let data = 'escala-liturgia-'+generateUuid+'.pdf';
                let query = 'insert into pdf_escala_liturgia values (default,?)';
              
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
      
   
      let pagina1 = JSON.parse(escala_liturgia[0].pagina1);
      let pagina2 = JSON.parse(escala_liturgia[1].pagina2);
      let pagina3 = JSON.parse(escala_liturgia[2].pagina3);
      let pagina4 = undefined
      let pagina5 = undefined
      let pagina6 = undefined
      let pagina7 = undefined
      let pagina8 = undefined
      let pagina9 = undefined
      let pagina10 = undefined
      let tipo = escala_liturgia[0].tipo;
      const generateUuid = uuid.v1();
      
  
  
       if(pagina1.length <= 10 && pagina2.length <= 10 && pagina3.length <= 10){
      
          ejs.renderFile(path.join(__dirname,'./','escala_liturgia.ejs'),
          {pagina1:pagina1,pagina2:pagina2,pagina3:pagina3,pagina4:pagina4,pagina5:pagina5,pagina6:pagina6,pagina7:pagina7,pagina8:pagina8,pagina9:pagina9,pagina10:pagina10,tipo:tipo},(err,results)=>{
        
              if(err){
                return res.status(500).json(err)
              }else{
                pdf.create(results,{childProcessOptions: {env: {OPENSSL_CONF: '/dev/null',},}}).toFile('pdfs/escala-liturgia-pdf/'+'escala-liturgia-'+generateUuid+'.pdf',(err,data)=>{
                    if(err){
                      console.log(err)
                      return res.status(500).json(err)
                    }else{
                      return res.status(200).json({message:'Escala criada com Sucesso !!!'})
                    }
                })
                
                let data = 'escala-liturgia-'+generateUuid+'.pdf';
                let query = 'insert into pdf_escala_liturgia values (default,?)';
              
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
      
   
      let pagina1 = JSON.parse(escala_liturgia[0].pagina1);
      let pagina2 = JSON.parse(escala_liturgia[1].pagina2);
      let pagina3 = JSON.parse(escala_liturgia[2].pagina3);
      let pagina4 = JSON.parse(escala_liturgia[3].pagina4);
      let pagina5 = undefined
      let pagina6 = undefined
      let pagina7 = undefined
      let pagina8 = undefined
      let pagina9 = undefined
      let pagina10 = undefined
      let tipo = escala_liturgia[0].tipo;
      const generateUuid = uuid.v1();
      

       if(pagina1.length <= 10 && pagina2.length <= 10 && pagina3.length <= 10 &&  pagina4.length <= 10){
      
          ejs.renderFile(path.join(__dirname,'./','escala_liturgia.ejs'),
          {pagina1:pagina1,pagina2:pagina2,pagina3:pagina3,pagina4:pagina4,pagina5:pagina5,pagina6:pagina6,pagina7:pagina7,pagina8:pagina8,pagina9:pagina9,pagina10:pagina10,tipo:tipo},(err,results)=>{
        
              if(err){
                return res.status(500).json("error"+err)
              }else{
                pdf.create(results,{childProcessOptions: {env: {OPENSSL_CONF: '/dev/null',},}}).toFile('pdfs/escala-liturgia-pdf/'+'escala-liturgia-'+generateUuid+'.pdf',(err,data)=>{
                    if(err){
                      console.log(err)
                      return res.status(500).json(err)
                    }else{
                      return res.status(200).json({message:'Escala criada com Sucesso !!!'})
                    }
                })
                
                let data = 'escala-liturgia-'+generateUuid+'.pdf';
                let query = 'insert into pdf_escala_liturgia values (default,?)';
              
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
      
      let pagina1 = JSON.parse(escala_liturgia[0].pagina1);
      let pagina2 = JSON.parse(escala_liturgia[1].pagina2);
      let pagina3 = JSON.parse(escala_liturgia[2].pagina3);
      let pagina4 = JSON.parse(escala_liturgia[3].pagina4);
      let pagina5 = JSON.parse(escala_liturgia[4].pagina5);
      let pagina6 = undefined
      let pagina7 = undefined
      let pagina8 = undefined
      let pagina9 = undefined
      let pagina10 = undefined
      let tipo = escala_liturgia[0].tipo;
      const generateUuid = uuid.v1();
      
  
  
       if(pagina1.length <= 10 && pagina2.length <= 10 && pagina3.length <= 10 &&  pagina4.length <= 10
        &&  pagina5.length <= 10){
      
          ejs.renderFile(path.join(__dirname,'./','escala_liturgia.ejs'),
          {pagina1:pagina1,pagina2:pagina2,pagina3:pagina3,pagina4:pagina4,pagina5:pagina5,pagina6:pagina6,pagina7:pagina7,pagina8:pagina8,pagina9:pagina9,pagina10:pagina10,tipo:tipo},(err,results)=>{
        
              if(err){
                return res.status(500).json("error"+err)
              }else{
                pdf.create(results,{childProcessOptions: {env: {OPENSSL_CONF: '/dev/null',},}}).toFile('pdfs/escala-liturgia-pdf/'+'escala-liturgia-'+generateUuid+'.pdf',(err,data)=>{
                    if(err){
                      console.log(err)
                      return res.status(500).json(err)
                    }else{
                      return res.status(200).json({message:'Escala criada com Sucesso !!!'})
                    }
                })
                
                let data = 'escala-liturgia-'+generateUuid+'.pdf';
                let query = 'insert into pdf_escala_liturgia values (default,?)';
              
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
      
      let pagina1 = JSON.parse(escala_liturgia[0].pagina1);
      let pagina2 = JSON.parse(escala_liturgia[1].pagina2);
      let pagina3 = JSON.parse(escala_liturgia[2].pagina3);
      let pagina4 = JSON.parse(escala_liturgia[3].pagina4);
      let pagina5 = JSON.parse(escala_liturgia[4].pagina5);
      let pagina6 = JSON.parse(escala_liturgia[5].pagina6);
      let pagina7 = undefined
      let pagina8 = undefined
      let pagina9 = undefined
      let pagina10 = undefined
      let tipo = escala_liturgia[0].tipo;
      const generateUuid = uuid.v1();
      
  
  
       if(pagina1.length <= 10 && pagina2.length <= 10 && pagina3.length <= 10 &&  pagina4.length <= 10
        &&  pagina5.length <= 10   &&  pagina6.length <= 10){
      
          ejs.renderFile(path.join(__dirname,'./','escala_liturgia.ejs'),
          {pagina1:pagina1,pagina2:pagina2,pagina3:pagina3,pagina4:pagina4,pagina5:pagina5,pagina6:pagina6,pagina7:pagina7,pagina8:pagina8,pagina9:pagina9,pagina10,tipo:tipo},(err,results)=>{
        
              if(err){
                return res.status(500).json("error"+err)
              }else{
                pdf.create(results,{childProcessOptions: {env: {OPENSSL_CONF: '/dev/null',},}}).toFile('pdfs/escala-liturgia-pdf/'+'escala-liturgia-'+generateUuid+'.pdf',(err,data)=>{
                    if(err){
                      console.log(err)
                      return res.status(500).json(err)
                    }else{
                      return res.status(200).json({message:'Escala criada com Sucesso !!!'})
                    }
                })
                
                let data = 'escala-liturgia-'+generateUuid+'.pdf';
                let query = 'insert into pdf_escala_liturgia values (default,?)';
              
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
      
   
      let pagina1 = JSON.parse(escala_liturgia[0].pagina1);
      let pagina2 = JSON.parse(escala_liturgia[1].pagina2);
      let pagina3 = JSON.parse(escala_liturgia[2].pagina3);
      let pagina4 = JSON.parse(escala_liturgia[3].pagina4);
      let pagina5 = JSON.parse(escala_liturgia[4].pagina5);
      let pagina6 = JSON.parse(escala_liturgia[5].pagina6);
      let pagina7 = JSON.parse(escala_liturgia[6].pagina7);
      let pagina8 = undefined
      let pagina9 = undefined
      let pagina10 = undefined
      let tipo = escala_liturgia[0].tipo;
      const generateUuid = uuid.v1();
      
  
  
       if(pagina1.length <= 10 && pagina2.length <= 10 && pagina3.length <= 10 &&  pagina4.length <= 10
        &&  pagina5.length <= 10   &&  pagina6.length <= 10 &&  pagina7.length <= 10){
      
          ejs.renderFile(path.join(__dirname,'./','escala_liturgia.ejs'),
          {pagina1:pagina1,pagina2:pagina2,pagina3:pagina3,pagina4:pagina4,pagina5:pagina5,pagina6:pagina6,pagina7:pagina7,pagina8:pagina8,pagina9:pagina9,pagina10,tipo:tipo},(err,results)=>{
        
              if(err){
                return res.status(500).json("error"+err)
              }else{
                pdf.create(results,{childProcessOptions: {env: {OPENSSL_CONF: '/dev/null',},}}).toFile('pdfs/escala-liturgia-pdf/'+'escala-liturgia-'+generateUuid+'.pdf',(err,data)=>{
                    if(err){
                      console.log(err)
                      return res.status(500).json(err)
                    }else{
                      return res.status(200).json({message:'Escala criada com Sucesso !!!'})
                    }
                })
                
                let data = 'escala-liturgia-'+generateUuid+'.pdf';
                let query = 'insert into pdf_escala_liturgia values (default,?)';
              
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
      
   
      let pagina1 = JSON.parse(escala_liturgia[0].pagina1);
      let pagina2 = JSON.parse(escala_liturgia[1].pagina2);
      let pagina3 = JSON.parse(escala_liturgia[2].pagina3);
      let pagina4 = JSON.parse(escala_liturgia[3].pagina4);
      let pagina5 = JSON.parse(escala_liturgia[4].pagina5);
      let pagina6 = JSON.parse(escala_liturgia[5].pagina6);
      let pagina7 = JSON.parse(escala_liturgia[6].pagina7);
      let pagina8 = JSON.parse(escala_liturgia[7].pagina8);
      let pagina9 = undefined
      let pagina10 = undefined
      let tipo = escala_liturgia[0].tipo;
      const generateUuid = uuid.v1();
      
  
  
       if(pagina1.length <= 10 && pagina2.length <= 10 && pagina3.length <= 10 &&  pagina4.length <= 10
        &&  pagina5.length <= 10   &&  pagina6.length <= 10 &&  pagina7.length <= 10  &&  pagina8.length <= 10){
      
          ejs.renderFile(path.join(__dirname,'./','escala_liturgia.ejs'),
          {pagina1:pagina1,pagina2:pagina2,pagina3:pagina3,pagina4:pagina4,pagina5:pagina5,pagina6:pagina6,pagina7:pagina7,pagina8:pagina8,pagina9:pagina9,pagina10:pagina10,tipo:tipo},(err,results)=>{
        
              if(err){
                return res.status(500).json("error"+err)
              }else{
                pdf.create(results,{childProcessOptions: {env: {OPENSSL_CONF: '/dev/null',},}}).toFile('pdfs/escala-liturgia-pdf/'+'escala-liturgia-'+generateUuid+'.pdf',(err,data)=>{
                    if(err){
                      console.log(err)
                      return res.status(500).json(err)
                    }else{
                      return res.status(200).json({message:'Escala criada com Sucesso !!!'})
                    }
                })
                
                let data = 'escala-liturgia-'+generateUuid+'.pdf';
                let query = 'insert into pdf_escala_liturgia values (default,?)';
              
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
      
   
       
      let pagina1 = JSON.parse(escala_liturgia[0].pagina1);
      let pagina2 = JSON.parse(escala_liturgia[1].pagina2);
      let pagina3 = JSON.parse(escala_liturgia[2].pagina3);
      let pagina4 = JSON.parse(escala_liturgia[3].pagina4);
      let pagina5 = JSON.parse(escala_liturgia[4].pagina5);
      let pagina6 = JSON.parse(escala_liturgia[5].pagina6);
      let pagina7 = JSON.parse(escala_liturgia[6].pagina7);
      let pagina8 = JSON.parse(escala_liturgia[7].pagina8);
      let pagina9 = JSON.parse(escala_liturgia[8].pagina9);
      let pagina10 = undefined
      let tipo = escala_liturgia[0].tipo;
      const generateUuid = uuid.v1();
      
  
  
       if(pagina1.length <= 10 && pagina2.length <= 10 && pagina3.length <= 10 &&  pagina4.length <= 10
        &&  pagina5.length <= 10   &&  pagina6.length <= 10 &&  pagina7.length <= 10  &&  pagina8.length <= 10
        &&  pagina9.length <= 10){
      
          ejs.renderFile(path.join(__dirname,'./','escala_liturgia.ejs'),
          {pagina1:pagina1,pagina2:pagina2,pagina3:pagina3,pagina4:pagina4,pagina5:pagina5,pagina6:pagina6,pagina7:pagina7,pagina8:pagina8,pagina9:pagina9,pagina10:pagina10,tipo:tipo},(err,results)=>{
        
              if(err){
                return res.status(500).json("error"+err)
              }else{
                pdf.create(results,{childProcessOptions: {env: {OPENSSL_CONF: '/dev/null',},}}).toFile('pdfs/escala-liturgia-pdf/'+'escala-liturgia-'+generateUuid+'.pdf',(err,data)=>{
                    if(err){
                      console.log(err)
                      return res.status(500).json(err)
                    }else{
                      return res.status(200).json({message:'Escala criada com Sucesso !!!'})
                    }
                })
                
                let data = 'escala-liturgia-'+generateUuid+'.pdf';
                let query = 'insert into pdf_escala_liturgia values (default,?)';
              
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
      
   
      let pagina1 = JSON.parse(escala_liturgia[0].pagina1);
      let pagina2 = JSON.parse(escala_liturgia[1].pagina2);
      let pagina3 = JSON.parse(escala_liturgia[2].pagina3);
      let pagina4 = JSON.parse(escala_liturgia[3].pagina4);
      let pagina5 = JSON.parse(escala_liturgia[4].pagina5);
      let pagina6 = JSON.parse(escala_liturgia[5].pagina6);
      let pagina7 = JSON.parse(escala_liturgia[6].pagina7);
      let pagina8 = JSON.parse(escala_liturgia[7].pagina8);
      let pagina9 = JSON.parse(escala_liturgia[8].pagina9);
      let pagina10 = JSON.parse(escala_liturgia[9].pagina10);
      let tipo = escala_liturgia[0].tipo;
      const generateUuid = uuid.v1();
      
  
  
       if(pagina1.length <= 10 && pagina2.length <= 10 && pagina3.length <= 10 &&  pagina4.length <= 10
        &&  pagina5.length <= 10   &&  pagina6.length <= 10 &&  pagina7.length <= 10  &&  pagina8.length <= 10
        &&  pagina9.length <= 10 &&  pagina10.length <= 10){
      
          ejs.renderFile(path.join(__dirname,'./','escala_liturgia.ejs'),
          {pagina1:pagina1,pagina2:pagina2,pagina3:pagina3,pagina4:pagina4,pagina5:pagina5,pagina6:pagina6,pagina7:pagina7,pagina8:pagina8,pagina9:pagina9,pagina10:pagina10,tipo:tipo},(err,results)=>{
        
              if(err){
                return res.status(500).json("error"+err)
              }else{
                pdf.create(results,{childProcessOptions: {env: {OPENSSL_CONF: '/dev/null',},}}).toFile('pdfs/escala-liturgia-pdf/'+'escala-liturgia-'+generateUuid+'.pdf',(err,data)=>{
                    if(err){
                      console.log(err)
                      return res.status(500).json(err)
                    }else{
                      return res.status(200).json({message:'Escala criada com Sucesso !!!'})
                    }
                })
                
                let data = 'escala-liturgia-'+generateUuid+'.pdf';
                let query = 'insert into pdf_escala_liturgia values (default,?)';
              
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
  let query = 'select id,filename from pdf_escala_liturgia order by id DESC';

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
  let query = 'delete from pdf_escala_liturgia where id = ?';
  namepdf = 'select * from pdf_escala_liturgia where id = ?'

     connection.query(namepdf,[id],(err,nomepdf)=>{
           connection.query(query,[id],(err,results)=>{
         
            if(!err){
              if(results.affectedRows == 0){
                res.status(404).json({message:'id não encontrado'})
              }
               fs.rm(`pdfs/escala-leitores-pdf/${nomepdf[0].filename}`, { recursive:true }, (err) => {
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


//create

router.post('/create',(req,res)=>{
  let escala_liturgia = req.body;

  console.log(escala_liturgia)

  let query_consulta=('select missa,data,mes,ano,dia,hora,comunidade,comentarista,leitores,musicos,salmista from escala_liturgia where id=?');
 connection.query(query_consulta,[escala_liturgia.missa],(err,results)=>{
      if(!err){
            if(results.length <= 0){
              if(escala_liturgia.missa === 'Domingo: Missa/Celebração Santa Teresinha 7h'){
                let query_criar = ("insert into escala_liturgia (id,missa,data,mes,ano,dia,hora,comunidade,comentarista,leitores,musicos,salmista) values(default,?,?,?,?,'Domingo','7h','Santa Teresinha',?,?,?,?)");
                connection.query(query_criar,[escala_liturgia.missa,escala_liturgia.data,escala_liturgia.mes,escala_liturgia.ano,escala_liturgia.comentarista,escala_liturgia.leitores,escala_liturgia.musicos,escala_liturgia.salmista],
                (err,results)=>{
                  if(!err){
                    res.status(200).json({message:'Escala Cadastrada com sucesso'});
                  }else{
                    res.status(500).json(err);
                  
                  }
                });
              }else if(escala_liturgia.missa === 'Domingo: Missa/Celebração N.S.Rosário 7h'){
                let query_criar = ("insert into escala_liturgia (id,missa,data,mes,ano,dia,hora,comunidade,comentarista,leitores,musicos,salmista) values(default,?,?,?,?,'Domingo','7h','N.S.Rosário',?,?,?,?)");
                connection.query(query_criar,[escala_liturgia.missa,escala_liturgia.data,escala_liturgia.mes,escala_liturgia.ano,escala_liturgia.comentarista,escala_liturgia.leitores,escala_liturgia.musicos,escala_liturgia.salmista],
                  (err,results)=>{
                    
                    if(!err){
                      res.status(200).json({message:'Escala Cadastrada com sucesso'});
                  }else{
                      res.status(500).json(err);
                  }
              });
              }else if(escala_liturgia.missa === 'Domingo: Missa/Celebração N.S.Perpétuo Socorro 8h30'){
                let query_criar = ("insert into escala_liturgia (id,missa,data,mes,ano,dia,hora,comunidade,comentarista,leitores,musicos,salmista) values(default,?,?,?,?,'Domingo','8h30','N.S.Perpétuo Socorro',?,?,?,?)");
                connection.query(query_criar,[escala_liturgia.missa,escala_liturgia.data,escala_liturgia.mes,escala_liturgia.ano,escala_liturgia.comentarista,escala_liturgia.leitores,escala_liturgia.musicos,escala_liturgia.salmista],
                  (err,results)=>{
                    if(!err){
                      res.status(200).json({message:'Escala Cadastrada com sucesso'});
                    }else{
                      res.status(500).json(err);
                    }
                  });
              }else if(escala_liturgia.missa === 'Domingo: Missa/Celebração N.S.Rosário 17h'){
                let query_criar = ("insert into escala_liturgia (id,missa,data,mes,ano,dia,hora,comunidade,comentarista,leitores,musicos,salmista) values(default,?,?,?,?,'Domingo','17h','N.S.Rosário',?,?,?,?)");
                connection.query(query_criar,[escala_liturgia.missa,escala_liturgia.data,escala_liturgia.mes,escala_liturgia.ano,escala_liturgia.comentarista,escala_liturgia.leitores,escala_liturgia.musicos,escala_liturgia.salmista],
                  (err,results)=>{
                    if(!err){
                      res.status(200).json({message:'Escala Cadastrada com sucesso'});
                    }else{
                      res.status(500).json(err);
                    }
                  });
              }else if(escala_liturgia.missa === 'Domingo: Missa/Celebração Santa Teresinha 19h'){
                let query_criar = ("insert into escala_liturgia (id,missa,data,mes,ano,dia,hora,comunidade,comentarista,leitores,musicos,salmista) values(default,?,?,?,?,'Domingo','17h','N.S.Rosário',?,?,?,?)");
                connection.query(query_criar,[escala_liturgia.missa,escala_liturgia.data,escala_liturgia.mes,escala_liturgia.ano,escala_liturgia.comentarista,escala_liturgia.leitores,escala_liturgia.musicos,escala_liturgia.salmista],
                  (err,results)=>{
                    if(!err){
                      res.status(200).json({message:'Escala Cadastrada com sucesso'});
                    }else{
                      res.status(500).json(err);
                    }
                  });
              }else if(escala_liturgia.missa === 'Terça: Novena com Adoração e Celebração Eucarística Santa Teresinha 19h'){
                let query_criar = ("insert into escala_liturgia (id,missa,data,mes,ano,dia,hora,comunidade,comentarista,leitores,musicos,salmista) values(default,?,?,?,?,'Terça','19h','Santa Teresinha',?,?,?,?)");
                connection.query(query_criar,[escala_liturgia.missa,escala_liturgia.data,escala_liturgia.mes,escala_liturgia.ano,escala_liturgia.comentarista,escala_liturgia.leitores,escala_liturgia.musicos,escala_liturgia.salmista],
                  (err,results)=>{
                    if(!err){
                        res.status(200).json({message:'Escala Cadastrada com sucesso'});
                    }else{
                        res.status(500).json(err);
                    }
                  });
              }else if(escala_liturgia.missa === 'Terça: Novena com Adoração e Celebração Eucarística São Pedro 19h'){
                let query_criar = ("insert into escala_liturgia (id,missa,data,mes,ano,dia,hora,comunidade,comentarista,leitores,musicos,salmista) values(default,?,?,?,?,'Terça','19h','São Pedro',?,?,?,?)");
                connection.query(query_criar,[escala_liturgia.missa,escala_liturgia.data,escala_liturgia.mes,escala_liturgia.ano,escala_liturgia.comentarista,escala_liturgia.leitores,escala_liturgia.musicos,escala_liturgia.salmista],
                  (err,results)=>{
                    if(!err){
                        res.status(200).json({message:'Escala Cadastrada com sucesso'});
                    }else{
                        res.status(500).json(err);
                    }
                  });
              }else if(escala_liturgia.missa === 'Terça: Novena com Adoração e Celebração Eucarística N. S. Perpétuo Socorro 19h'){
                let query_criar = ("insert into escala_liturgia (id,missa,data,mes,ano,dia,hora,comunidade,comentarista,leitores,musicos,salmista) values(default,?,?,?,?,'Terça','19h','N. S. Perpétuo Socorro',?,?,?,?)");
                connection.query(query_criar,[escala_liturgia.missa,escala_liturgia.data,escala_liturgia.mes,escala_liturgia.ano,escala_liturgia.comentarista,escala_liturgia.leitores,escala_liturgia.musicos,escala_liturgia.salmista],
                   (err,results)=>{
                      if(!err){
                        res.status(200).json({message:'Escala Cadastrada com sucesso'});
                      }else{
                        res.status(500).json(err);
                      }
                    });
              }else if(escala_liturgia.missa === 'Quarta: Terço dos Homens Ministração da Palavra de Deus Santa Teresinha 19h'){
                let query_criar = ("insert into escala_liturgia (id,missa,data,mes,ano,dia,hora,comunidade,comentarista,leitores,musicos,salmista) values(default,?,?,?,?,'Quarta','19h','Santa Teresinha',?,?,?,?)");
                connection.query(query_criar,[escala_liturgia.missa,escala_liturgia.data,escala_liturgia.mes,escala_liturgia.ano,escala_liturgia.comentarista,escala_liturgia.leitores,escala_liturgia.musicos,escala_liturgia.salmista],
                   (err,results)=>{
                      if(!err){
                        res.status(200).json({message:'Escala Cadastrada com sucesso'});
                      }else{
                        res.status(500).json(err);
                      }
                    });
              }else if(escala_liturgia.missa === 'Quarta: Terço dos Homens Ministração da Palavra de Deus Santa Teresinha 19h'){
                let query_criar = ("insert into escala_liturgia (id,missa,data,mes,ano,dia,hora,comunidade,comentarista,leitores,musicos,salmista) values(default,?,?,?,?,'Quarta','19h','Santa Teresinha',?,?,?,?)");
                connection.query(query_criar,[escala_liturgia.missa,escala_liturgia.data,escala_liturgia.mes,escala_liturgia.ano,escala_liturgia.comentarista,escala_liturgia.leitores,escala_liturgia.musicos,escala_liturgia.salmista],
                   (err,results)=>{
                      if(!err){
                        res.status(200).json({message:'Escala Cadastrada com sucesso'});
                      }else{
                        res.status(500).json(err);
                      }
                    });
              }else if(escala_liturgia.missa === 'Quinta: Novena com Adoração e Celebração Eucarística N.S.Rosário 19h'){
                let query_criar = ("insert into escala_liturgia (id,missa,data,mes,ano,dia,hora,comunidade,comentarista,leitores,musicos,salmista) values(default,?,?,?,?,'Quinta','19h','N.S.Rosário',?,?,?,?)");
                connection.query(query_criar,[escala_liturgia.missa,escala_liturgia.data,escala_liturgia.mes,escala_liturgia.ano,escala_liturgia.comentarista,escala_liturgia.leitores,escala_liturgia.musicos,escala_liturgia.salmista],
                   (err,results)=>{
                      if(!err){
                        res.status(200).json({message:'Escala Cadastrada com sucesso'});
                      }else{
                        res.status(500).json(err);
                      }
                    });
              }else if(escala_liturgia.missa === 'Quinta: Adoração ao Santíssimo Grupo de Oração Santa Teresinha 20h'){
                let query_criar = ("insert into escala_liturgia (id,missa,data,mes,ano,dia,hora,comunidade,comentarista,leitores,musicos,salmista) values(default,?,?,?,?,'Quinta','20h','Santa Teresinha',?,?,?,?)");
                connection.query(query_criar,[escala_liturgia.missa,escala_liturgia.data,escala_liturgia.mes,escala_liturgia.ano,escala_liturgia.comentarista,escala_liturgia.leitores,escala_liturgia.musicos,escala_liturgia.salmista],
                   (err,results)=>{
                      if(!err){
                        res.status(200).json({message:'Escala Cadastrada com sucesso'});
                      }else{
                        res.status(500).json(err);
                      }
                    });
              }else if(escala_liturgia.missa === 'Sábado: Missa/Celebração São Pedro 19h'){
                let query_criar = ("insert into escala_liturgia (id,missa,data,mes,ano,dia,hora,comunidade,comentarista,leitores,musicos,salmista) values(default,?,?,?,?,'Sábado','19h','São Pedro',?,?,?,?)");
                connection.query(query_criar,[escala_liturgia.missa,escala_liturgia.data,escala_liturgia.mes,escala_liturgia.ano,escala_liturgia.comentarista,escala_liturgia.leitores,escala_liturgia.musicos,escala_liturgia.salmista],
                   (err,results)=>{
                      if(!err){
                        res.status(200).json({message:'Escala Cadastrada com sucesso'});
                      }else{
                        res.status(500).json(err);
                      }
                    });
              }else if(escala_liturgia.missa === 'Sábado: Missa/Celebração Sagrado Coração de Jesus 19h'){
                let query_criar = ("insert into escala_liturgia (id,missa,data,mes,ano,dia,hora,comunidade,comentarista,leitores,musicos,salmista) values(default,?,?,?,?,'Sábado','19h','Sagrado Coração de Jesus',?,?,?,?)");
                connection.query(query_criar,[escala_liturgia.missa,escala_liturgia.data,escala_liturgia.mes,escala_liturgia.ano,escala_liturgia.comentarista,escala_liturgia.leitores,escala_liturgia.musicos,escala_liturgia.salmista],
                   (err,results)=>{
                      if(!err){
                        res.status(200).json({message:'Escala Cadastrada com sucesso'});
                      }else{
                        res.status(500).json(err);
                      }
                    });
              }else if(escala_liturgia.missa === 'Sábado: Missa em Reparação ao Imaculado Coração de Maria Santa Teresinha 17h45'){
                let query_criar = ("insert into escala_liturgia (id,missa,data,mes,ano,dia,hora,comunidade,comentarista,leitores,musicos,salmista) values(default,?,?,?,?,'Sábado','17h45','Santa Teresinha',?,?,?,?)");
                connection.query(query_criar,[escala_liturgia.missa,escala_liturgia.data,escala_liturgia.mes,escala_liturgia.ano,escala_liturgia.comentarista,escala_liturgia.leitores,escala_liturgia.musicos,escala_liturgia.salmista],
                   (err,results)=>{
                      if(!err){
                        res.status(200).json({message:'Escala Cadastrada com sucesso'});
                      }else{
                        res.status(500).json(err);
                      }
                    });
              }
              
            
            }else{
                res.status(500).json(err);
            }//results.length
      }//!err
  }) ;//CONNECTION
});//ROUTER

router.get('/read',(req,res)=>{
  let escala_liturgia = req.body;
  let query_read=('select missa,data,mes,ano,dia,hora,comunidade,comentarista,leitores,musicos,salmista from escala_liturgia where id=?');
  connection.query(query_read,[escala_liturgia.missa],(err,results)=>{
    if(!err){
        if(results.length <= 0){
            let query = ('select id,missa,data,mes,ano,dia,hora,comunidade,comentarista,leitores,musicos,salmista from escala_liturgia order by id DESC');
            connection.query(query,(err,results)=>{
                if(!err){
                    res.status(200).json(results);
                }else{
                    res.status(500).json(err);
                }
            });
        }else{
            res.status(400).json({message:'erro!'});
        }
    }
    else{
        res.status(500).json(err);
    }
  });
});

router.delete('/delete/:id',auth.authenticateToken,checkRole.checkRole,(req,res)=>{
  let id = req.params.id;
  let query = ('delete from escala_liturgia where id=?');
  connection.query(query,[id],(err,results)=>{
    if(!err){
        if(results.affectedRows==0){
            res.status(404).json({message:'id não encontrado'});
        }
        return res.status(200).json({message:'Escala deletada'});
    }else{
        res.status(500).json(err);
    }
});
});

router.put('/update/:id',auth.authenticateToken,checkRole.checkRole,(req,res)=>{
    let id = req.params.id;
    let body = req.body;
    let query = ("update escala_liturgia set missa = ?,data = ?,comentarista = ?, leitores = ?, musicos = ? where id = ?");

    connection.query(query,[body.missa,body.data,body.comentarista,body.leitores,id],(err,results)=>{
      if(!err){          
          return res.status(200).json({message:'Escala Alterada com sucesso'});
      }else{
          res.status(500).json(err);
      }

      res.status(404).json({message:'id não encontrado'});
  });
  });
          
  router.get('/getSingleData/:id',(req,res)=>{
    let id = req.params.id;
    let query = ('select * from escala_liturgia where id=?');
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


router.get("/select_leitores",(req,res)=>{
    let leitores = req.body
    let query="select id,nome from leitores order by nome"
    connection.query(query,(err,results)=>{
      if(!err){
        res.status(200).json(results);
      }else{
        res.status(500).json(err);
      }
    });
  });

  router.get("/select_comentaristas",(req,res)=>{
    let comentaristas = req.body
    let query="select id,nome from comentaristas order by nome"
    connection.query(query,(err,results)=>{
      if(!err){
        res.status(200).json(results);
      }else{
        res.status(500).json(err);
      }
    });
  });

  router.get("/select_musicos",(req,res)=>{
    let musicos = req.body
    let query="select id,nome from musicos order by nome"
    connection.query(query,(err,results)=>{
      if(!err){
        res.status(200).json(results);
      }else{
        res.status(500).json(err);
      }
    });
  });


  router.get("/select_salmistas",(req,res)=>{
    let musicos = req.body
    let query="select id,nome from salmistas order by nome"
    connection.query(query,(err,results)=>{
      if(!err){
        res.status(200).json(results);
      }else{
        res.status(500).json(err);
      }
    });
  });

  router.get("/select_comunidades",(req,res)=>{
    let locais = req.body
    let query="select nome from comunidades"
    connection.query(query,(err,results)=>{
      if(!err){
        res.status(200).json(results);
      }else{
        res.status(500).json(err);
      }
    });
  });

  router.get("/select_missa",(req,res)=>{
    let missa = req.body
    let query="select nome from missa_celebracao"
    connection.query(query,(err,results)=>{
      if(!err){
        res.status(200).json(results);
      }else{
        res.status(500).json(err);
      }
    });
  });

  
// funcões do administrador

   //leitores

    router.post('/create_leitores',auth.authenticateToken,checkRole.checkRole,(req,res)=>{
      let body = req.body
      let query_consulta = ('select id,nome from leitores');
      connection.query(query_consulta,[query_consulta.nome],(err,results)=>{
        if(!err){
        
              let query = ('insert into leitores values (default,?)');
              connection.query(query,[body.nome],(err,result)=>{
                if(!err){
                  res.status(200).json({message:'leitor criado com Sucesso'});
                }else{
                  res.status(500).json(err);
                }
              });
        
        }else{
          res.status(500).json(err);
        }
      }); 
    });

      
    router.put('/update_leitores/:id',auth.authenticateToken,checkRole.checkRole,(req,res)=>{
      let id = req.params.id
      let body = req.body;
      let query = ("update leitores set nome=? where id=?");
      connection.query(query,[body.nome,id],(err,results)=>{
        if(!err){
          return res.status(200).json({message:'leitor atualizado com Sucesso'});
        }else{
          res.status(500).json(err);
        }
        res.status(400).json({message:'id não encontrado'});
      }); 
    });


    router.delete('/delete_leitores/:id',auth.authenticateToken,checkRole.checkRole,(req,res)=>{
      let id = req.params.id
      let query = ('delete from leitores where id=?');
      connection.query(query,[id],(err,results)=>{
      if(!err){
          if(results.affectedRows==0){
              res.status(404).json({message:'id não encontrado'});
          }
          return res.status(200).json({message:'leitor deletado com Sucesso'});
      }else{
          res.status(500).json(err);
      }
    });
    });

    
    //comentaristas 
       
    router.post('/create_comentarista',auth.authenticateToken,checkRole.checkRole,(req,res)=>{
      let body = req.body
      let query_consulta = ('select id,nome from comentaristas');
      connection.query(query_consulta,[query_consulta.nome],(err,results)=>{
        if(!err){
        
              let query = ('insert into comentaristas values (default,?)');
              connection.query(query,[body.nome],(err,result)=>{
                if(!err){
                  res.status(200).json({message:'comentarista criado com Sucesso'});
                }else{
                  res.status(500).json(err);
                }
              });
        
        }else{
          res.status(500).json(err);
        }
      }); 
    });

      
    router.put('/update_comentarista/:id',auth.authenticateToken,checkRole.checkRole,(req,res)=>{
      let id = req.params.id
      let body = req.body;
      let query = ("update comentaristas set nome=? where id=?");
      connection.query(query,[body.nome,id],(err,results)=>{
        if(!err){
          return res.status(200).json({message:'comentarista atualizado com Sucesso'});
        }else{
          res.status(500).json(err);
        }
        res.status(400).json({message:'id não encontrado'});
      }); 
    });


    router.delete('/delete_comentarista/:id',auth.authenticateToken,checkRole.checkRole,(req,res)=>{
      let id = req.params.id
      let query = ('delete from comentaristas where id=?');
      connection.query(query,[id],(err,results)=>{
      if(!err){
          if(results.affectedRows==0){
              res.status(404).json({message:'id não encontrado'});
          }
          return res.status(200).json({message:'comentarista deletado com Sucesso'});
      }else{
          res.status(500).json(err);
      }
    });
    });


       //musicos

       router.post('/create_musicos',auth.authenticateToken,checkRole.checkRole,(req,res)=>{
        let body = req.body
        let query_consulta = ('select id,nome from musicos');
        connection.query(query_consulta,[query_consulta.nome],(err,results)=>{
          if(!err){
          
                let query = ('insert into musicos values (default,?)');
                connection.query(query,[body.nome],(err,result)=>{
                  if(!err){
                    res.status(200).json({message:'musico criado com Sucesso'});
                  }else{
                    res.status(500).json(err);
                  }
                });
          
          }else{
            res.status(500).json(err);
          }
        }); 
      });
  
        
      router.put('/update_musicos/:id',auth.authenticateToken,checkRole.checkRole,(req,res)=>{
        let id = req.params.id
        let body = req.body;
        let query = ("update musicos set nome=? where id=?");
        connection.query(query,[body.nome,id],(err,results)=>{
          if(!err){
            return res.status(200).json({message:'musico atualizado com Sucesso'});
          }else{
            res.status(500).json(err);
          }
          res.status(400).json({message:'id não encontrado'});
        }); 
      });
  
  
      router.delete('/delete_musicos/:id',auth.authenticateToken,checkRole.checkRole,(req,res)=>{
        let id = req.params.id
        let query = ('delete from musicos where id=?');
        connection.query(query,[id],(err,results)=>{
        if(!err){
            if(results.affectedRows==0){
                res.status(404).json({message:'id não encontrado'});
            }
            return res.status(200).json({message:'musico deletado com Sucesso'});
        }else{
            res.status(500).json(err);
        }
      });
      });

  //salmistas

  router.post('/create_salmistas',auth.authenticateToken,checkRole.checkRole,(req,res)=>{
    let body = req.body
    let query_consulta = ('select id,nome from salmistas');
    connection.query(query_consulta,[query_consulta.nome],(err,results)=>{
      if(!err){
      
            let query = ('insert into salmistas values (default,?)');
            connection.query(query,[body.nome],(err,result)=>{
              if(!err){
                res.status(200).json({message:'Salmista criado com Sucesso'});
              }else{
                res.status(500).json(err);
              }
            });
      
      }else{
        res.status(500).json(err);
      }
    }); 
  });

    
  router.put('/update_salmistas/:id',auth.authenticateToken,checkRole.checkRole,(req,res)=>{
    let id = req.params.id
    let body = req.body;
    let query = ("update salmistas set nome=? where id=?");
    connection.query(query,[body.nome,id],(err,results)=>{
      if(!err){
        return res.status(200).json({message:'Salmista atualizado com Sucesso'});
      }else{
        res.status(500).json(err);
      }
      res.status(400).json({message:'id não encontrado'});
    }); 
  });


  router.delete('/delete_salmistas/:id',auth.authenticateToken,checkRole.checkRole,(req,res)=>{
    let id = req.params.id
    let query = ('delete from salmistas where id=?');
    connection.query(query,[id],(err,results)=>{
    if(!err){
        if(results.affectedRows==0){
            res.status(404).json({message:'id não encontrado'});
        }
        return res.status(200).json({message:'Salmista deletado com Sucesso'});
    }else{
        res.status(500).json(err);
    }
  });
  });
    
  

module.exports = router;