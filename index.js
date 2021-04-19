import express from 'express'
import { graphqlHTTP } from 'express-graphql'

import { schema } from './shema'

const app = express()

app.get('/', (req, res, next) => {
    res.send("server is running")
})


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})