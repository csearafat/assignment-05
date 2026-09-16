import React from 'react';

const TechCard = ({ tech, handleSelect }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-shadow">
      <div>
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">{tech.name}</h3>
          <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium">
            {tech.category}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{tech.description}</p>
      </div>
      <div className="flex justify-between items-center pt-3 border-t border-gray-100">
        <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
          {tech.pricing}
        </span>
        <button
          onClick={() => handleSelect(tech)}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors"
        >
          Add to Stack
        </button>
      </div>
    </div>
  );
};

export default TechCard;