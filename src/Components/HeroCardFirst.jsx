function HeroCardFirst({ Tittle, bgImage }) {
    return (
        <div
            className="
                w-full sm:w-[80%] md:w-[45%] lg:w-[30%] xl:w-[20%]
                h-55 sm:h-60 md:h-65 lg:h-70
                bg-cover bg-center bg-no-repeat
                rounded-3xl
                flex justify-center items-center
                text-center
                px-4
                transition-all duration-500
                hover:-translate-y-3
                hover:shadow-xl
                hover:shadow-[#0d0066]
                cursor-pointer
            "
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* Overlay */}
            <div className="absolute"></div>

            <h1 className="text-white font-black text-2xl sm:text-3xl md:text-4xl">
                {Tittle}
            </h1>
        </div>
    );
}

export default HeroCardFirst;