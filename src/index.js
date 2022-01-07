import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Form = () => {
  const [titulo, setTitulo] = useState('');

  return (
    <form>
      <label htmlFor="title"> Titulo </label>
      <input
        value={titulo}
        type="text"
        id="title"
        onChange={(ev) => setTitulo(ev.target.value)}
      />
    </form>
  );
};

const App = () => {
  return (
    <div>
      <Form />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
