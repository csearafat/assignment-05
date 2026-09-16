import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import TechCard from './TechCard';

function App() {
  const [techs, setTechs] = useState([]);
  const [selectedTechs, setSelectedTechs] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data) => setTechs(data));
  }, []);

  const handleSelect = (tech) => {
    const isExist = selectedTechs.find((item) => item.id === tech.id);
    if (!isExist) {
      setSelectedTechs([...selectedTechs, tech]);
    }
  };

  const filteredTechs = techs.filter((item) => {
    const matchesCategory = category === 'All' || item.category === category;
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Navbar selectedCount={selectedTechs.length} />

      <div className="p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Dev Stack Builder</h1>
        
        {/* Search Input */}
        <div className="max-w-4xl mx-auto mb-6">
          <input
            type="text"
            placeholder="Search technologies..."
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Tech Cards Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTechs.map((tech) => (
            <TechCard key={tech.id} tech={tech} handleSelect={handleSelect} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;