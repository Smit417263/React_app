import React, { useState, useEffect } from 'react'
import Modal from './Modal.js'

function Reply(){
    const [reply, addReply] = useState([]);
    const [show, setShow] = useState(false)
    console.log(this)
    return (
        <React.Fragment>
            <button onClick={() => setShow(true)}>Reply</button>
            <Modal onClose={() => setShow(false)} show={show}/>
        </React.Fragment>
    )
}

export default Reply;