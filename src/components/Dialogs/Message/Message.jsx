import React from "react";
import s from "../Dialogs.module.css";
import {Route, BrowserRouter, NavLink} from "react-router-dom";
import DialogItem from '../DialogItem/DialogItem';




const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>

    );
}


export default Message;