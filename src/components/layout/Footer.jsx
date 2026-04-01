import React from 'react';
import Container from '../common/Container';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#0b0f1a]">
      <Container className="text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} BrandName. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-6">
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-white">Instagram</a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
