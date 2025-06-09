import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex items-center text-white">
        <li>
          <Link to='/' className="font-bold text-xl ml-2">
            Deveau's Paintings
          </Link>
        </li>
        <div className="ml-auto flex space-x-6 mr-2">
          <li>
            <Link to='/'>Accueil</Link>
          </li>
          <li>
            <Link to='/Collection'>Collection</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
