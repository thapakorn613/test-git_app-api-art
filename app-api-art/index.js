const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.json({ message: "Ahoy!" })
})

app.get("/data", (req, res) => {
    // ? SHOW
    res.json({ message: "get DATA" })
})

app.post("/data", (req, res) => {
    // ?  CREATE 
    res.json({ message: "create DATA" })
})

app.put("/data", (req, res) => {
    //?  UPDATE
    res.json({ message: "updated DATA" })
})

app.delete("/data", (req, res) => {
    // ! DELETE 
    res.json({ message: "delete DATA " })
})

app.listen(9000, () => {
    console.log("Application is running on port 9000")
})
