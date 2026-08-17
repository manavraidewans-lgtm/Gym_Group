import hero from "../assets/hero home.webp";

function Hero({ Tittle, Button }) {
    return (
        <div
            className="relative w-full h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] min-h-130 bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{ backgroundImage: `url(${hero})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="absolute z-10 w-[90%] sm:w-[85%] md:w-[75%] bottom-[8%] left-1/2 -translate-x-1/2 flex flex-col justify-center items-center gap-5 sm:gap-7 md:gap-9 text-center">

                {/* Promo */}
                <h3 className="px-3 py-2 sm:px-4 bg-[#f2f2f2] text-[#08091a] font-extrabold text-sm sm:text-base rounded">
                    Use code: MOVE
                </h3>

                {/* Title */}
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight max-w-4xl">
                    {Tittle}
                </h1>

                {/* Button */}
                <button className="w-full sm:w-auto px-10 sm:px-14 md:px-18 py-3 sm:py-3.5 bg-[#b2ff01] rounded-full text-[#344f00] font-extrabold text-sm sm:text-base transition-colors duration-300 hover:bg-[#89c107] hover:text-[#394b17] cursor-pointer">
                    {Button}
                </button>

            </div>
        </div>
    );
}

export default Hero;