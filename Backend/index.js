const express = require("express");

const mysql=require("mysql")

const cors=require("cors") 


const app=express() 

app.use(cors()); 
app.use(express.json())


const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'clientsdb'
});


app.get("/",(req,res)=>{
    res.send("Hi")
})


app.post("/client",(req,res)=>{ 
    const {name,email,phone,message}=req.body 
    const values=[name,email,phone,message]

    
    connection.query(`INSERT INTO client (name,email,phone,message) Values(?,?,?,?)`,values,(err,data)=>{
        if (err){
            console.log(err)
        }
        console.log("Form Submitted Successfully.")
        return res.json("Form Submitted Successfully.")
    })

})

app.listen(2000,()=>{
    console.log("Server is started")
}) 