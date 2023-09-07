// import React from "react";
import moment from "moment";


export const calcularProximoParto = (data_prenhes) => {
  console.log("data prenhes", data_prenhes)
  if (data_prenhes && data_prenhes.length === 10) {
    const data_prenhes_modificada = moment(data_prenhes, 'YYYY-MM-DD');
    console.log("data prenhes modif", data_prenhes_modificada)
    const formatDataProximoParto = data_prenhes_modificada.clone().add(9, 'months').format('DD/MM/YYYY');
    return formatDataProximoParto;
  } else {
    return "";
  }
};
