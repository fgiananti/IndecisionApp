// ES6 import syntaxs
import React from 'react';
import ReactDOM from 'react-dom';
import {Header, Action, Options, AddOption} from './components/app';


const jsx = (
  <div>
    <h1>Title</h1>
    <Header />
    <Action />
    <Options />
    <AddOption />
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'));
