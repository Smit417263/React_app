import logo from './logo.svg';
import './App.css';
import Comment from './Comment.js'
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   />
  //   console.log(comment)
  //   setData(data);
  // })

 

  return (
    <React.Fragment>
    <div className="App">
      <div className='modal' id='modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h1>New Post</h1>
                </div>
                <div className='modal-body'>
                    <input placeholder='Name' id="name" size="50"></input>
                    <br/>
                    <input placeholder='Write a new post' id="body-text" size="50" width="50px"></input>
                </div>
                <div className='modal-footer'>
                    <button onClick={() => {
                      var comment = <Comment />
                      setData([...data, comment]);
                    }}>submit</button>
                </div>
            </div>
        </div>
    </div>
    {data}
    </React.Fragment>
  );

 
}



export default App;


