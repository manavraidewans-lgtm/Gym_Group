import Gym from "../../assets/gyn.webp";

function Story({ Tittle, Description1 , Description2 }) {
    return (
        <div className="min-h-[70vh] w-full mt-9 flex flex-col md:flex-row justify-evenly items-center gap-8 px-5">

            {/* Left Image */}
            <div
                className="h-125 w-full md:w-[40%] rounded-3xl overflow-hidden bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${Gym})` }}
            ></div>

            {/* Right Content */}
            <div className="w-full md:w-[50%] flex flex-col justify-center items-start gap-4">

                <h2 className="text-[#0e0959] font-black text-4xl">
                    {Tittle}
                </h2>

                <p className="text-[#1f1b53]">
                    {Description1}
                </p>

                <p className="text-[#1f1b53]">
                    {Description2}
                </p>

                {/* Feature 1 */}
                <div className="flex items-center gap-6 w-full">
                    <div className="text-4xl text-[#3657fa]">
                        <i className="ri-24-hours-fill"></i>
                    </div>

                    <div>
                        <p className="text-[#0e0959] font-bold text-xl">
                            Accessible for everyone
                        </p>

                        <p>
                            High-quality fitness shouldn't cost the earth.
                            That's why we keep our memberships affordable and flexible.
                        </p>
                    </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-center gap-6 w-full">
                    <div className="text-4xl text-[#3657fa]">
                        <i className="ri-hand-sanitizer-fill"></i>
                    </div>

                    <div>
                        <p className="text-[#0e0959] font-bold text-xl">
                            Top quality equipments
                        </p>

                        <p>
                            We invest in the latest cardio, strength and functional
                            equipment to help you train your way.
                        </p>
                    </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-center gap-6 w-full">
                    <div className="text-4xl text-[#3657fa]">
                        <i className="ri-group-line"></i>
                    </div>

                    <div>
                        <p className="text-[#0e0959] font-bold text-xl">
                            Friendly community
                        </p>

                        <p>
                            Whether you're a beginner or a pro, you'll find support
                            and motivation every step of the way.
                        </p>
                    </div>
                </div>

                {/* Feature 4 */}
                <div className="flex items-center gap-6 w-full">
                    <div className="text-4xl text-[#3657fa]">
                        <i className="ri-customer-service-2-fill"></i>
                    </div>

                    <div>
                        <p className="text-[#0e0959] font-bold text-xl">
                            Expert support
                        </p>

                        <p>
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