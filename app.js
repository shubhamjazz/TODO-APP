const express = require('express');
const app = express();
const mongoose = require('mongoose')

 mongoose.connect(`mongodb://127.0.0.1:27017/todo_app`,{

 }) ;

app.use(require("./routes/index"))
app.use(require("./routes/todo"))

app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.set("view engine","ejs")



app.listen(3000,()=>{
    console.log('Server started on port 3000');
})