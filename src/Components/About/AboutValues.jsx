function Values() {
    return (
        <>
            <div className="w-full max-w-full overflow-x-hidden mt-8 sm:mt-11 px-4 sm:px-6 lg:px-10 py-10 sm:py-12">

                {/* Heading */}
                <div className="w-full flex justify-center items-center mb-8 sm:mb-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#030153] font-black text-center">
                        Our Values
                    </h1>
                </div>

                {/* Cards */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6 justify-items-center">

                    {/* Mission */}
                    <div className="w-full max-w-70 min-h-65 sm:min-h-70 rounded-2xl p-6 flex flex-col justify-center items-center gap-4 bg-[#e6eaf3] text-center">

                        <i className="ri-target-fill text-5xl sm:text-6xl md:text-7xl text-[#1e4cf0]"></i>

                        <h3 className="text-[#090668] font-bold text-lg sm:text-xl">
                            Our Mission
                        </h3>

                        <p className="text-sm sm:text-base">
                            To help people lead healthier, happier lives through affordable fitness.
                        </p>

                    </div>

                    {/* Commitment */}
                    <div className="w-full max-w-70 min-h-65 sm:min-h-70 rounded-2xl p-6 flex flex-col justify-center items-center gap-4 bg-[#e6eaf3] text-center">

                        <i className="ri-shield-check-line text-5xl sm:text-6xl md:text-7xl text-[#1e4cf0]"></i>

                        <h3 className="text-[#090668] font-bold text-lg sm:text-xl">
                            Our Commitment
                        </h3>

                        <p className="text-sm sm:text-base">
                            We're committed to providing a safe, clean and inclusive space for everyone.
                        </p>

                    </div>

                    {/* Community */}
                    <div className="w-full max-w-70 min-h-65 sm:min-h-70 rounded-2xl p-6 flex flex-col justify-center items-center gap-4 bg-[#e6eaf3] text-center">

                        <i className="ri-group-line text-5xl sm:text-6xl md:text-7xl text-[#1e4cf0]"></i>

                        <h3 className="text-[#090668] font-bold text-lg sm:text-xl">
                            Our Community
                        </h3>

                        <p className="text-sm sm:text-base">
                            We build real connections and support each other every step of the way.
                        </p>

                    </div>

                    {/* Passion */}
                    <div className="w-full max-w-70 min-h-65 sm:min-h-70 rounded-2xl p-6 flex flex-col justify-center items-center gap-4 bg-[#e6eaf3] text-center">

                        <i className="ri-service-line text-5xl sm:text-6xl md:text-7xl text-[#1e4cf0]"></i>

                        <h3 className="text-[#090668] font-bold text-lg sm:text-xl">
                            Our Passion
                        </h3>

                        <p className="text-sm sm:text-base">
                            We love what we do and it shows in every class, every session, every day.
                        </p>

                    </div>

                    {/* Promise */}
                    <div className="w-full max-w-70 min-h-65 sm:min-h-70 rounded-2xl p-6 flex flex-col justify-center items-center gap-4 bg-[#e6eaf3] text-center">

                        <i className="ri-star-line text-5xl sm:text-6xl md:text-7xl text-[#1e4cf0]"></i>

                        <h3 className="text-[#090668] font-bold text-lg sm:text-xl">
                            Our Promise
                        </h3>

                        <p className="text-sm sm:text-base">
                            We'll always be here to help you stay consistent and achieve your goals.
                        </p>

                    </div>

                </div>
            </div>
        </>
    );
}

export default Values;