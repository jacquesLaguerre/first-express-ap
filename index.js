//Import express
import express from 'express'
/*Always set the name of the API to app it could be anything 
but app is essentially what's used */
const app = express()

//Request are usually denied until it given specifc task. Express functions usually has two parameters
//request and response 
app.get('/test', (request, response)=> {
 response.send({ message: "It's all good broski!😃"})
})
app.get('/', (request, response)=> response.send({message:'Welcome to our first API'}))

app.get('/error', (request, response)=> 
response
.status(500)
.send ({message: 'Something went wrong', success: false}))
//This command doesn't end, check the request continuously through this port
app.listen(3030, () => console.log('Listening on http://locahost:3030...'))