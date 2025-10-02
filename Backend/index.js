const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const express = require('express')
const app = express()
app.use(express.json())

app.get('/user',(req,res)=>{
    res.status(200).json({message : 'Chai HAI Garam Garam'})
})

app.listen(3001,()=>{
    console.log('Server has Started on 3001')
})
