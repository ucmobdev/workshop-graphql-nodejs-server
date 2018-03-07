const items = {
    1: {
        id: 1,
        title: "Title 1",
        description: "Description 1",
        photoUrl: "",
        isFinished: false
    },
    2: {
        id: 2,
        title: "Title 2",
        description: "Description 2",
        photoUrl: "",
        isFinished: true
    }
};

module.exports = {
    Query: {
        getAll: () => {
            return Object.values(items);
        },
        getById: (parent, params) => {
            return items[params.id];
        },
        getByIsFinished: () => {
            return null;
        }
    },
    Mutation: {
        create: (parent, params) => {
            const allIDs = Object.values(items).map((item) => {
                return item.id;
            });
            
            const newID = Math.max(...allIDs) + 1;
            
            const newItem = {
                id: newID,
                title: params.title,
                description: params.description,
                isFinished: false
            };
            
            items[newID] = newItem;
            return true;
        },
        updateTitle: (parent, params) => {
            const item = items[params.id];
            
            if (!item) {
                return false;
            }
            
            item.title = params.title;
            return true;
        },
        finish: (parent, params) => {
            const item = items[params.id];
            
            if (!item) {
                return false;
            }
            
            item.isFinished = true;
            return true;
        },
        reopen: (parent, params) => {
            const item = items[params.id];
            
            if (!item) {
                return false;
            }
            
            item.isFinished = false;
            return true;
        },
        finishAll: () => {
            for (let i in items) {
                items[i].isFinished = true;
            }
            
            return true;
        },
        reopenAll: () => {
            for (let i in items) {
                items[i].isFinished = false;
            }
            
            return true;
        },
    }
};