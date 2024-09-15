import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CadastroFornecedor from './components/CadastroFornecedor';
import CadastroContato from './components/CadastroContato';
import CadastroProduto from './components/CadastroProduto';
import CadastroCotacoes from './components/CadastroCotacoes';
import ConsultaCotacoes from './pages/ConsultaCotacoes';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/cadastro-fornecedor" element={<CadastroFornecedor />} />
        <Route path="/cadastro-contato" element={<CadastroContato />} />
        <Route path="/cadastro-produto" element={<CadastroProduto />} />
        <Route path="/cadastro-cotacao" element={<CadastroCotacoes />} />
        <Route path="/consulta-cotacoes" element={<ConsultaCotacoes />} />
        <Route path="/" element={<CadastroFornecedor />} />
      </Routes>
    </Router>
  );
}

export default App;
