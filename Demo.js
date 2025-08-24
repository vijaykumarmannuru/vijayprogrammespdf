const register=require('./Registration');
const os=require('os');
const fs=require('fs');
const express=require('express')
function say(){
    console.log("hello")
}
say();
const isExit=register.Check();
if(isExit){
    console.log("user exists")
}
else{
    console.log("not")
}
register.register()
console.log(os.hostname());
console.log(os.freemem());
fs.writeFile('./vijay.txt','Hello vijay',(err)=>{
    if(err){
        console.log("created succesly");
        return
    }
    else{
        console.log("create now");
    }
})
fs.readFile('./vijay.txt','utf8',(err,data)=>{
    if(err){
        console.log("error occured")
        return
    }
    else{
        console.log("data in file",data)
    }
})
 
const app=express()
 const port=5000
app.get('/apple',(req,res)=>{
    res.send("hey welcome to user");

})
app.get('/saybye',(req,res)=>{
    res.send("okay bye");
})
app.post('/saybye',(req,res)=>{
    console.log("post roue")
    res.send("post route")
})
app.put('/userindex',(req,res)=>{
    console.log("user updateindex")
    res.send("updated user details succeslly")
})

app.listen(port,()=>{
    console.log("your server is running")
})
