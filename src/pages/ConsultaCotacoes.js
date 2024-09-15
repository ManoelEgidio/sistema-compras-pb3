import React, { useState, useEffect } from 'react';

function ConsultaCotacoes() {
  const [cotacoes, setCotacoes] = useState([]);

  useEffect(() => {
    const cotacoesFicticias = [
      { produto: 'Cadeira', fornecedor: 'Fornecedor A', preco: 120, data: '2023-08-01' },
      { produto: 'Mesa', fornecedor: 'Fornecedor B', preco: 300, data: '2023-08-02' },
    ];
    setCotacoes(cotacoesFicticias);
  }, []);

  return (
    <div>
      <h1>Consulta de Cotações</h1>
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Fornecedor</th>
            <th>Preço</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {cotacoes.map((cotacao, index) => (
            <tr key={index}>
              <td>{cotacao.produto}</td>
              <td>{cotacao.fornecedor}</td>
              <td>{cotacao.preco}</td>
              <td>{cotacao.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ConsultaCotacoes;
