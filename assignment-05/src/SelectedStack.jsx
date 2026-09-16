import React from 'react';
import { FaTrash } from 'react-icons/fa';

const SelectedStack = ({ selectedTechs, handleRemove }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
      <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
        Selected Stack ({selectedTechs.length})
      </h2>
      {selectedTechs.length === 0 ? (
        <p className="text-gray-500 text-sm text-center py-4">No technologies added yet.</p>
      ) : (
        <ul className="space-y-3">
          {selectedTechs.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center p-3 bg-gray-50 rounded-md border border-gray-100"
            >
              <div>
                <h4 className="font-semibold text-gray-800 text-sm">{item.name}</h4>
                <span className="text-xs text-gray-500">{item.category}</span>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="text-red-500 hover:text-red-700 p-1.5 transition-colors"
                title="Remove"
              >
                <FaTrash className="text-sm" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectedStack;