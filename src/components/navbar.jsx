import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Optionnel pour icônes propres

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 px-4 py-3 text-white">
      <div className="flex items-center justify-between">
        <Link to="/" className="font-bold text-xl">
          Deveau's Paintings
        </Link>
        <button
          className="sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <ul className="hidden sm:flex space-x-6">
          <li className="relative group">
            <Link to="/" className="inline-block font-bold">
              Accueil
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="relative group">
            <Link to="/Collection" className="inline-block font-bold">
              Collection
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="relative group">
            <Link to="/" className="inline-block font-bold">
              Contact
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>
      </div>
      {isOpen && (
        <ul className="sm:hidden mt-4 flex flex-col space-y-3">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)} className="block font-bold">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/Collection" onClick={() => setIsOpen(false)} className="block font-bold">
              Collection
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
