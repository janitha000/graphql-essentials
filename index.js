import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import cors from 'cors'
import { schema } from './shema'

const app = express()

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.get('/', (req, res, next) => {
    res.send("server is running")
})


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(5000, () => {
    console.log("Server is running on port 5000")
})