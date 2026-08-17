function ContactCards() {
    return (
        <>
            <div className="w-full max-w-full overflow-x-hidden mt-6 px-4 sm:px-6 lg:px-10 py-8 flex flex-col sm:flex-row flex-wrap lg:flex-nowrap justify-center items-center gap-6 lg:gap-8">

                {/* Multiple Locations */}
                <div className="w-full sm:w-[45%] lg:w-[22%] min-h-70 sm:min-h-75 lg:h-[35vh] rounded-3xl lg:rounded-4xl flex flex-col justify-center items-center gap-5 sm:gap-6 p-6 overflow-hidden bg-[#cfdef6] text-center">

                    <i className="ri-map-pin-line text-[#0b3ad0] text-5xl sm:text-6xl font-medium p-2 rounded-full bg-[#eff2fd]"></i>

                    <h1 className="text-[#303fa2] text-2xl sm:text-3xl font-bold">
                        Multiple Locations
                    </h1>

                    <p className="text-[#8f91a1] font-medium text-center text-sm sm:text-base max-w-xs">
                        Find a gym near you with convenient locations across India.
                    </p>

                </div>

                {/* Friendly Support */}
                <div className="w-full sm:w-[45%] lg:w-[22%] min-h-70 sm:min-h-75 lg:h-[35vh] rounded-3xl lg:rounded-4xl flex flex-col justify-center items-center gap-5 sm:gap-6 p-6 overflow-hidden bg-[#cfdef6] text-center">

                    <i className="ri-customer-service-line text-[#0b3ad0] text-5xl sm:text-6xl font-medium p-2 rounded-full bg-[#eff2fd]"></i>

                    <h1 className="text-[#303fa2] text-2xl sm:text-3xl font-bold">
                        Friendly Support
                    </h1>

                    <p className="text-[#8f91a1] font-medium text-center text-sm sm:text-base max-w-xs">
                        Our friendly team is always ready to answer your questions.
                    </p>

                </div>

                {/* Fast Response */}
                <div className="w-full sm:w-[45%] lg:w-[22%] min-h-70 sm:min-h-75 lg:h-[35vh] rounded-3xl lg:rounded-4xl flex flex-col justify-center items-center gap-5 sm:gap-6 p-6 overflow-hidden bg-[#cfdef6] text-center">

                    <i className="ri-chat-ai-3-line text-[#0b3ad0] text-5xl sm:text-6xl font-medium p-2 rounded-full bg-[#eff2fd]"></i>

                    <h1 className="text-[#303fa2] text-2xl sm:text-3xl font-bold">
                        Fast Response
                    </h1>

                    <p className="text-[#8f91a1] font-medium text-center text-sm sm:text-base max-w-xs">
                        We aim to get back to you within 24 hours.
                    </p>

                </div>

                {/* Join Our Community */}
                <div className="w-full sm:w-[45%] lg:w-[22%] min-h-70 sm:min-h-75 lg:h-[35vh] rounded-3xl lg:rounded-4xl flex flex-col justify-center items-center gap-5 sm:gap-6 p-6 overflow-hidden bg-[#cfdef6] text-center">

                    <i className="ri-group-line text-[#0b3ad0] text-5xl sm:text-6xl font-medium p-2 rounded-full bg-[#eff2fd]"></i>

                    <h1 className="text-[#303fa2] text-2xl sm:text-3xl font-bold">
                        Join Our Community
                    </h1>

                    <p className="text-[#8f91a1] font-medium text-center text-sm sm:text-base max-w-xs">
                        Follow us on social media for the latest updates and offers.
                    </p>

                </div>

            </div>
        </>
    );
}

export default ContactCards;