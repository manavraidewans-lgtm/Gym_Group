import ContactHeroImg from "../../assets/Contact Hero.webp";

function ContactHero() {
    return (
        <>
            <div
                className="min-h-[75vh] sm:min-h-[80vh] w-full flex justify-center items-center bg-center bg-no-repeat bg-cover relative px-5 sm:px-8 lg:px-12"
                style={{ backgroundImage: `url(${ContactHeroImg})` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Content */}
                <div className="relative z-10 w-full max-w-7xl min-h-[80%] flex justify-center lg:justify-start items-start flex-col gap-5 sm:gap-7 lg:gap-9">

                    {/* Heading */}
                    <h1 className="text-[#b5fc00] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black w-full sm:w-[85%] lg:w-[50%] leading-tight">
                        We are here to help you
                    </h1>

                    {/* Description */}
                    <p className="text-[#e8eaed] text-base sm:text-lg md:text-xl w-full sm:w-[85%] lg:w-[55%] font-bold leading-relaxed">
                        Have a question, need support, or ready to start your fitness journey? Our team is here for you!
                    </p>

                    {/* Contact Information */}
                    <div className="w-full lg:w-[80%] flex flex-col sm:flex-row flex-wrap lg:flex-nowrap justify-start items-start gap-5 sm:gap-4 lg:gap-8 mt-2">

                        {/* Call Us */}
                        <div className="w-full sm:w-[45%] lg:w-[30%] min-h-20 flex items-center">

                            <div className="flex justify-center items-center w-[25%] sm:w-[30%] h-full">
                                <i className="ri-phone-line text-[#b5fc00] text-3xl sm:text-4xl font-bold"></i>
                            </div>

                            <div className="flex flex-col justify-center items-start w-[75%] sm:w-[70%] h-full">
                                <h1 className="text-white font-bold text-base sm:text-lg">
                                    Call Us
                                </h1>
                                <p className="text-[#c1c3cb] text-sm sm:text-base">
                                    +91 1234567890
                                </p>
                            </div>

                        </div>

                        {/* Email Us */}
                        <div className="w-full sm:w-[45%] lg:w-[30%] min-h-20 flex items-center">

                            <div className="flex justify-center items-center w-[25%] sm:w-[30%] h-full">
                                <i className="ri-mail-send-line text-[#b5fc00] text-3xl sm:text-4xl font-bold"></i>
                            </div>

                            <div className="flex flex-col justify-center items-start w-[75%] sm:w-[70%] h-full">
                                <h1 className="text-white font-bold text-base sm:text-lg">
                                    Email Us
                                </h1>
                                <p className="text-[#c1c3cb] text-sm sm:text-base break-all">
                                    support@gym.com
                                </p>
                            </div>

                        </div>

                        {/* Open Hours */}
                        <div className="w-full sm:w-[45%] lg:w-[30%] min-h-20 flex items-center">

                            <div className="flex justify-center items-center w-[25%] sm:w-[30%] h-full">
                                <i className="ri-time-line text-[#b5fc00] text-3xl sm:text-4xl font-bold"></i>
                            </div>

                            <div className="flex flex-col justify-center items-start w-[75%] sm:w-[70%] h-full">
                                <h1 className="text-white font-bold text-base sm:text-lg">
                                    Open Hours
                                </h1>
                                <p className="text-[#c1c3cb] text-sm sm:text-base">
                                    24 Hours
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactHero;