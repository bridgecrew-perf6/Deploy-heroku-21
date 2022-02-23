import express from "express"
import path from "path"
import { fileURLToPath } from "url"


const app = express()

const _dirname =  path.dirname(fileURLToPath(import.meta.url))

const publicDirectory = path.join(_dirname, './public')

app.use(express.static(publicDirectory))

const port = 10020

app.listen(port, ()=>{
    console.log(`server is up on port ${port}`)
})