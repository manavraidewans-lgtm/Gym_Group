import ClassImage from "../../assets/classes hero.webp";

function ClassHome() {
    return (
        <div
            className="relative w-full h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{ backgroundImage: `url("${ClassImage}")` }}
        >

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Contents */}
            <div className="relative z-10 h-full w-full flex justify-center items-center">

                <div className="w-[90%] sm:w-[85%] md:w-[80%] h-[70%] flex flex-col justify-center items-center text-center gap-4">

                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
                        Find The Class
                    </h1>

                    <h1 className="text-[#bef100] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
                        That Moves You
                    </h1>

                    <p className="text-white text-sm sm:text-base md:text-xl mt-4 max-w-2xl">
                        From strength training to yoga, we have a variety of classes to help you reach your fitness goals.
                    </p>

                </div>

            </div>


        </div>
    );
}

export default ClassHome;