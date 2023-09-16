//const fs = require ("fs");

const express = require ("express");
var bodyParser = require('body-parser')
const app = express()
const port = 3000

// function middleware1(req,res,next){
//     console.log("from inside middleware" + req.headers.counter);

//     next();
// }
// app.use(middleware1)
app.use(bodyParser.json())
function calculateSum(counter) {
        var sum = 0;
        for (i =0 ; i<=counter ; i ++){
            sum = sum + i ;
        }
        return sum;
    }
    
    

function handleFirstRequest(req,res){
//var counter = req.query.counter;
//console.log(req.headers);


var counter = req.headers.counter;
var calculatedSum = calculateSum(counter);
 var answer = "the sum is" +  calculatedSum;
   
    res.send(answer); 
}
//app.get('/handleSum',handleFirstRequest)

app.post('/handleSum',handleFirstRequest )
function started (){
    console.log(`Example app listening on port ${port}`)
}
app.listen (port,started)











// function callbackfn (err, data) {
//     console.log(data);
// }
// fs.readFile("a.txt","utf-8",callbackfn)