import React from "react";
import s from "./Dialogs.module.css";
import {Route, BrowserRouter, NavLink} from "react-router-dom";


const DialogItem = (props) => {
       let path ="/dialos/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}> 
            <NavLink to={"/dialogs/" + props.id }> {props.name}  </NavLink>
        </div>
    );
}


const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>

    );
}

const Dialogs = (props) => {
    return ( 
           <div className={s.dialogs}>
              <div className={s.dialogsItems}>
                    <DialogItem  name="Andriu" id="1"/>
                    <DialogItem  name="Misha" id="2"/>
                    <DialogItem  name="Sasha" id="3"/>
                    <DialogItem  name="Ala" id="4"/>
                    <DialogItem  name="Yulia" id="5"/>
                  
              </div>
             <div className={s.messages}>
                   <Message message="hi"/>
                   <Message message="How are you"/>
                   <Message message="I'm fine"/>
              </div>     

           </div> 

    );
}

export default Dialogs;