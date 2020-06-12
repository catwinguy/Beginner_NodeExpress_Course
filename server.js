const express = require('express');  // Gives access to express library
const app = express();  // Constructs an instance of express, named app

app.listen(8000,function()
{
    console.log("Server is running...")
})
