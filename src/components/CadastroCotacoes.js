import React, { useState, useEffect } from 'react';
import { Container, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

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
    <Container>
      <Typography variant="h4" gutterBottom>
        Consulta de Cotações
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Produto</TableCell>
            <TableCell>Fornecedor</TableCell>
            <TableCell>Preço</TableCell>
            <TableCell>Data</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cotacoes.map((cotacao, index) => (
            <TableRow key={index}>
              <TableCell>{cotacao.produto}</TableCell>
              <TableCell>{cotacao.fornecedor}</TableCell>
              <TableCell>{cotacao.preco}</TableCell>
              <TableCell>{cotacao.data}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}

export default ConsultaCotacoes;
