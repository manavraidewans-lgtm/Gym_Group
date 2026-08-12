import hero from "../assets/hero home.webp";

function Hero () {
    return (
        <>
            <div className=" relative h-150 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${hero})` }}>

                <div className="h-[45%] w-[75%] absolute bottom-0 left-1/2 -translate-x-1/2 p-2 flex justify-items-center  flex-col items-center gap-10">

                    <h3 className="p-2 bg-[#f2f2f2] text-[#08091a] font-extrabold rounded">Use code: MOVE</h3>
                    <h1 className="text-[#ffffff] text-5xl font-black">20% OFF FOR 6 MONTHS & NO JOINING FEE</h1>
                    <button className="p-3 bg-[#b2ff01] px-18 rounded-4xl text-[#344f00] font-extrabold transition-colors duration-300 hover:bg-[#89c107] hover:text-[#394b17] cursor-pointer ">Join Now</button>

                </div>

            </div>
        </>
    )
}

export default Hero