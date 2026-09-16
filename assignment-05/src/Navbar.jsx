import React from 'react';
import { FaBoxes } from 'react-icons/fa';

const Navbar = ({ selectedCount }) => {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center gap-2 text-xl font-bold text-blue-600">
        <FaBoxes className="text-2xl" />
        <span>DevStack</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="bg-blue-100 text-blue-800 font-semibold px-4 py-1 rounded-full text-sm">
          Selected Stack: {selectedCount}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;