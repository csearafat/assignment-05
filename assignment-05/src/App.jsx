import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import TechCard from './TechCard';
import SelectedStack from './SelectedStack';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [techs, setTechs] = useState([]);
  const [selectedTechs, setSelectedTechs] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data) => setTechs(data));
  }, []);

  const handleSelect = (tech) => {
    const isExist = selectedTechs.find((item) => item.id === tech.id);
    if (isExist) {
      toast.warning(`${tech.name} is already in your stack!`);
    } else {
      setSelectedTechs([...selectedTechs, tech]);
      toast.success(`${tech.name} added to your stack!`);
    }
  };

  const handleRemove = (id) => {
    const removedTech = selectedTechs.find((item) => item.id === id);
    const updatedTechs = selectedTechs.filter((item) => item.id !== id);
    setSelectedTechs(updatedTechs);
    if (removedTech) {
      toast.info(`${removedTech.name} removed from your stack.`);
    }
  };

  const filteredTechs = techs.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Navbar selectedCount={selectedTechs.length} />
      <ToastContainer position="top-right" autoClose={2000} />

      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Dev Stack Builder</h1>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search technologies..."
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredTechs.map((tech) => (
              <TechCard key={tech.id} tech={tech} handleSelect={handleSelect} />
            ))}
          </div>
          <div>
            <SelectedStack selectedTechs={selectedTechs} handleRemove={handleRemove} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;