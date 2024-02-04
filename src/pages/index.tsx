import React from 'react';
import Header from '../components/Header';
// import Footer from '../components/Footer'; 

const Home: React.FC = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      {/* Contenido principal de la página */}
      <main>
        {/* ... tu contenido aquí */}
      </main>
      <footer>
        {/* <Footer /> */}
      </footer>
    </div>
  );
};

export default Home;