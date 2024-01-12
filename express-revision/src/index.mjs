import express from "express";

const app= express()
const PORT=process.env.PORT || 3000

const users = [
    {id:1,username:"faheem",displayName:"Faheem"},
    {id:2,username:"umair",displayName:"Umair"},
    {id:3,username:"rabia",displayName:"Rabia"}
]

const products = [
    {id:1,productName:"Chicken Breasts", price:14.99}
]

app.get("/",(request,response,next)=>{
    response.status(200).send({msg:"Hello GET API!"})
    next()
})

app.get("/api/users",(request,response,next)=>{
    response.send(users)
    next()
})

app.get("/api/products",(request,response,next)=>{
    response.send(products)
})

app.get("/api/users/:id",(request,response,next)=>{
    const id= parseInt(request.params.id)
    if(isNaN(id)) response.status(400).send({msg:"Bad request. Enter a numeric ID"})

    const findUser= users.find((usr)=>usr.id===id)
    if(!findUser) response.sendStatus(400)

    response.send(findUser)
})

app.listen(PORT, ()=>{
    console.log(`Server listening at port: ${PORT}`)
})