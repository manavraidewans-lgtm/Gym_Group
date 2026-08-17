import Gym from "../../assets/gyn.webp";

function Story({ Tittle, Description1, Description2 }) {
    return (
        <div className="w-full max-w-full overflow-x-hidden mt-8 sm:mt-10 px-4 sm:px-6 lg:px-10 py-8 sm:py-12 flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12">

            {/* Left Image */}
            <div
                className="w-full sm:w-[85%] md:w-[70%] lg:w-[40%] h-70 sm:h-90 md:h-105 lg:h-125 rounded-3xl overflow-hidden bg-cover bg-center bg-no-repeat shrink-0"
                style={{ backgroundImage: `url(${Gym})` }}
            ></div>

            {/* Right Content */}
            <div className="w-full sm:w-[90%] lg:w-[50%] flex flex-col justify-center items-start gap-4">

                {/* Heading */}
                <h2 className="text-[#0e0959] font-black text-3xl sm:text-4xl md:text-5xl leading-tight">
                    {Tittle}
                </h2>

                {/* Description */}
                <p className="text-[#1f1b53] text-sm sm:text-base leading-6">
                    {Description1}
                </p>

                <p className="text-[#1f1b53] text-sm sm:text-base leading-6">
                    {Description2}
                </p>

                {/* Feature 1 */}
                <div className="flex items-start gap-4 sm:gap-6 w-full mt-2">

                    <div className="text-3xl sm:text-4xl text-[#3657fa] shrink-0">
                        <i className="ri-24-hours-fill"></i>
                    </div>

                    <div>
                        <p className="text-[#0e0959] font-bold text-lg sm:text-xl">
                            Accessible for everyone
                        </p>

                        <p className="text-sm sm:text-base leading-6">
                            High-quality fitness shouldn't cost the earth.
                            That's why we keep our memberships affordable and flexible.
                        </p>
                    </div>

                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-4 sm:gap-6 w-full">

                    <div className="text-3xl sm:text-4xl text-[#3657fa] shrink-0">
                        <i className="ri-hand-sanitizer-fill"></i>
                    </div>

                    <div>
                        <p className="text-[#0e0959] font-bold text-lg sm:text-xl">
                            Top quality equipment
                        </p>

                        <p className="text-sm sm:text-base leading-6">
                            We invest in the latest cardio, strength and functional
                            equipment to help you train your way.
                        </p>
                    </div>

                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-4 sm:gap-6 w-full">

                    <div className="text-3xl sm:text-4xl text-[#3657fa] shrink-0">
                        <i className="ri-group-line"></i>
                    </div>

                    <div>
                        <p className="text-[#0e0959] font-bold text-lg sm:text-xl">
                            Friendly community
                        </p>

                        <p className="text-sm sm:text-base leading-6">
                            Whether you're a beginner or a pro, you'll find support
                            and motivation every step of the way.
                        </p>
                    </div>

                </div>

                {/* Feature 4 */}
                <div className="flex items-start gap-4 sm:gap-6 w-full">

                    <div className="text-3xl sm:text-4xl text-[#3657fa] shrink-0">
                        <i className="ri-customer-service-2-fill"></i>
                    </div>

                    <div>
                        <p className="text-[#0e0959] font-bold text-lg sm:text-xl">
                            Expert support
                        </p>

                        <p className="text-sm sm:text-base leading-6">
                            Our trainers are here to guide, inspire and help you
                            reach your goals safely and efficiently.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Story;