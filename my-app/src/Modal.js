import React, { useState, useEffect } from 'react';

const Modal = props => {
    if(!props.show){
        return null;
    }

    return (
        <div className='modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h1>New Reply</h1>
                </div>
                <div className='modal-body'>
                    <input placeholder='Name' id="mname"></input>
                    <br/>
                    <input placeholder='Write a new post' id="mbody-text"></input>
                </div>
                <div className='modal-footer'>
                    <button onClick={() => {
                        props.onClose();
                        props.onSubmit();
                    }}>reply</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;