export default function PaintingCard({ infos }) {

    return (
        <div className="border-2 rounded p-5 border-black">
            <div className="w-full h-64 overflow-hidden rounded-2xl">
                <img
                    className="w-full h-full object-cover"
                    src={"./images/" + infos.img}
                    alt={infos.name}
                />
            </div>
            <h1 className="text-3xl text-center mt-5">
                {infos.name}
            </h1>
            <h2 className="text-center text-gray-700 italic">
                {infos.year}
            </h2>
        </div>

    )

}