import React from 'react';
import { useState } from 'react';
import ButtonCadastro from '../ButtonCadastro/ButtonCadastro';
import './Formulario.css'

import { calcularProximoParto } from '../Utils/utils';

import { toast } from 'react-toastify';

// toast.success('Operação realizada com sucesso')
// <ToastContainer />



const Formulario = () => {
  // const [bovinos, setBovinos] = useState([]);
  const [novoBovino, setNovoBovino] = useState({
    brinco: '',
    nome: '',
    situacao: '',
    sexo: '',
    brinco_mae: '',
    brinco_pai: '',
    raca: '',
    data_nascimento: '',
    data_prenhes: '',
    data_ultimo_parto: ''
  })
  const url = "http://127.0.0.1:3000/bovinos"


  const cadastrar = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoBovino)
      });
      const data = await response.json();
      if ('success' in data) {
        toast.success('Novo bovino Cadastrado')
        console.log('Novo bovino cadastrado:', data)
        resetForm();
        return;
      }
      toast.error('Cadastro não concluído')
      console.log('Cadastro não concluido:')


    } catch (error) {
      toast.error('Cadastro não concluído')
      console.log('Cadastro não concluido:', error)
    }
  };

  const resetForm = () => {
    setNovoBovino({
      brinco: '',
      nome: '',
      situacao: '',
      sexo: '',
      brinco_mae: '',
      brinco_pai: '',
      raca: '',
      data_nascimento: '',
      data_prenhes: '',
      data_ultimo_parto: ''
    })
  };

  return (

    <div className='conteudo'>
      <h2 className='texto_cadastro'>Cadastro de Bovino</h2>
      <form onSubmit={cadastrar} className='formulario'>
        <label>
          Brinco:
          <input className="entrada" maxLength={8} required type="text" value={novoBovino.brinco} onChange={(e) => setNovoBovino({ ...novoBovino, brinco: e.target.value })} />
        </label>
        <label>
          Nome:
          <input className="entrada" maxLength={20} required type="text" value={novoBovino.nome} onChange={(e) => setNovoBovino({ ...novoBovino, nome: e.target.value })} />
        </label>
        <label>
          Situação:
          <select className="entrada" maxLength={15} required name="situacao" id="situacao" value={novoBovino.situacao} onChange={(e) => setNovoBovino({ ...novoBovino, situacao: e.target.value })}>
            <option value=""></option>
            <option value="Em Lactação">Em Lactação</option>
            <option value="Seca">Seca</option>
            <option value="Vendido">Vendido</option>
            <option value="Morto">Morto</option>
          </select>
        </label>
        <label>Sexo:
          <select className="entrada" name="sexo" id="sexo" value={novoBovino.sexo} onChange={(e) => setNovoBovino({ ...novoBovino, sexo: e.target.value })}>
            <option value=""></option>
            <option value="M">M</option>
            <option value="F">F</option>
          </select>
        </label>
        <label>Brinco mae:
          <input className="entrada" maxLength={8} type="text" name="brinco_mae" placeholder="Brinco Mae" value={novoBovino.brinco_mae} onChange={(e) => setNovoBovino({ ...novoBovino, brinco_mae: e.target.value })} />
        </label>
        <label>Brinco pai:
          <input className="entrada" maxLength={8} type="text" name="brinco_pai" placeholder="Brinco Pai" value={novoBovino.brinco_pai} onChange={(e) => setNovoBovino({ ...novoBovino, brinco_pai: e.target.value })} />
        </label>
        <label>Raça:
          <select className="entrada" maxLength={15} required name="raca" id="raca" value={novoBovino.raca} onChange={(e) => setNovoBovino({ ...novoBovino, raca: e.target.value })}>
            <option value=""></option>
            <option value="Girolando">Girolando</option>
            <option value="Holandês">Holandês</option>
            <option value="Gir">Gir</option>
            <option value="Jersey">Jersey</option>
          </select>
        </label>
        <label >Data de Nascimento:
          <input className="entrada" required type="date" value={novoBovino.data_nascimento} onChange={(e) => setNovoBovino({ ...novoBovino, data_nascimento: e.target.value })} />
        </label>
        {novoBovino.sexo === "F" &&
          <>
            <label >Data da Prenhes:
              <input className="entrada" lang='pt-BR' type="date" value={novoBovino.data_prenhes} onChange={(e) => setNovoBovino({ ...novoBovino, data_prenhes: e.target.value })} />
            </label>
            <label>Data do Próximo Parto:
              <input className='entrada' readOnly type='text' value={calcularProximoParto(novoBovino.data_prenhes)} />
            </label>
            <label>Data do Último Parto:
              <input className="entrada" type="date" value={novoBovino.data_ultimo_parto} onChange={(e) => setNovoBovino({ ...novoBovino, data_ultimo_parto: e.target.value })} />
            </label>
          </>
        }
        <ButtonCadastro ></ButtonCadastro>

      </form>
    </div>


  )


};



export default Formulario;

