import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Sistema de Compras
          </Typography>
          <Button color="inherit" component={Link} to="/cadastro-fornecedor">
            Fornecedores
          </Button>
          <Button color="inherit" component={Link} to="/cadastro-contato">
            Contatos
          </Button>
          <Button color="inherit" component={Link} to="/cadastro-produto">
            Produtos
          </Button>
          <Button color="inherit" component={Link} to="/cadastro-cotacao">
            Cotações
          </Button>
          <Button color="inherit" component={Link} to="/consulta-cotacoes">
            Consulta
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
