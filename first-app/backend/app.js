const express = require('express');
const app = express();

app.use('/api/users',(req,res,next)=>{
    const posts = [
        {
            'id' :'1',
            'name': 'jack',
            'content': 'welcome home'
        },
        {
            'id' :'3',
            'name': 'jackson',
            'content': 'welcome home today'  
        },
        {
            'id' :'1',
            'name': 'jack',
            'content': 'welcome home'
        },
        {
            'id' :'1',
            'name': 'jack',
            'content': 'welcome home'
        },
        {
            'id' :'1',
            'name': 'jack',
            'content': 'welcome home'
        },
        {
            'id' :'1',
            'name': 'jack',
            'content': 'welcome home'
        },
        {
            'id' :'1',
            'name': 'jack',
            'content': 'welcome home'
        }
    ];
    res.status(200).json({
        message : "posts fetched succesfully",
        posts : posts
    });
    
});


app.use('/api/posts',(req,res,next)=>{
    const posts = [
        {
            'id' :'1',
            'name': 'jack',
            'content': 'welcome home'
        },
        {
            'id' :'3',
            'name': 'jackson',
            'content': 'welcome home today'  
        },
        {
            'id' :'1',
            'name': 'jack',
            'content': 'welcome home'
        },
        {
            'id' :'1',
            'name': 'jack',
            'content': 'welcome home'
        },
        {
            'id' :'1',
            'name': 'jack',
            'content': 'welcome home'
        },
        {
            'id' :'1',
            'name': 'jack',
            'content': 'welcome home'
        },
        {
            'id' :'1',
            'name': 'jack',
            'content': 'welcome home'
        }
    ];
    res.status(200).json({
        message : "posts fetched succesfully",
        posts : posts
    });
    
});

module.exports =app;