import Paintings from "../data/paintings.json" 
import PaintingCard from "./PaintingCard"

export default function PaintingList(){
    return (
        <div className="grid grid-cols-3 gap-5 ml-4 mt-4 mr-4">
            {Paintings.map(peinture => {
                return(<PaintingCard
                    infos={peinture}
                />)
               
            } )}
        </div>
    )
}