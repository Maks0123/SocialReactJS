import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {updateNewMessageBodyCreator, sendMessageCreator} from "../../redux/dialogs-reducer";
import {Redirect} from "react-router-dom";




const Dialogs = (props) => {
       
       let state = props.dialogsPage;
  
       let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id } />);
       let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id} />);
       let newMessageBody =  state.newMessageBody;

       let onSendMessageClick = () => {
         props.sendMessage();
       }

         if (!props.isAuth) return <Redirect to={"/login"} />;

       let onNewMessageChange = (e) => {
         let body = e.target.value;
         props.updateNewMessageBody(body);
    }
  
    return ( 
           <div className={s.dialogs}>
              <div className={s.dialogsItems}>
                   
                   { dialogsElements }
        
                 
                  
              </div>
             <div className={s.messages}>
                 
                   <div>  { messagesElements } </div>
                   <di>  
                    <div>   <textarea 
                        placeholder='Enter your message'
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                     > </textarea>      </div>
                    <div>   <button onClick={onSendMessageClick}>  Send </button>    </div>
                  
                   </di>
              </div>     

           </div> 

    );
}

export default Dialogs;