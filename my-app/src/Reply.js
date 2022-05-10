import React, { useState, useEffect } from 'react'
import Modal from './Modal.js'

function Reply(){
    const [name, setName] = useState(document.getElementById('mname'));
    const [body, setBody] = useState(document.getElementById('mbody-text'))
    const [show, setShow] = useState(false)
    const [cnt, setCnt] = useState(0);
    const [replies, setReplies] = useState([])
  
    return (
        <React.Fragment>
            <p style={{color:"blue",marginLeft:"20px"}}>{name.value}</p>
            <p style={{marginLeft:"20px"}}>{body.value}</p>

            <button  style={{marginLeft:"20px"}} onClick={() => setCnt(cnt + 1)}>^</button>
            <br />
            <p style={{marginLeft:"20px"}}>{cnt}</p>
            <br />
            <button  style={{marginLeft:"20px"}} onClick={() => setCnt(cnt - 1)}>v</button>
            <br />
            <br />
            <button  style={{marginLeft:"20px"}} onClick={() => setShow(true)}>Reply</button>
            <Modal onClose={() => setShow(false)} onSubmit={(newReply) => {
                setReplies([...replies, newReply])
            }} show={show} reply={true}/>
            {replies}
        </React.Fragment>
    )
}

export default Reply;