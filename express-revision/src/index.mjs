import express from "express";

const app= express()
app.use(express.json())
const PORT=process.env.PORT || 3000

//middleware function used in put, patch and delete
const resolveUserById = (request,response,next)=>{
    const {params:{id}}= request
    const parsedId= parseInt(id)
    if(isNaN(parsedId)) response.send(400)

    const findUserIndex= users.findIndex((user)=>user.id===parsedId)
    if(findUserIndex==-1) response.status(400).send({msg:"User not found!"})
    request.findUserIndex= findUserIndex
    next()
}

const users = [
    {id:1,username:"faheem",displayName:"Faheem"},
    {id:2,username:"umair",displayName:"Umair"},
    {id:3,username:"rabia",displayName:"Rabia"},
    {id:4,username:"tina",displayName:"Tina"},
    {id:5,username:"jason",displayName:"Jason"},
    {id:6,username:"henry",displayName:"Henry"},
    {id:7,username:"marilyn",displayName:"Marilyn"},
]

const products = [
    {id:1,productName:"Chicken Breasts", price:14.99}
]

app.get("/",(request,response)=>{
    response.status(200).send({msg:"Hello GET API!"})
})

app.get("/api/users",(request,response)=>{
    const {filter,value}= request.query
    if(filter && value)
    {
        const filteredUser= users.filter((user)=>
            user[filter].includes(value)
        )
        response.send(filteredUser)
    }
    response.send(users)
})

app.get("/api/products",(request,response)=>{
    response.send(products)
})

app.get("/api/users/:id",(request,response)=>{
    const id= parseInt(request.params.id)
    if(isNaN(id)) response.status(400).send({msg:"Bad request. Enter a numeric ID"})

    const findUser= users.find((usr)=>usr.id===id)
    if(!findUser) response.sendStatus(400)

    response.send(findUser)
})

app.post("/api/users",(request,response)=>{
    const newUser= {id: users.length+1, ...request.body}
    users.push(newUser)
    response.status(201).send({msg:"User created!", user: newUser})
})

app.put("/api/users/:id",resolveUserById,(request,response)=>{
    
    users[findUserIndex]={ id: parsedId, ...body}
    response.status(200).send({msg:"User updated!"})

})

app.patch("/api/users/:id",resolveUserById,(request,response)=>{
    const {findUserIndex,body}= request
    users[findUserIndex]={...users[findUserIndex],...body}
    response.status(200).send({msg:"User specific contents updated!"})
})

app.delete("/api/users/:id",resolveUserById,(request,response)=>{
    const {findUserIndex}=request
    users.splice(findUserIndex,1)
    response.status(200).send({msg:"User deleted!"})
})

app.listen(PORT, ()=>{
    console.log(`Server listening at port: ${PORT}`)
})