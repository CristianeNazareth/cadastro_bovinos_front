import React from 'react';
import './App.css';
import Cabecalho from './components/template/Cabecalho/Cabecalho';
import Api from './Api';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';

const App = ()  =>
  <React.Fragment>
    <Cabecalho />
    <Api />
    <ToastContainer />
  </React.Fragment>

export default App;
