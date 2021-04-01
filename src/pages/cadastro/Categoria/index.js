import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

export default function CadastroCategoria(){
  return(
    <PageDefault>
      <h1>Cadastro de Categorias</h1>

      <Link to="/">
        Ir para a home
      </Link>
    </PageDefault>
  )
}