import React from 'react';
import App from './components/App.jsx';
import 'array.prototype.findindex';

(function() {
  const app = document.createElement('div');

  document.body.appendChild(app);

  React.render(<App />, app);
})();