import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

function CadastroProduto() {
  const [produto, setProduto] = useState({ nome: '', descricao: '' });

  const handleChange = (e) => {
    setProduto({ ...produto, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(produto);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Cadastro de Produto
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Nome do Produto"
          name="nome"
          value={produto.nome}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Descrição"
          name="descricao"
          value={produto.descricao}
          onChange={handleChange}
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Cadastrar Produto
        </Button>
      </form>
    </Container>
  );
}

export default CadastroProduto;
