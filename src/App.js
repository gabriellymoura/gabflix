import React from 'react';
import dadosInciais from './data/dados_iniciais.json';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import { FooterBase } from './components/Footer/styles';


function App() {
  return (
    <div style={{background: "#141414"}}>
      <Menu />
      <BannerMain 
        videoTitle={dadosInciais.categorias[0].videos[0].titulo}
        url={dadosInciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-End?"}
      />
      <Carousel 
        ignoreFirstVideo
        category={dadosInciais.categorias[0]}
      />
      <Carousel 
        category={dadosInciais.categorias[1]}
      />
      <Carousel 
        category={dadosInciais.categorias[2]}
      />
      <Carousel 
        category={dadosInciais.categorias[3]}
      />
      <Carousel 
        category={dadosInciais.categorias[4]}
      />
      <Footer>
        <FooterBase />
      </Footer>
    </div>
  );
}

export default App;
