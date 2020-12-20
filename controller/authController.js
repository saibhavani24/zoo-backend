const {insertDoc, getDoc} = require('../utils/dbHelper')
module.exports = {
    register:(req,res) =>{
        insertDoc(req.body, (err, data) => {
            console.log("Data ",req.body)
            err? res.send(err) : res.send(data)
        } );
    },
    me:(req,res) =>{
        getDoc((err, data) => {
            err? res.send(err) : res.send(data)
            console.log(data);
        })
    },
    login:(req,res) =>{
        console.log("Data ",req.body)
        res.send("Hello Sai Bhavani you can login")
    }
}