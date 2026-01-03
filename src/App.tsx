import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const contador = useSelector(state=> state.valor);

  const dispatch = useDispatch();

  return (
    <>
        <div>
            <h2>Contador Redux: {contador}</h2>
            <button onClick={()=> dispatch({ type: 'INCREMENTAR' })}>
                Aumentar(+)
            </button>
            <button onClick={()=> dispatch({ type: 'DECREMENTAR' })} style={{ marginLeft: '10px' }}>
                Disminuir(-)
            </button>
        </div>
    </>
  );
}

export default App
