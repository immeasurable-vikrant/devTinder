const express = require("express")

const app = express()


// this will only handle GET call to /user
app.get("/user", (req, res) => {
    console.log("req", req.url)
    res.send({firstName: "Vikrant", lastName: "Singh"})
})

app.post("/user", (req, res) => {
    console.log("Save data to the database")
    res.send("Data successfully saved to the database")
})

// this "use" will match all the HTTP method API calls to "/test"
app.use("/test", (req, res) => {
    res.send("Hello from the server: /test!")
})

app.listen(3000)