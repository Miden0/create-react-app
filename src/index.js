import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const Schedule = () => {
  const turns = [9, 10, 11, 18, 19];

  const createRows = () => {
    return turns.map((val) => {
      return (
        <tr>
          <td>{val}hs</td>

          <td class="turn"> </td>
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
