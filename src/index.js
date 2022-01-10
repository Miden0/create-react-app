import React, { useState, useEffect, useRef } from 'react';

import ReactDOM from 'react-dom';
import './style.css';

const Schedule = () => {
  const turns = [
    { hour: 9, lunes: 'hola', martes: '' },
    { hour: 10 },
    { hour: 11 },
    { hour: 18 },
    { hour: 19 },
  ];

  const createRows = () => {
    return turns.map((val) => {
      return (
        <tr>
          <td>{val.hour}hs</td>

          <td class="turn">{val.lunes} </td>
          <td class="turn"> </td>
          <td class="turn"> </td>
          <td class="turn"> </td>
          <td class="turn"> </td>
        </tr>
      );
    });
  };

  return (
    <table id="tb">
      <caption> turnos del consultorio </caption>
      <tr>
        <th></th>
        <th>Lunes</th>
        <th>Martes</th>
        <th>Miercoles</th>
        <th>Jueves</th>
        <th>Viernes</th>
      </tr>

      {createRows()}
    </table>
  );
};

const App = () => {
  return (
    <div>
      <Schedule />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
