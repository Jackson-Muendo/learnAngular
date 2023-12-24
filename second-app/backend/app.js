const express = require('express')
const mongoose = require('mongoose')

const cors = require('cors')
const bodyparser = require('body-parser')
const postmodel = require('./postmodel')

const app = express()
app.use(bodyparser.json());
app.use(cors());
//x7y8zvEcbzCKYp9q mongodb+srv://jack:<password>@cluster0.7ufhcmr.mongodb.net/?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://jack:x7y8zvEcbzCKYp9q@cluster0.7ufhcmr.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser: true , useUnifiedTopology: true})
.then(()=>{
    console.log('connected to database!');
  })
  .catch((error)=>{
    console.log('connection failed! '+ error);
  });
app.use((req,res,next)=>{
    res.setHeader('Allow-Access-Control-Origin', '*');
    res.setHeader('Allow-Access-Control-Headers','Origin,X-Requested-With,Content-Type,Accept');
    res.setHeader('Allow-Access-Control-Methods','GET,PUT,POST,PATCH,DELETE,OPTIONS');
    next();
})

app.get('/api/posts',(req,res,next)=>{
    postmodel.find()
    .then((documents)=>{
        console.log(documents)
        res.status(200).json({
            message : 'fetched posts succesfully',
            posts : documents.map()})
    })
    
     //const posts = [
        // {
        //     id : '1',
        //     title: 'jackmaster',
        //     content: 'study with jackson'
        // },
        // {
        //     id: '2',
        //     title: 'jackmwexh',
        //     content: 'study with jackson'
        // }
     //]
    // res.status(200).json({
    //     message : 'fetched posts succesfully',
    //     posts : posts
    //})
   
    //console.log('hello yes')
    
})
app.post('/api/post',(req,res,next)=>{
const post = new postmodel({
    title:req.body.title,
    content:req.body.content
    
})
post.save()
//const post = req.body;
console.log(post);
res.status(201).json({message: 'post added succesfully'})
})

app.delete('/api/posts/:id',(req,res,next)=>{
    console.log(req.params.id);
    res.status(200).json({
        message : 'post deleted succesfully'
    })
})
module.exports =app;