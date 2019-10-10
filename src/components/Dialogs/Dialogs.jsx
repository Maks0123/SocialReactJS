import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {updateNewMessageBodyCreator, sendMessageCreator} from "../../redux/dialogs-reducer";
import {Redirect} from "react-router-dom";
import { Field, reduxForm } from 'redux-form';
import {required, maxLengthCreator} from '../../utils/validators/validators';
import {Textarea} from '../common/FormsControls/FormsControls';


const maxlength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}> 
             <div>   
                 <Field 
                 component={Textarea} 
                 validate={[ required,  maxlength100]}
                 name="newMessageBody" 
                 placeholder="Enter your message" />
             </div>
      <div> <button> Send </button> </div>
     </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);


const Dialogs = (props) => {
       
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id } />);
  let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id} />);
  let newMessageBody =  state.newMessageBody;
    
    //if (!props.isAuth) return <Redirect to={"/login"} />;


let AddNewMessage = (values) => {
  props.sendMessage(values.newMessageBody);
}

return ( 
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
              
              { dialogsElements }
   
         </div>
        <div className={s.messages}>
           <div>  { messagesElements } </div>
         </div>     
         <AddMessageFormRedux onSubmit={AddNewMessage} />
      </div> 

)
}

export default Dialogs;