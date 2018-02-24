const users = {
    1: {
        id: 1,
        name: "Jano"
    },
    2: {
        id: 2,
        name: "Roman"
    },
    3: {
        id: 3,
        name: "Servac"
    },
    4: {
        id: 4,
        name: "Boris"
    },
    5: {
        id: 5,
        name: "Edgar"
    },
};

const hobbies = {
    1: {
        id: 1,
        name: "cycling"
    },
    2: {
        id: 2,
        name: "inline hockey"
    }
};

const friendships = {
    1: [2, 3],
    2: [1],
    3: [2],
    4: [1, 2, 3, 5],
    5: [5]
};

const userHobbiesIDs = {
    1: [1],
    2: [1, 2],
    3: [],
    4: [2],
    5: [1, 2]
};

module.exports = {
    User: {
        friends: (user) => {
            const friendsIDs = friendships[user.id];
            const friends = [];
            
            friendsIDs.forEach((friendID) => {
                friends.push(users[friendID]);
            });
            
            return friends;
        },
        hobbies: (user) => {
            const hobbiesIDs = userHobbiesIDs[user.id];
            const userHobbies = [];
            
            hobbiesIDs.forEach((hobbyID) => {
                userHobbies.push(hobbies[hobbyID]);
            });
            
            return userHobbies;
        }
    },
    Query: {
        users: () => {
            return Object.values(users);
        },
        user: (parent, params) => {
            return users[params.id];
        },
        hobbies: () => {
            return Object.values(hobbies);
        },
        hobby: (parent, params) => {
            return hobbies[params.id];
        }
    }
};