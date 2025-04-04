
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 px-4 mt-12 text-center text-sm text-krinix-light">
      <div className="max-w-7xl mx-auto">
        <p>© {currentYear} KrinixCloud. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
