module.exports = `
    type User {
        id: ID!,
        name: String!,
        friends: [User],
        hobbies: [Hobby]
    }
    
    type Hobby {
        id: ID!,
        name: String!
    }
    
    type Query {
        users: [User],
        user(id: Int): User,
        hobbies: [Hobby],
        hobby(id: Int): Hobby
    }
    
    schema {
        query: Query
    }
`;