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

    let dialogs = [
        {id: 1, name: 'Vasia'},
        {id: 2, name: "Kolia"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Olia"},
        {id: 5, name: "Misha"}
    ]

    

    let messages = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Ok"},
        {id: 4, message: "So"},
        {id: 5, message: "And"}
    ]

       let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id } />);
       let messagesElements = messages.map( m => <Message message={m.message} />);
  
    return ( 
           <div className={s.dialogs}>
              <div className={s.dialogsItems}>
                   
                   { dialogsElements }
        
                 
                  
              </div>
             <div className={s.messages}>
                   {  messagesElements }
              </div>     

           </div> 

    );
}

export default Dialogs;