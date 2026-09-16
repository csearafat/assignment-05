import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import TechCard from './TechCard';
import SelectedStack from './SelectedStack';
import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const categories = ['All', 'Frontend', 'Backend', 'Database'];

  const filteredTechs = techs.filter((item) => {
    const matchesCategory = category === 'All' || item.category === category;
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-100 font-sans flex flex-col justify-between">
      <div>
        <Navbar selectedCount={selectedTechs.length} />
        <ToastContainer position="top-right" autoClose={2000} />

        <div className="max-w-7xl mx-auto p-6">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Dev Stack Builder</h1>

          {/* Search & Category Filter Section */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Search technologies..."
              className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="flex gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    category === cat
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
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

      <Footer />
    </div>
  );
}

export default App;