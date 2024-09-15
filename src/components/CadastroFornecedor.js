import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios';

function CadastroFornecedor() {
  const [fornecedor, setFornecedor] = useState({
    nome: '',
    cnpj: '',
    endereco: '',
    cidade: '',
    cep: '',
  });

  const handleChange = (e) => {
    setFornecedor({ ...fornecedor, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fornecedor);
  };

  const handleCepBlur = async () => {
    if (fornecedor.cep.length === 8) {
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${fornecedor.cep}/json/`);
        if (response.data) {
          setFornecedor({
            ...fornecedor,
            endereco: response.data.logradouro,
            cidade: response.data.localidade,
          });
        }
      } catch (error) {
        console.error("Erro ao buscar CEP", error);
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Cadastro de Fornecedor
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Nome do Fornecedor"
          name="nome"
          value={fornecedor.nome}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="CNPJ"
          name="cnpj"
          value={fornecedor.cnpj}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="CEP"
          name="cep"
          value={fornecedor.cep}
          onChange={handleChange}
          onBlur={handleCepBlur} 
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Endereço"
          name="endereco"
          value={fornecedor.endereco}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Cidade"
          name="cidade"
          value={fornecedor.cidade}
          onChange={handleChange}
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Cadastrar Fornecedor
        </Button>
      </form>
    </Container>
  );
}

export default CadastroFornecedor;
