import React, { useState, useEffect } from 'react'
import Modal from './Modal.js'
import Reply from './Reply.js'
import './Modal.css'

function Comment(){
    const [name, setName] = useState(document.getElementById('name').value);
    const [body, setBody] = useState(document.getElementById('body-text').value)
    const [show, setShow] = useState(false)
    const [cnt, setCnt] = useState(0);
    const [replies, setReplies] = useState([])

    return (
        <React.Fragment>
            <div>
                <p style={{color:"blue"}}>{name}</p>
                <p>{body}</p>
                
                <button  onClick={() => setCnt(cnt + 1)}>^</button>
                <br />
                <a>{cnt}</a>
                <br />
                <button onClick={() => setCnt(cnt - 1)}>v</button>
            </div>
            <br/>
            <br/>
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