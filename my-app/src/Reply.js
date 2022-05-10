import React, { useState, useEffect } from 'react'
import Modal from './Modal.js'
import './Modal.css'

function Reply(){
    const [name, setName] = useState(document.getElementById('mname'));
    const [body, setBody] = useState(document.getElementById('mbody-text'))
    const [show, setShow] = useState(false)
    const [cnt, setCnt] = useState(0);
    const [replies, setReplies] = useState([])
    const [indent, setIndent] = useState(document.getElementById('indent'));

    return (
        <React.Fragment>
            <p>{console.log("INDENT", indent.innerText)}</p>
            <p style={{color:"blue", marginLeft: indent.innerText + 'px'}}>{name.value}</p>
            <p style={{marginLeft: indent.innerText + 'px'}}>{body.value}</p>

            <button style={{marginLeft: indent.innerText + 'px'}} onClick={() => setCnt(cnt + 1)}>^</button>
            <br />
            <p style={{marginLeft: indent.innerText + 'px'}}>{cnt}</p>
            <br />
            <button style={{marginLeft: indent.innerText + 'px'}} onClick={() => setCnt(cnt - 1)}>v</button>
            <br />
            <br />
            <button style={{marginLeft: indent.innerText + 'px'}} onClick={() => setShow(true)}>Reply</button>
            <Modal onClose={() => setShow(false)} onSubmit={(newReply) => {
                setReplies([...replies, newReply])
                var tmpIdnt = document.getElementById('indent').innerText * 1
                document.getElementById('indent').innerText = tmpIdnt + 40;
                setIndent(tmpIdnt+40)
            }} show={show} reply={true}/>
            {replies}
        </React.Fragment>
    )
}

export default Reply;