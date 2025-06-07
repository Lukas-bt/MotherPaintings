export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex items-center text-white">
        <li>
          <a href="#" className="font-bold text-xl ml-2">
            Deveau's Paintings
          </a>
        </li>
        <div className="ml-auto flex space-x-6 mr-2">
          <li>
            <a href="#">Accueil</a>
          </li>
          <li>
            <a href="#">Collection</a>
          </li>
        </div>
      </ul>
    </nav>
  );
}
