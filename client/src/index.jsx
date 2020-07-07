import React from 'react';
import ReactDOM from 'react-dom';
import '.\\style.css'

import {
  Menu,
  Header,
  Footer,
} from '.\\components';


function App() {
  return (
    <section className="app">
      <Header></Header>
      <Menu></Menu>
      <Footer></Footer>
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))