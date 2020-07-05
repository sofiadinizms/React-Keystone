import React from 'react';
import ReactDOM from 'react-dom';
import '.\\style.css'

import {
  Example,
  Button,
  Header
} from '.\\components';


function App() {
  return (
    <section className="app">
      <Example />
      <Header></Header>
      <Button></Button>
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))