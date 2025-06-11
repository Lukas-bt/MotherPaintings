import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 p-4">
      <ul className="flex items-center text-white">
        <li className="absolute">
          <Link to='/' className="font-bold text-xl ml-2">
            Deveau's Paintings
          </Link>
        </li>
        <div className="ml-auto  flex space-x-6 mr-auto">
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
        </div>
      </ul>
    </nav>
  );
}
