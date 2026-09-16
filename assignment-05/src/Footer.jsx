import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12 py-6 text-center text-gray-600 text-sm">
      <p>© {new Date().getFullYear()} DevStack Builder. All rights reserved.</p>
    </footer>
  );
};

export default Footer;