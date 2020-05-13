import React from 'react';
import profileReducer, {addPostsActionCreator, deletePostAC} from "./ProfileReducer";

let state = {
    Posts: [
        {id: 0, liked: false, messages: "Hi, everyone! I use SberX", likecount: 30},
        {id: 1, liked: false, messages: "Hi, that's my first post", likecount: 24},
    ],
};


it('new post should be added', () => {

    let action = addPostsActionCreator('React');
    let newState = profileReducer(state,action);
    expect (newState.Posts.length).toBe(3);
});



it('new message should be added', () => {

    let action = addPostsActionCreator('React');

    let newState = profileReducer(state,action);
    expect (newState.Posts[2].messages).toBe('React')
});

it('after deleting length of Posts should be decrement', () => {

    let action = deletePostAC(1);

    let newState = profileReducer(state,action);
    expect (newState.Posts.length).toBe(1)
});

it('after deleting length of Posts should be decrement if id is correct', () => {

    let action = deletePostAC(10000);

    let newState = profileReducer(state,action);
    expect (newState.Posts.length).toBe(2)
});



