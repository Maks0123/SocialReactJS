
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};
const dialogsReducer = (state = initialState, action) => {

    switch ( action.type){
        case  UPDATE_NEW_MESSAGE_BODY:
           state.newMessageBody = action.body;
           return state;

    case SEND_MESSAGE:
          let body = state.newMessageBody;
          state.newMessageBody = ' ';
          state.messages.push({ id: 6, message: body });
          return state;
    default:
        return state;
   }
}

export const sendMessageCreator = (body) => ({ type: SEND_MESSAGE  })

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body   
})


export default dialogsReducer;