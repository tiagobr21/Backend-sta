const express = require('express');
var cors =require('cors');
const connection = require('./connection');
const userRoute = require('./routes/user');
const coroinhaRoute = require('./routes/escala_coroinha');
const ministroRoute = require('./routes/escala_ministro');
const celebranteRoute = require('./routes/escala_celebrante');
const liturgiaRoute = require('./routes/escala_liturgia');
const geralRoute = require('./routes/escala_geral');
const homePageRoute = require('./routes/config_home_page');
const app = express();
const path = require("path");



app.get("/",(req,res)=>{
    return res.status(200).json("WELCOME");
})

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/user',userRoute);
app.use('/escala_coroinha',coroinhaRoute);
app.use('/escala_ministro',ministroRoute);
app.use('/escala_celebrante',celebranteRoute);
app.use('/escala_liturgia',liturgiaRoute);
app.use('/escala_geral',geralRoute);
app.use('/config_home_page',homePageRoute);
app.use('/files',express.static(path.resolve(__dirname,".","tmp","uploads")))
app.use('/pdfs',express.static(path.resolve(__dirname,".","pdfs","escala-coroinha-pdf")))
app.use('/pdfs',express.static(path.resolve(__dirname,".","pdfs","escala-ministro-pdf")))
app.use('/pdfs',express.static(path.resolve(__dirname,".","pdfs","escala-celebrante-pdf")))
app.use('/pdfs',express.static(path.resolve(__dirname,".","pdfs","escala-liturgia-pdf")))
module.exports = app;