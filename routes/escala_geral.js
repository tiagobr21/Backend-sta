
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

router.get('/read',(req,res)=>{
    
    let query = ('select celebrante.id,celebrante.missa,celebrante.data,celebrante.mes,celebrante.ano,celebrante.dia,celebrante.hora,celebrante.comunidade,celebrante.celebrante,ministro.ministros,liturgia.comentarista,liturgia.leitores,liturgia.musicos,liturgia.salmista,coroinha.acolito,coroinha.coroinha from escala_celebrante as celebrante inner join escala_ministro as ministro on celebrante.data = ministro.data && celebrante.comunidade = ministro.comunidade && celebrante.hora = ministro.hora inner join escala_liturgia as liturgia on celebrante.data = liturgia.data && celebrante.comunidade = liturgia.comunidade && celebrante.hora = liturgia.hora inner join escala_coroinha as coroinha on celebrante.data = coroinha.data && celebrante.comunidade = coroinha.comunidade && celebrante.hora = coroinha.hora order by id DESC');
        
        connection.query(query,(err,results)=>{
                if(!err){
                    res.status(200).json(results);
                }else{
                    res.status(500).json(err);
                }
        });
         


});

module.exports = router;