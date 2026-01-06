import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Philosophy from './components/Philosophy';
import Footer from './components/Footer';

function App() {
    return (
        <div className="app">
            <Header />
            <main>
                <Hero />
                <Services />
                <Philosophy />
            </main>
            <Footer />
        </div>
    );
}

export default App;
