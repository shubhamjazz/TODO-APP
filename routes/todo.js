const router = require('express').Router()
const Todo =require("../models/Todo")

router.post("/add/todo",(request,response)=>{
    const {todo} = request.body;
    const newTodo = new Todo({todo})

    newTodo.save().then(()=>{
        console.log("Successfully added Todo");
        response.redirect("/");
    })
    .catch((err)=>console.log(err))
})

.get("/delete/todo/:_id", (req, res) => {
    const { _id } = req.params;
    Todo.deleteOne({ _id })
      .then(() => {
        console.log("Deleted Todo Successfully!");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  });

module.exports=router;