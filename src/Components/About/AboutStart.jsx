function Start({ Last, Button2, AboutLast }) {
    return (
        <>
            <div className="w-full max-w-full overflow-x-hidden mt-8 sm:mt-11 mb-8 px-4 sm:px-6 lg:px-10 flex justify-center items-center">

                <div
                    className="relative w-full sm:w-[95%] lg:w-[85%] min-h-105 sm:min-h-100 lg:h-[40vh] rounded-3xl lg:rounded-4xl p-5 sm:p-7 md:p-10 flex flex-col md:flex-row justify-center md:justify-around items-center gap-6 md:gap-8 bg-center bg-no-repeat bg-cover overflow-hidden"
                    style={{ backgroundImage: `url(${AboutLast})` }}
                >

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* Image */}
                    <div
                        className="relative z-10 w-full max-w-75 sm:max-w-100 md:max-w-none md:w-[35%] h-52 sm:h-60 md:h-[85%] rounded-3xl bg-no-repeat bg-cover bg-center shrink-0"
                        style={{ backgroundImage: `url(${Last})` }}
                    ></div>

                    {/* Content */}
                    <div className="relative z-10 w-full md:w-[55%] flex flex-col justify-center items-center md:items-start gap-4 text-center md:text-left">

                        <h1 className="text-[#aeef02] font-black text-2xl sm:text-3xl md:text-4xl leading-tight">
                            Ready to start your journey?
                        </h1>

                        <p className="text-[#afb3c7] text-sm sm:text-base md:text-xl w-full md:w-[80%] leading-relaxed">
                            Join thousands of members who are building stronger bodies and better lives.
                        </p>

                        <button className="w-full sm:w-auto px-8 sm:px-12 md:px-16 py-3 bg-[#b2ff01] rounded-full text-[#344f00] font-extrabold text-sm sm:text-base transition-colors duration-300 hover:bg-[#89c107] hover:text-[#394b17] cursor-pointer">
                            {Button2}
                        </button>

                    </div>

                </div>

            </div>
        </>
    );
}

export default Start;