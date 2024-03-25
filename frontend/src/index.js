import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

function Index(){
  return(
    <div>
       <h1>Task Manager App</h1>
       <App />
    </div>
  )
 
}
root.render(<Index/>)