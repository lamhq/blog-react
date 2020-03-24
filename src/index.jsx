/**
 * Init application script
 */
import React from 'react';
import ReactDOM from 'react-dom';

import '@elastic/eui/dist/eui_theme_light.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./App.jsx', () => {
    ReactDOM.render(<App />, document.getElementById('root'));
  });
}
