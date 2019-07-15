
let rerenderEntireTree = () => {
    console.log('State was change');
}

let state = {
    profilePage: {
        dialogs: [
            {id: 1, name: 'Vasia'},
            {id: 2, name: "Kolia"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Olia"},
            {id: 5, name: "Misha"}
        ],
        posts: [
            {id: 1, message: 'My first count', likesCount: 12},
            {id: 2, message: 'My second count', likesCount: 10},
            {id: 3, message: 'My third count', likesCount: 11},
            {id: 4, message: 'My fours count', likesCount: 156}
        ],
        newPostText: ' '    
    },
    messagesPage: {
        messages: [
            {id: 1, message: 'Hi!'},
            {id: 2, message: "How are you?"},
            {id: 3, message: "Ok"},
            {id: 4, message: "So"},
            {id: 5, message: "And"}
        ]
    },
    sidebar: {}

}


window.state = state;  
export let addPost = (postMessage) => {

    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}


export default state;
