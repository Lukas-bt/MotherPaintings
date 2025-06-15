
import '../App.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import PaintingList from '../components/PaintingList';

function Collection() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
      <PaintingList />
      </main>
      <Footer/>
      
    </div>


  );
}

export default Collection;
