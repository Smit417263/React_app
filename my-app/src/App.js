import logo from './logo.svg';
import './App.css';
import Reply from './Reply.js'
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    var comment = <Reply name={document.getElementById('name').value} body={document.getElementById('body-text').value}/>
    console.log(comment)
    setData(data);
  })


  return (
    <React.Fragment>
    <div className="App">
      <div className='modal' id='modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h1>New Post</h1>
                </div>
                <div className='modal-body'>
                    <input placeholder='Name' id="name"></input>
                    <br/>
                    <input placeholder='Write a new post' id="body-text"></input>
                </div>
                <div className='modal-footer'>
                    <button onClick={() => setData()}>submit</button>
                </div>
            </div>
        </div>
    </div>
    {data}
    </React.Fragment>
  );
}

export default App;
