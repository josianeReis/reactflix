import React from 'react';
import styled from 'styled-components';
import 'normalize.css'
import 'milligram'

const App: React.FC = () => (
  <div>
    <Header>
      <h1>ReactFlix</h1>
    </Header>
    <main>
      Conteudo
    </main>
    <Footer>
      &copy; 2019
    </Footer>
  </div>
);

const Header = styled.header`
  height: 60px;
  background: #333;
`

const Footer = styled.footer`
  height: 30px;
  background: #333;
`

export default App;
