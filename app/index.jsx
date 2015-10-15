import React from 'react';
import App from './components/App.jsx';
import 'array.prototype.findindex';
import ReactDOM from 'react-dom';

(function() {
  const app = document.createElement('div');

  document.body.appendChild(app);

  ReactDOM.render(<App />, app);
})();