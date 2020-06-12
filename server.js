const express = require('express');  // Gives access to express library
const app = express();  // Constructs an instance of express, named app
const bodyParser = require('body-parser');
app.use(bodyParser.json())

const mockUserData = [
    {
        name : 'Mark'
    },
    {
        name : 'Jill'
    }
]

app.get('/',function(req,res)
{
    res.json({
        sucess: true,
        message: 'Root URL'
    })
})

app.get('/users',function(req,res)
{
    res.json({
        success: true,
        message: 'Successfully got users. Awesome!',
        users: mockUserData
    })
})

app.get('/users/:id', function(req,res)
{
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'Got One User',
        user: req.params.id
    })
})

app.post('/login',function(req,res)
{
    const username=req.body.username;
    const password=req.body.password;

    const MockUsername="billyTheKid";
    const MockPassword="superSecret";

    if (username==MockUsername && password==mockPassword)
    {
        res,json({
            success:true,
            message: 'Password and Username match!',
            token: 'Encrypted token goes here.'
        })
    }
    else{
        res.json({
            sucess: false,
            message: 'Password and Username do not match'
        })
    }
})

app.listen(8000,function()
{
    console.log("Server is running...")
})
