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

    let dialogsData = [
        {id: 1, name: 'Vasia'},
        {id: 2, name: "Kolia"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Olia"},
        {id: 5, name: "Misha"}
    ]

    
    let messagesData = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Ok"},
        {id: 4, message: "So"},
        {id: 5, message: "And"}
    ]

    return ( 
           <div className={s.dialogs}>
              <div className={s.dialogsItems}>
                    <DialogItem  name={dialogsData[0].name} id={dialogsData[0].id} />
                    <DialogItem  name={dialogsData[1].name} id={dialogsData[1].id} />
        
                 
                  
              </div>
             <div className={s.messages}>
                   <Message message={messagesData[0].message} />
                   <Message message={messagesData[1].message} />
                   <Message message={messagesData[2].message} />
                   <Message message={messagesData[3].message} />
              </div>     

           </div> 

    );
}

export default Dialogs;