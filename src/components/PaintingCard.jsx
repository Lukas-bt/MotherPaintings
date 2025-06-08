export default function PaintingCard({ infos }) {

    return (
        <div className="p-7">
            <div className="w-full h-64 overflow-hidden mt-auto mb-auto">
                <img
                    className="w-full h-full object-contain"
                    src={"./images/" + infos.img}
                    alt={infos.name}
                />
            </div>
            <h1 className="text-2xl text-center mt-3">
                {infos.name}
            </h1>
            <h2 className="text-center text-gray-700 italic">
                {infos.year}
            </h2>
        </div>

    )

}