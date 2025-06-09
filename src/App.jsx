import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import PaintingList from './components/PaintingList';
import Accueil from './pages/accueil';
import Collection from './pages/collection';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Accueil/>
  },
  {
    path:'/Collection',
    element: <Collection/>
  }
])

function App() {


  return <RouterProvider router={router}/>
}

export default App;
