console.log("learning backend!")

const express = require("express")

const app = express()

app.use("/", (req, res) => {
    res.end("Hello from the ser11ver!")
})

app.use("/hello", (req, res) => {
    res.end("Hello from the gello!")
})

app.listen(3000)