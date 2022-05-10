import React, { useState, useEffect } from 'react';
import Reply from './Reply.js'
import './Modal.css'

const Modal = props => {
    if(!props.show){
        return null;
    }
    
    return (
        <div className='modal'>
            <div className='modal-content'>
                <p hidden id='indent'>40</p>
                <div className='modal-header'>
                    <h1>New Reply</h1>
                </div>
                <div className='modal-body'>
                    <input placeholder='Name' id="mname"></input>
                    <br/>
                    <input placeholder='Write a new post' id="mbody-text"></input>
                </div>
                <div className='modal-footer'>
                    <button onClick={()=>{
                        props.onClose();
                    }}>Cancel</button>
                    <button onClick={() => {
                        if(document.getElementById("mname").value == ""){
                            alert("Add Name");
                            return
                          }
                        if(document.getElementById("mbody-text").value == ""){
                        alert("Add Reply Text");
                        return
                        }
                        if(!props.reply){
                            props.onSubmit();
                            props.onClose();
                        } else{
                            var tmpIdnt = document.getElementById('indent').innerText * 1;
                            document.getElementById('indent').innerText = tmpIdnt + 40;
                            var newReply = <Reply/>
                            props.onSubmit(newReply);
                            props.onClose();
                        }
                    }}>Reply</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;