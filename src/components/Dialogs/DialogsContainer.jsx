import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {updateNewMessageBodyCreator, sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from './Dialogs';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from '../../../../../../../Users/Felix/AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';



let mapStateToProps = (state) => {
  return {
      dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
   return {
      sendMessage: () => {
        dispatch(sendMessageCreator()) ;
     },
     updateNewMessageBody: (body) => {
        dispatch(updateNewMessageBodyCreator(body)) ;
     }
   }
}


export default compose(
   connect(mapStateToProps, mapDispatchToProps),
   withAuthRedirect
) (Dialogs);