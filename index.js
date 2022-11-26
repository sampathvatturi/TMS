const express = require('express');
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}))
app.use(cors());
const db = require('./config/config');

const userroutes = require('./routes/userroutes');
const ticketroutes = require('./routes/ticketroutes');
const departmentroutes = require('./routes/departmentroutes');

app.use(userroutes);
app.use(ticketroutes);
app.use(departmentroutes);

app.listen('5000',()=>{
    console.log('server in running')
})

app.post('/postu',(req,res)=>{
    
    const params = req.body;
    console.log(params)
    db.query("INSERT INTO `users` SET ? ",params,(err,result,fields)=>{
        if(!err)
            res.send(result);
        else
            res.send(err);
    })
})