const express = require("express")
const connectDB = require("./config/database")
const User = require("./models/user")

const app = express()

app.post("/signup", async (req, res, next) => {
    const userObj = {
        firstName: "Sushant",
        lastName: "Singh",
        emailId: "sushant.singh@gmail.com",
        password: "sushant@12345",
    }
    try{
        const user = new User(userObj)
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
