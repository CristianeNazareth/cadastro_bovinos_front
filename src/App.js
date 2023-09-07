import React from 'react';
import './App.css';
import Cabecalho from './components/template/Cabecalho/Cabecalho';
import Api from './Api';

const App = ()  =>
  <React.Fragment>
    <Cabecalho />
    <Api />
  </React.Fragment>

export default App;
