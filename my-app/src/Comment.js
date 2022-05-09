import React, { useState, useEffect } from 'react'
import Modal from './Modal.js'
import Reply from './Reply'

function Comment(){
    const [name, setName] = useState(document.getElementById('name').value);
    const [body, setBody] = useState(document.getElementById('body-text').value)
    const [show, setShow] = useState(false)
    const [replies, setReplies] = useState([])

    return (
        <React.Fragment>
            <p>{name}</p>
            <p>{body}</p>
            <button onClick={() => setShow(true)}>Reply</button>
            <Modal onClose={() => setShow(false)} onSubmit={() => {
                var reply = <Reply />;
                setReplies([...replies, reply]);
                console.log("got here")
            }}show={show}/>
            {replies}
        </React.Fragment>
    )
}

export default Comment;