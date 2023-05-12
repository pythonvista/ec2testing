const express = require("express")
const cors = require("cors")

const bodyParser = require("body-parser")

const app = express()

app.use(cors())
app.use(bodyParser())


app.get('/',(req, res)=>{
    res.json({msg: '🎉🎉 its working'})
})

app.get('/test',(req, res)=>{
    res.json({msg: '🎉🎉 am still working'})
})

app.listen(3000, ()=>{
    console.log('server is running on port :3000')
})