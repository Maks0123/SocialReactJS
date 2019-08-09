import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
    _state: {
        profilePage: {
          
            posts: [
                {id: 1, message: 'My first count', likesCount: 12},
                {id: 2, message: 'My second count', likesCount: 10},
                {id: 3, message: 'My third count', likesCount: 11},
                {id: 4, message: 'My fours count', likesCount: 156}
            ],
            newPostText: ' it'    
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Vasia'},
                {id: 2, name: "Kolia"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Olia"},
                {id: 5, name: "Misha"}
            ],
            messages: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: "How are you?"},
                {id: 3, message: "Ok"},
                {id: 4, message: "So"},
                {id: 5, message: "And"}
            ],

            newMessageBody: ""    
        },
        sidebar: {}
    
    },
    getState(){
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');

    },
    rerenderEntireTree() { 
        console.log('state changed'); 
   },
    subscribe(observer) {
        this._callSubscriber = observer;  
    },
    
    
    dispatch(action) { // { type: 'ADD-POST' }

       this._state.profilePage = profileReducer(this._state.profilePage, action);
       this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      // this._state.sidebar = sidebarReducer(this._state.sidebar, action);

       this._callSubscriber(this._state);
    
    }
    
}


 



export default store;
window.store = store;  

