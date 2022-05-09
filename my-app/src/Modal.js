import React, { useState, useEffect } from 'react';

const Modal = props => {
    if(!props.show){
        return null;
    }

    return (
        <div className='modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h4>head</h4>
                </div>
                <div className='modal-body'>
                    <h4>body</h4>
                </div>
                <div className='modal-footer'>
                    <button onClick={() => props.onClose()}>submit</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;