import React, { useState, useEffect } from 'react'
import Modal from './Modal.js'

function Reply(){
    const [name, setName] = useState(document.getElementById('mname').value);
    const [body, setBody] = useState(document.getElementById('mbody-text').value)
    const [show, setShow] = useState(false)
    const [replies, setReplies] = useState([])
    console.log(name, body);
    return (
        <React.Fragment>
            <p>{name}</p>
            <p>{body}</p>
            <button onClick={() => setShow(true)}>Reply</button>
            <Modal onClose={() => setShow(false)} onSubmit={() => {
                var name = document.getElementById('mname');

            }}show={show}/>
        </React.Fragment>
    )
}

export default Comment;