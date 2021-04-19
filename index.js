import express from 'express'

const app = express()

app.get('/', (req, res, next) => {
    res.send("server is running")
})


app.listen(3000, () => {
    console.log("Server is running on port 3000")
})