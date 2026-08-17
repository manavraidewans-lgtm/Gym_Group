import hero from "../../assets/about-hero.webp";

function Hero({ Tittle1, Button , Des }) {
    return (
        <div
            className="relative h-125 md:h-150 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${hero})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            
            {/* Content */}
            <div className="absolute z-10 h-[45%] w-[75%] bottom-0 left-1/2 -translate-x-1/2 p-2 flex flex-col justify-center items-center gap-10">

               

                <h1 className="text-white text-5xl font-black">
                    {Tittle1}
                </h1>

                <p className="text-[#f2f2f2] text-xl font-black w-[80%]">
                    {Des}
                </p>

                <button className="p-3 px-18 bg-[#b2ff01] rounded-4xl text-[#344f00] font-extrabold transition-colors duration-300 hover:bg-[#89c107] hover:text-[#394b17] cursor-pointer">
                    {Button}
                </button>

            </div>
        </div>
    );
}

export default Hero;