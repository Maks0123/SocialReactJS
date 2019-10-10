
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

    
};


const dialogsReducer = (state = initialState, action) => {
    
    switch (action.type){        
    case SEND_MESSAGE:
          let body = action.newMessageBody;
          return { ...state,  
          newMessageBody:  ' ',
          messages: [...state.messages, { id: 6, message: body } ] 
        };
    default:
        return state;
   }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody  })



export default dialogsReducer;