import { useState, useEffect } from 'react';

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
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Dev Stack Builder</h1>
      <div className="max-w-4xl mx-auto flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border rounded w-full"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTechs.map((tech) => (
          <div key={tech.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">{tech.name}</h3>
            <p className="text-sm text-gray-600">{tech.description}</p>
            <button
              onClick={() => handleSelect(tech)}
              className="mt-2 bg-blue-500 text-white px-3 py-1 rounded text-sm"
            >
              Add to Stack
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;