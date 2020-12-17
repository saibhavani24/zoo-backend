module.exports = {
    register:(req,res) =>{
        console.log("Data ",req.body)
        res.send("Hello Sai Bhavani")
    },
    login:(req,res) =>{
        console.log("Data ",req.body)
        res.send("Hello Sai Bhavani you can login")
    }
}