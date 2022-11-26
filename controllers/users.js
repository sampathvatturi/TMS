const db = require('../config/config');

//users
exports.getusers = async(req, res) =>{
    db.query('select * from users',(err,result,fiels)=>{
        if(!err)
            res.send(result);
        else
            res.send(err);
    })
}

exports.postusers = async(req, res) =>{
    // console.log('123')
    // console.log(req.data)
    // console.log(req.params)
    const params = req.body;
    console.log(params)
    db.query("INSERT INTO `users` SET ? ",params,(err,result,fields)=>{
        if(!err)
            res.send(result);
        else
            res.send(err);
    })
}


exports.updateusers = async(req, res) =>{
    db.query('select * from users',(err,result,fiels)=>{
        if(!err)
            res.send(result);
        else
            res.send(err);
    })
}


exports.deleteusers = async(req, res) =>{
    db.query('select * from users',(err,result,fiels)=>{
        if(!err)
            res.send(result);
        else
            res.send(err);
    })
}