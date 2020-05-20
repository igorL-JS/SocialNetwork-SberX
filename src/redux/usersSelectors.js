export const getRequestUsers = (state) => {
    return (state.usersPage.users)
};
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
};
export const getPageSize = (state) => {
    return state.usersPage.pageSize
};

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
};

export const getIsDisplay = (state) => {
    return state.usersPage.isDisplay
};



