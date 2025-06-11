export default function PaintingCard({ infos }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300">
            
            <div className="h-64 w-full overflow-hidden">
                <img
                    className="h-full w-full object-cover transition-transform duration-300"
                    src={"./images/" + infos.img}
                    alt={infos.name}
                />
            </div>
            
            <div className="p-4">

                <h1 className="text-xl font-semibold text-center text-gray-900">{infos.name}</h1>
                <div className="mt-1 text-center text-sm text-gray-500 italic">{infos.year}</div>
            </div>
        </div>
    );
}
