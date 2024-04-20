const express=require('express');
const cors=require('cors');
const app=express();
const PORT=process.env.PORT || 8181;

const apiData=require('./db.json');


app.use(cors());

app.get('/',(req,res)=>{
    res.send({message:'welcome to ecommerce app api'})
})


app.get('/Products',(req,res)=>{
res.send(apiData)
})

app.listen(PORT,()=>{
    console.log('SERVER STARTED PORT 8181!');
})

