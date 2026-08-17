function MoreAbout({ ButtonText, bgImg1, bgImg2, bgImg3, bgImg4 }) {
    return (
        <>
            <div className="w-full max-w-full overflow-x-hidden mt-10 sm:mt-16 px-5 sm:px-8 lg:px-12 py-10 flex flex-col lg:flex-row justify-center lg:justify-around items-center gap-10 lg:gap-8">

                {/* Left Content */}
                <div className="w-full sm:w-[90%] lg:w-[35%] flex justify-start items-start p-2 sm:p-5 flex-col gap-4">

                    <h1 className="text-3xl sm:text-4xl text-[#0b0558] font-black leading-tight">
                        More than just a GYM
                    </h1>

                    <p className="text-[#575757] font-bold text-sm sm:text-base leading-6">
                        We're on a mission to improve the nation's health and wellbeing. That's why we offer more than just a place to workout.
                    </p>

                    {/* List */}
                    <div className="w-full flex flex-col justify-start items-start gap-4 mt-2">

                        <div className="flex justify-start items-center gap-3">
                            <i className="ri-check-fill shrink-0 font-black text-xl sm:text-2xl p-0.5 bg-amber-200 rounded-full px-1"></i>
                            <p className="text-[#575757] font-bold text-sm sm:text-base">
                                Over 100+ free classes every week.
                            </p>
                        </div>

                        <div className="flex justify-start items-center gap-3">
                            <i className="ri-check-fill shrink-0 font-black text-xl sm:text-2xl p-0.5 bg-amber-200 rounded-full px-1"></i>
                            <p className="text-[#575757] font-bold text-sm sm:text-base">
                                Personal training tailored to you.
                            </p>
                        </div>

                        <div className="flex justify-start items-center gap-3">
                            <i className="ri-check-fill shrink-0 font-black text-xl sm:text-2xl p-0.5 bg-amber-200 rounded-full px-1"></i>
                            <p className="text-[#575757] font-bold text-sm sm:text-base">
                                Nutrition & lifestyle guidance.
                            </p>
                        </div>

                        <div className="flex justify-start items-center gap-3">
                            <i className="ri-check-fill shrink-0 font-black text-xl sm:text-2xl p-0.5 bg-amber-200 rounded-full px-1"></i>
                            <p className="text-[#575757] font-bold text-sm sm:text-base">
                                State-of-the-art facilities.
                            </p>
                        </div>

                        <div className="flex justify-start items-center gap-3">
                            <i className="ri-check-fill shrink-0 font-black text-xl sm:text-2xl p-0.5 bg-amber-200 rounded-full px-1"></i>
                            <p className="text-[#575757] font-bold text-sm sm:text-base">
                                Open early till late, 7 days a week.
                            </p>
                        </div>

                    </div>

                    {/* Button */}
                    <button className="w-full sm:w-auto px-6 py-3 sm:p-4 sm:px-6 bg-[#0050ef] text-[#edeff1] rounded-full font-bold hover:bg-[#0137a4] transition duration-250 mt-3">
                        {ButtonText}
                    </button>

                </div>

                {/* Right Images */}
                <div className="w-full sm:w-[90%] lg:w-[55%] grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7">

                    {/* Image 1 */}
                    <div
                        className="h-60 sm:h-52 md:h-60 lg:h-64 rounded-3xl lg:rounded-4xl bg-no-repeat bg-cover bg-center relative overflow-hidden"
                        style={{ backgroundImage: `url(${bgImg1})` }}
                    >
                        <div className="absolute inset-0 bg-black/20"></div>
                    </div>

                    {/* Image 2 */}
                    <div
                        className="h-60 sm:h-52 md:h-60 lg:h-64 rounded-3xl lg:rounded-4xl bg-no-repeat bg-cover bg-center relative overflow-hidden"
                        style={{ backgroundImage: `url(${bgImg2})` }}
                    >
                        <div className="absolute inset-0 bg-black/20"></div>
                    </div>

                    {/* Image 3 */}
                    <div
                        className="h-60 sm:h-52 md:h-60 lg:h-64 rounded-3xl lg:rounded-4xl bg-no-repeat bg-cover bg-center relative overflow-hidden"
                        style={{ backgroundImage: `url(${bgImg3})` }}
                    >
                        <div className="absolute inset-0 bg-black/20"></div>
                    </div>

                    {/* Image 4 */}
                    <div
                        className="h-60 sm:h-52 md:h-60 lg:h-64 rounded-3xl lg:rounded-4xl bg-no-repeat bg-cover bg-center relative overflow-hidden"
                        style={{ backgroundImage: `url(${bgImg4})` }}
                    >
                        <div className="absolute inset-0 bg-black/20"></div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default MoreAbout;