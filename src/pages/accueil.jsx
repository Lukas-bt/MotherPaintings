
import '../App.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import lastPaintings from '../data/last_paintings.json';
import PaintingCard from '../components/PaintingCard';


function Accueil() {

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <section className="text-center py-20 bg-gradient-to-b from-blue-100 to-white">
                    <h1 className='text-center mt-10 anton-regular font-bold text-6xl'>
                        Ma mère, une
                        <span className='ml-5 dancing-script text-7xl text-blue-950 underline relative -top-1'>artiste</span>
                    </h1>


                    <p className="mt-6 text-gray-600 text-lg max-w-xl mx-auto">
                        Passionnée de peinture, elle transforme ses inspirations en toiles uniques. Découvrez son univers.
                    </p>
                </section>
                <section className='mt-5'>
                    <h1 className='text-3xl font-bold text-center'>Dernières réalisations</h1>
                    <div className="container mx-auto mt-10 px-4 mb-4">
                        <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                            {
                                lastPaintings.map((painting, index) => (
                                    <li key={index} className="transition-transform hover:scale-105">
                                        <PaintingCard infos={painting} />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </section>
            </main>
            <Footer />

        </div>


    );
}

export default Accueil;
