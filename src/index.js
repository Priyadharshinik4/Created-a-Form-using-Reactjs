import React from 'react';
import ReactDOM from 'react-dom';
import Field from './components/Field.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function Main(){
  return(
    <div>
      <Field />
    </div>
  )
}

ReactDOM.render(<Main />,document.getElementById('root'));
