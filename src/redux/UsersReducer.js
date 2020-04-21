const UNFOLLOW = "Unfollow";
const FOLLOW = "Follow";
const SET_USERS = "Set-Users";

let initialState = {
    users: [
        {
            id: 1,
            followed: true,
            name: "Vasiliy",
            status: "Catch me if you can ...",
            location: {city: "Moscow", country: "Russia"}
        },
        {
            id: 2,
            followed: false,
            name: "Anton",
            status: "Catch me if you can ...",
            location: {city: "Saint-Petersburg", country: "Russia"}
        },
        {
            id: 3,
            followed: true,
            name: "Andrey",
            status: "Catch me if you can ...",
            location: {city: "Kiev", country: "Ukraine"}
        },
    ],
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:

            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        }

        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }

        default :
            return state
    }
};

export const followAC = (userId) => {
    return {type: FOLLOW, userId}
};

export const unfollowAC = (userId) => {
    return {type: UNFOLLOW, userId}
};

export const setUsersAC = (users) => {
    return {type: SET_USERS, users}
};



export default usersReducer;
