import React from 'react';
import './App.css';
import Cabecalho from './components/template/Cabecalho/Cabecalho';
import Api from './Api';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
import Rodape from './components/template/Rodape/Rodape';


const App = ()  =>
  <React.Fragment>
    <Cabecalho />
    <Api />
    <ToastContainer />

    <Rodape/>
  </React.Fragment>

export default App;
