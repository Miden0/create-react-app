import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const Form = () => {
  const [titulo, setTitulo] = useState('');
  const [show, setShow] = useState(false);
  const tituloRef = useRef();

  useEffect(() => {
    if (show) {
      tituloRef.current.focus();
    }
  });

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {(show && 'hide') || 'show'}
      </button>
      {show && (
        <form>
          <label htmlFor="title"> Titulo </label>
          <input
            ref={tituloRef}
            value={titulo}
            type="text"
            id="title"
            onChange={(ev) => setTitulo(ev.target.value)}
          />
        </form>
      )}
    </div>
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
