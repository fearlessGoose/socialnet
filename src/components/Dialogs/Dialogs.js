import React from 'react';
import s from './Dialogs.module.css'

import { NavLink } from "react-router-dom";
import { tsPropertySignature } from '@babel/types';
const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {
    let newMessageElement = React.createRef();
    let addMessage = () => {
    let text=newMessageElement.current.value;
    props.addMessage(text)
    
    }
    let onMessageChange =()=>{
        let text=newMessageElement.current.value;
        props.appdateNewMessageText(text)
        
    }
    // let addMessage= ()=>{
        
    //   let textMessage=newMessageElement.current.value;
    //   props.addMessage(textMessage);
    // }


    
    let dialogsElements =  props.mmm.dialogs.map( d => <DialogItem name={d.name} id={d.id} />  );
    let messagesElements = props.mmm.messages.map( m => <Message message={m.message}/> );

    return (
        <div>
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
            
        </div>
        <textarea onChange={onMessageChange} ref={newMessageElement} className={s.textareaMessage} value={props.mmm.newMessageText}/>
        <button onClick={addMessage}>Send</button>
        </div>
    )
}

export default Dialogs;
