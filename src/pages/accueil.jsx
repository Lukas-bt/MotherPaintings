import { useState } from "react";
import '../App.css';
import Navbar from '../components/navbar';
import lastPaintings from '../data/last_paintings.json';
import PaintingCard from '../components/PaintingCard';


function Accueil() {

    const [activeIndex, setIndex] = useState(2);

    return (
        <div>
            <Navbar />
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
                <h1 className='text-3xl font-bold text-center '>Dernières réalisations</h1>
                <div class="container ml-auto mr-auto mt-10">
                    <ul class="grid grid-cols-5">
                        {
                            lastPaintings.map((painting, index) => {
                                if (index < 5) {
                                    if (index === activeIndex) {
                                        return (
                                            <li key={index} className="gap-10 scale-125">
                                                <PaintingCard infos={painting} />
                                            </li>
                                        )
                                    }
                                    else if(index === activeIndex+1 || index === activeIndex-1){
                                        return (
                                            <li key={index} className="gap-8 scale-110">
                                                <PaintingCard infos={painting} />
                                            </li>
                                        )
                                    }
                                    return (
                                        <li key={index} className="gap-5">
                                            <PaintingCard infos={painting} />
                                        </li>
                                    );
                                } else {
                                    return null;
                                }
                            })
                        }
                    </ul>
                </div>
            </section>

        </div>


    );
}

export default Accueil;
