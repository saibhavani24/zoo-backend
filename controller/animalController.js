module.exports = {
    addAnimal:(req,res) =>{
        console.log("Data ",req.body)
        res.send("One animal added")
    }
}