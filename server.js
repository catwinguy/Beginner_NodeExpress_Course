const express = require('express');  // Gives access to express library
const app = express();  // Constructs an instance of express, named app

const mockUserData = [
    {
        name : 'Mark'
    },
    {
        name : 'Jill'
    }
]

app.get('/users',function(req,res)
{
    res.json({
        success: true,
        message: 'Successfully got users. Awesome!',
        users: mockUserData
    })
})

app.listen(8000,function()
{
    console.log("Server is running...")
})
