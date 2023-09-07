import React, { useState } from "react";
import './BuscaBovino.css'
import ButtonBusca from "../ButtonBusca/ButtonBusca";
import dayjs from "dayjs";
import { calcularProximoParto } from "../Utils/utils";


const BuscaBovino = () => {
  const [buscaTermo, setBuscaTermo] = useState('');
  const [bovinosFiltrados, setBovinosFiltrados] = useState([]);
  const [buscou, setBuscou] = useState(false);

  const buscarBovino = async () => {
    resetCampo()
    setBuscou(true);
    const termo = buscaTermo.toLowerCase().trim();
    if (termo) {
      const url = `http://127.0.0.1:3000/bovinos/${termo}`;
      console.log('URL de busca:', url);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Erro ao buscar bovino');
        }
        const data = await response.json();
        console.log('Dados recebidos da API:', data);
        if (data) {
          setBovinosFiltrados(data);
        }
      } catch (error) {
        console.error('Erro na busca:', error);
      }
    }
  };

  const resetCampo = () => {
    setBuscaTermo('')
  };

  return (
    <div>
      <span className="titulo-busca">Buscar Bovino</span>
      <form>
        <label className="titulo-entrada">Digite Nome ou Brinco:
          <input className="entrada_campo" type="text" value={buscaTermo} maxLength={20} placeholder="Nome ou Brinco" onChange={(e) => setBuscaTermo(e.target.value)} />
        </label>
        <ButtonBusca onClick={buscarBovino} />
      </form>

      <h3 className="titulo-busca" >Resultado da Busca</h3>
      {buscou && bovinosFiltrados.length === 0 && (
        <p className="paragrafo" >Nenhum bovino encontrado.</p>
      )}
      {buscou && bovinosFiltrados.length >= 0 && (
        <table className='conteudo_tabela'>
          <thead>
            <tr className='tabela_linha'>
              <th className='tabela_cabecalho'>Brinco</th>
              <th className='tabela_cabecalho'>Nome</th>
              <th className='tabela_cabecalho'>Situação</th>
              <th className='tabela_cabecalho'>Sexo</th>
              <th className='tabela_cabecalho'>Brinco da Mae</th>
              <th className='tabela_cabecalho'>Brinco do Pai</th>
              <th className='tabela_cabecalho'>Raça</th>
              <th className='tabela_cabecalho'>Data de Nascimento</th>
              <th className='tabela_cabecalho'>Data da Prenhes</th>
              <th className='tabela_cabecalho'>Data do Próximo Parto</th>
              <th className='tabela_cabecalho'>Data do Último Parto</th>
            </tr>
          </thead>
          <tbody>
            {bovinosFiltrados.map((item) => (
              <tr key={item.id} className='tabela_linha'>
                <td className='tabela_celula'>{item.brinco}</td>
                <td className='tabela_celula'>{item.nome}</td>
                <td className='tabela_celula'>{item.situacao}</td>
                <td className='tabela_celula'>{item.sexo}</td>
                <td className='tabela_celula'>{item.brinco_mae}</td>
                <td className='tabela_celula'>{item.brinco_pai}</td>
                <td className='tabela_celula'>{item.raca}</td>
                <td className='tabela_celula'>{dayjs(item.data_nascimento).format('DD/MM/YYYY')}</td>
                <td className='tabela_celula'>{item.data_prenhes ? dayjs(item.data_prenhes).format('DD/MM/YYYY') : ''}</td>
                <td className='tabela_celula'>{calcularProximoParto(item.data_prenhes)}</td>
                <td className='tabela_celula'>{item.data_ultimo_parto ? dayjs(item.data_ultimo_parto).format('DD/MM/YYYY') : ''}</td>
              </tr>
            ))
            }
          </tbody>
        </table>
      )}
    </div>
  )
}


export default BuscaBovino;