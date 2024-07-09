const express =require('express')
let app = express()



app.get('/' , (req , res)=> { 
    res.send('Hello there')
})

app.listen(3000 , (req , res)=> {
    console.log('server is running')
})