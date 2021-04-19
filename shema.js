import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

const typeDefs = `
    type Friend {
        id: ID!
        firstName: String
        lastName: String
        gender: Gender
        email: String
    }

    enum Gender {
        MALE
        FEMALE
    }

    input FriendInput {
        firstName: String
        lastName: String
        gender: Gender
        email: String
    }

    type Query{
        getFriends: [Friend]
        hello: String
    }

    type Mutation{
        createFriend(input:FriendInput): Friend
    }
`

const schema = makeExecutableSchema({ typeDefs, resolvers })

export { schema };
