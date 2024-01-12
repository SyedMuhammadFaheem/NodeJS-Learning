import express from "express";

const app= express()
const PORT=process.env.PORT || 3000

app.get("/",(request,response,next)=>{
    response.status(200).send({msg:"Hello GET API!"})
    next()
})

app.get("/api/users",(request,response,next)=>{
    response.send([
        {id:1,username:"faheem",displayName:"Faheem"},
        {id:2,username:"umair",displayName:"Umair"},
        {id:3,username:"rabia",displayName:"Rabia"}
    ])
    next()
})

app.get("/api/products",(request,response,next)=>{
    response.send([
        {id:1,productName:"Chicken Breasts", price:14.99}
    ])
})

app.listen(PORT, ()=>{
    console.log(`Server listening at port: ${PORT}`)
})