import { useState } from 'react';

function Businessregister() {
  const [error, setError] = useState('');
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-header">
          {error && <p className="error">{error}</p>}
          <h1>Registrar Negocio</h1>
        </div>
        <div className="card-body">
          <form >
            <input
              type="text"
              placeholder="Nombre"
              required
            />
            <input
              type="text"
              placeholder="Dirección"
              required
            />
            <input
              type="text"
              placeholder="Ciudad"
              required
            />
            <input
              type="text"
              placeholder="Estilos"
              required
            />
            <input
              type="file"
              placeholder="Logo"
              required
            />
            <input type="submit" value="Enviar" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Businessregister;
