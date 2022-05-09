import React, { useState, useEffect } from 'react'
import Modal from './Modal.js'

function Reply(){
    const [name, setName] = useState(document.getElementById('mname'));
    const [body, setBody] = useState(document.getElementById('mbody-text'))
    const [show, setShow] = useState(false)
    const [replies, setReplies] = useState([])
    console.log(name, body);
    return (
        <React.Fragment>
            <p>{name.value}</p>
            <p>{body.value}</p>
            <button onClick={() => setShow(true)}>Reply</button>
            <Modal onClose={() => setShow(false)} onSubmit={(newReply) => {
                setReplies([...replies, newReply])
            }} show={show} reply={true}/>
            {replies}
        </React.Fragment>
    )
}

export default Reply;