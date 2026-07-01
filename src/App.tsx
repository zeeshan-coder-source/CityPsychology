import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/lib/AuthContext';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            {/* Add more routes here as needed */}
            {/* <Route path="/services" element={<Services />} /> */}
            {/* <Route path="/team" element={<Team />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/faq" element={<FAQ />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
