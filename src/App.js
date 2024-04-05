import React from 'react';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import { Header } from './blocks/header/Header';
import { Footer } from './blocks/footer/Footer';
import { About } from './pages/about/About';
import { Blog } from './pages/blog/Blog';

export const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Blog />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};
