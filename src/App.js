import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/layout/header';
import Container from './componentes/layout/container';
import Home from './componentes/pages/home';
import Footer from './componentes/layout/footer';
import Jogar from './componentes/pages/jogar';

function App() {
  return (
    <div className='app-container'>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/jogar' element={<Jogar />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;