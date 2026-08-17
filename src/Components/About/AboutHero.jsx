import hero from "../../assets/about-hero.webp";

function Hero({ Tittle1, Button, Des }) {
    return (
        <div
            className="relative w-full h-[65vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh] min-h-120 bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{ backgroundImage: `url(${hero})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Content */}
            <div className="absolute z-10 w-[90%] sm:w-[85%] md:w-[75%] lg:w-[70%] bottom-[8%] left-1/2 -translate-x-1/2 flex flex-col justify-center items-center gap-5 sm:gap-7 md:gap-9 text-center">

                {/* Title */}
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                    {Tittle1}
                </h1>

                {/* Description */}
                <p className="text-[#f2f2f2] text-sm sm:text-base md:text-lg lg:text-xl font-black w-full sm:w-[90%] lg:w-[80%] leading-relaxed">
                    {Des}
                </p>

                {/* Button */}
                <button className="w-full sm:w-auto px-10 sm:px-14 md:px-18 py-3 bg-[#b2ff01] rounded-full text-[#344f00] font-extrabold text-sm sm:text-base transition-colors duration-300 hover:bg-[#89c107] hover:text-[#394b17] cursor-pointer">
                    {Button}
                </button>

            </div>
        </div>
    );
}

export default Hero;