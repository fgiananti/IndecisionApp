// ES6 import syntaxs
import React from 'react';
import ReactDOM from 'react-dom';
import {IndecisionApp} from './components/app';
import {CounterApp} from './components/counter';
import {VisibilityApp} from './components/visibility';

ReactDOM.render(
  <div>
    <IndecisionApp />
  </div>
  , document.getElementById('app'));

  // <CounterApp />
  // <VisibilityApp />
