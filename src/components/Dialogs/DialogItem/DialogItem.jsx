import React from "react";
import s from "../Dialogs.module.css";
import {Route, BrowserRouter, NavLink} from "react-router-dom";


const DialogItem = (props) => {
       let path ="/dialos/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}> 
            <NavLink to={"/dialogs/" + props.id }> {props.name}  </NavLink>
        </div>
    );
}


export default DialogItem;