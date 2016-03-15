import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import App from './components/App';
import About from './components/About';
import Description from './components/Description';
import Info from './components/Info';
import Preview from './components/Preview';
import Time from './components/Time';


window.React = React;

render(
  (<Router>
    <Route path="/" component={App}>
      <Route path="/about" component={About}/>
      <Route path="/descr" component={Description}/>
      <Route path="/info" component={Info}/>
    </Route>
  </Router>), document.getElementById('content')
);