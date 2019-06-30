import React from "react";
import s from "./Dialogs.module.css";


const Dialogs = (props) => {
    return ( 
           <div className={s.dialogs}>
              <div className={s.dialogsItems}>
                  <div className={s.dialog + ' ' + s.active}> Adnriu </div>
                  <div className={s.dialog}> Maks </div>
                  <div className={s.dialog}> Arian </div>
                  <div className={s.dialog}> Adnriu </div>
              </div>
             <div className={s.messages}>
                   <div className={s.dialog}>Hi</div>
                   <div className={s.dialog}>How is ypur it-kamasutra</div>
                   <div className={s.dialog}>Good</div>
              </div>     

           </div> 

    );
}

export default Dialogs;