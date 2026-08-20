function HeroCardFifth({ Image, Tittle }) {
    return (
        <>
            <div className="w-full sm:w-[80%] md:w-[45%] lg:w-[30%] xl:w-[20%] flex flex-col gap-2.5 rounded-3xl overflow-hidden">

                <img
                    src={Image}
                    alt={Tittle}
                    className="w-full h-48 sm:h-56 md:h-60 lg:h-52 xl:h-auto object-cover rounded-3xl"
                />

                <h1 className="text-[#291d78] font-bold text-xl sm:text-2xl cursor-pointer px-1">
                    {Tittle}
                </h1>

                <h1 className="text-xl sm:text-2xl">
                    {Tittle}
                </h1>

            </div>
        </>
    );
}

export default HeroCardFifth;