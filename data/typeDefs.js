module.exports = `
    type TodoItem {
        id: ID,
        title: String,
        description: String,
        isFinished: Boolean
    }
    
    type Query {
        getAll: [TodoItem],
        getById(id: ID): TodoItem,
        getByIsFinished(isFinished: Boolean): [TodoItem],
    }
    
    type Mutation {
        create(title: String, description: String): Boolean,
        updateTitle(id: ID, title: String): Boolean,
        finish(id: ID): Boolean,
        reopen(id: ID): Boolean,
        finishAll: Boolean,
        reopenAll: Boolean
    }
    
    schema {
        query: Query,
        mutation: Mutation
    }
`;