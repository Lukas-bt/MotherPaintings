
import '../App.css';
import Navbar from '../components/navbar';


function Accueil() {
    return (
        <div>
            <Navbar />
            <h1 className='text-center mt-10 anton-regular font-bold text-6xl'>Ma mère, une
                <span className='ml-5 dancing-script text-7xl text-blue-950 underline'>artiste</span>
            </h1>
        </div>


    );
}

export default Accueil;
