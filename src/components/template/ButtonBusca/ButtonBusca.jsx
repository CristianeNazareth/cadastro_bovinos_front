import React from "react"
import './ButtonBusca.css'
import PropTypes from 'prop-types'

const ButtonBusca = (props) => {
  const { onClick } = props;
  return (
    <button className="busca_campo" type="button" onClick={onClick}>Buscar</button>
  )
};

ButtonBusca.propTypes = {
  onClick: PropTypes.func
}


export default ButtonBusca;