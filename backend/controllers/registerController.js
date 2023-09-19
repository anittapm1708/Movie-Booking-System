const Register=require("../models/User")

const registerCreate=(req,res)=>{
Register.create({
    username:req.body.username,
    email:req.body.email,
    password:req.body.password
})
.then((data)=>
{
    res.status(200).send("registered")
})
.catch((err)=>
{
    res.send(err)
})
}
module.exports={registerCreate}