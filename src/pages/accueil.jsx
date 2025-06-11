
import '../App.css';
import Navbar from '../components/navbar';


function Accueil() {
    return (
        <div>
            <Navbar />
            <section className="text-center py-20 bg-gradient-to-b from-white to-blue-100">
                <h1 className='text-center mt-10 anton-regular font-bold text-6xl'>
                    Ma mère, une
                    <span className='ml-5 dancing-script text-7xl text-blue-950 underline relative -top-1'>artiste</span>
                </h1>


                <p className="mt-6 text-gray-600 text-lg max-w-xl mx-auto">
                    Passionnée de peinture, elle transforme ses inspirations en toiles uniques. Découvrez son univers.
                </p>
            </section>
            <section className='mt-5'>
                <h1 className='text-3xl font-bold text-center '>Dernières réalisations</h1>
                <p>ici carrousel un peu comme Twitch avec une peinture en grand et tu peux skip etc</p>
            </section>

        </div>


    );
}

export default Accueil;
