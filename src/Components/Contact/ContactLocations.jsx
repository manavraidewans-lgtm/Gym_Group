import Manchester from "../../assets/gym Manchester.jpeg";
import Banglore from "../../assets/gym Banglore.jpeg";
import Delhi from "../../assets/gym delhi.jpeg";

function ContactLoactions() {
    return (
        <>
            <div className="w-full max-w-full overflow-x-hidden mb-12 px-4 sm:px-6 lg:px-10 py-8 flex flex-col md:flex-row justify-center items-center gap-6 lg:gap-8">

                {/* Manchester */}
                <div className="w-full sm:w-[80%] md:w-[45%] lg:w-[30%] min-h-105 bg-[#cfdef6] rounded-3xl lg:rounded-4xl overflow-hidden flex flex-col">

                    <img
                        src={Manchester}
                        alt="Manchester Gym"
                        className="h-52 sm:h-56 md:h-52 lg:h-56 w-full object-cover"
                    />

                    <div className="flex-1 w-full p-5 sm:p-6 flex flex-col justify-start items-start gap-3">

                        <h1 className="text-[#2a257c] font-extrabold text-lg sm:text-xl">
                            Manchester - Old Trafford
                        </h1>

                        <p className="text-gray-700 text-sm sm:text-base leading-6">
                            25 Old Broad St, <br />
                            Manchester EC2N 1HN <br />
                            020 7946 0600
                        </p>

                        <button className="mt-auto flex justify-center items-center gap-2 px-5 py-2.5 bg-[#0b3ad0] text-white rounded-full font-bold hover:bg-[#082fa8] transition">
                            View Location
                            <i className="ri-map-pin-3-line"></i>
                        </button>

                    </div>
                </div>

                {/* Bangalore */}
                <div className="w-full sm:w-[80%] md:w-[45%] lg:w-[30%] min-h-105 bg-[#cfdef6] rounded-3xl lg:rounded-4xl overflow-hidden flex flex-col">

                    <img
                        src={Banglore}
                        alt="Bangalore Gym"
                        className="h-52 sm:h-56 md:h-52 lg:h-56 w-full object-cover"
                    />

                    <div className="flex-1 w-full p-5 sm:p-6 flex flex-col justify-start items-start gap-3">

                        <h1 className="text-[#2a257c] font-extrabold text-lg sm:text-xl">
                            Bangalore
                        </h1>

                        <p className="text-gray-700 text-sm sm:text-base leading-6">
                            MG Road, <br />
                            Bangalore, Karnataka <br />
                            080 7946 0600
                        </p>

                        <button className="mt-auto flex justify-center items-center gap-2 px-5 py-2.5 bg-[#0b3ad0] text-white rounded-full font-bold hover:bg-[#082fa8] transition">
                            View Location
                            <i className="ri-map-pin-3-line"></i>
                        </button>

                    </div>
                </div>

                {/* Delhi */}
                <div className="w-full sm:w-[80%] md:w-[45%] lg:w-[30%] min-h-105 bg-[#cfdef6] rounded-3xl lg:rounded-4xl overflow-hidden flex flex-col">

                    <img
                        src={Delhi}
                        alt="Delhi Gym"
                        className="h-52 sm:h-56 md:h-52 lg:h-56 w-full object-cover"
                    />

                    <div className="flex-1 w-full p-5 sm:p-6 flex flex-col justify-start items-start gap-3">

                        <h1 className="text-[#2a257c] font-extrabold text-lg sm:text-xl">
                            Delhi
                        </h1>

                        <p className="text-gray-700 text-sm sm:text-base leading-6">
                            Connaught Place, <br />
                            New Delhi, India <br />
                            011 7946 0600
                        </p>

                        <button className="mt-auto flex justify-center items-center gap-2 px-5 py-2.5 bg-[#0b3ad0] text-white rounded-full font-bold hover:bg-[#082fa8] transition">
                            View Location
                            <i className="ri-map-pin-3-line"></i>
                        </button>

                    </div>
                </div>

            </div>
        </>
    );
}

export default ContactLoactions;