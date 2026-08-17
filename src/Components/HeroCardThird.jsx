function HeroCardThird({ Image, Tittle, Description, Button }) {
    return (
        <div className="w-full sm:w-[90%] md:w-[75%] lg:w-[48%] min-h-105 sm:min-h-115 bg-[#c2cdeb] rounded-3xl flex flex-col items-center justify-center overflow-hidden">

            <img
                src={Image}
                alt={Tittle}
                className="h-52 sm:h-60 md:h-64 lg:h-65 w-full object-cover"
            />

            <div className="w-full flex-1 flex flex-col justify-start items-start gap-3 p-5 sm:p-6">

                <h2 className="text-[#0d0066] font-black text-lg sm:text-xl md:text-2xl">
                    {Tittle}
                </h2>

                <p className="text-[#5f569a] text-sm sm:text-base leading-6">
                    {Description}
                </p>

                <button
                    className="mt-auto p-2 px-5 sm:px-6 bg-white border border-[#0d0066] rounded-full hover:bg-[#859ddd] hover:text-white duration-250 cursor-pointer text-sm sm:text-base"
                >
                    {Button}
                </button>

            </div>
        </div>
    );
}

export default HeroCardThird;