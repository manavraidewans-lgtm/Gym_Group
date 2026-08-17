function HeroCardSecond({ Icon, Tittle }) {
    return (
        <div className="w-full sm:w-[80%] md:w-[45%] lg:w-[30%] xl:w-[20%] min-h-20 sm:min-h-24 flex justify-center items-center p-3 gap-3 text-center">

            <i className="text-3xl sm:text-4xl md:text-[2.5rem] text-[#5448a3] shrink-0">
                {Icon}
            </i>

            <h2 className="text-[#6c64a2] font-bold text-sm sm:text-base md:text-lg">
                {Tittle}
            </h2>

        </div>
    );
}

export default HeroCardSecond;