const express = require("express")
const connectDB = require("./config/database")
const User = require("./models/user")

const app = express()
// convert req
app.use(express.json())

app.post("/signup", async (req, res, next) => {
    console.log("req body", req.body)
    try{
        const user = new User(req.body)
        await user.save()
        console.log("res", res)
        res.send("User added successfully!")
    } catch (err) {
        res.send(err)
        res.status(400).send("Err saving user:")
    }
    
})

connectDB().then(() => {
    console.log("DB connection successful")
    app.listen(3000, () => {
        console.log("server listening at 3000")
    })
})
.catch((err) => {
    console.log(err, "DB cannot be accessed")
})
