import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

function CadastroContato() {
  const [contato, setContato] = useState({ nome: '', telefone: '', email: '' });

  const handleChange = (e) => {
    setContato({ ...contato, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contato);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Cadastro de Contato
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Nome do Contato"
          name="nome"
          value={contato.nome}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Telefone"
          name="telefone"
          value={contato.telefone}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={contato.email}
          onChange={handleChange}
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Cadastrar Contato
        </Button>
      </form>
    </Container>
  );
}

export default CadastroContato;
