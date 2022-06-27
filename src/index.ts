import express from "express"
import env from "dotenv"
import { AppDataSource } from './data-source'

const userRetrive = require('./routes/retrive')
const userCreate = require('./routes/create')
const userDelete = require('./routes/delete')
const userUpdate = require('./routes/update')

const app = express()

env.config()

AppDataSource.initialize()
.then(()=>{
    console.log('Database connected!!!')
})
.catch(()=>{
    console.log('Sorry!, Could not connect')
})

app.use(express.json())
app.use('/api', userRetrive)
app.use('/api', userCreate)
app.use('/api', userDelete)
app.use('/api', userUpdate)

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port: ${process.env.PORT}`)
})