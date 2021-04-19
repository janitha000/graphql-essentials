import { Friends } from './models/Friend'
let friends = [
    {
        id: "2121212",
        firstName: "Janitha",
        lastName: "Tennakoon",
        gender: "MALE",
        email: "janitha@email.com"
    }
]

export const resolvers = {
    Query: {
        hello: () => "THis is from graphql",
        getFriends: () => {
            return friends;
        },
        getFriendsDB: () => {
            return Friends.findAll();
        }
    },
    Mutation: {
        createFriend: (_, { input }) => {
            let id = "1111"
            friends.push({ ...input, id })
            return { ...input, id }
        }
    }


}

