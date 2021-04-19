
let Friends = [
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
            return Friends;
        }
    },
    Mutation: {
        createFriend: ({ input }) => {
            let id = "1111"
            Friends.push({ ...input, id })
            return { ...input, id }
        }
    }


}

