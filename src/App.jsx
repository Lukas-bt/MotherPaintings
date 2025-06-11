import './App.css';
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
