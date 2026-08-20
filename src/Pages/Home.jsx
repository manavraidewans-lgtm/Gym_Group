import CombineFirst from "../Combined-Cards/combineFirst.jsx";
import CombineSecond from "../Combined-Cards/CombineSecond.jsx";
import CombineThird from "../Combined-Cards/CombineThird.jsx";
import CombineForth from "../Combined-Cards/combineForth.jsx";
import CombineFifth from "../Combined-Cards/CombineFifth.jsx";

import Button from "../Components/Button.jsx";
import Hero from "../Components/Hero.jsx";

function Home() {
    return (
        <>
            {/* Offer Bar */}
            <div className="w-full max-w-full overflow-x-hidden min-h-12 px-4 py-2 bg-[#b2ff01] flex justify-center items-center gap-2 sm:gap-3 text-center">

                <i className="ri-discount-percent-line text-2xl sm:text-[2rem] text-[#344f00] font-extrabold"></i>

                <h2 className="text-[#344f00] font-extrabold text-sm sm:text-base md:text-xl lg:text-[1.6rem]">
                    Save for 6 months
                </h2>

            </div>

            {/* Hero */}
            <Hero
                Tittle="20% OFF FOR 6 MONTHS & NO JOINING FEE"
                Button="Join Now"
            />

            {/* Cards */}
            <CombineFirst />

            <CombineSecond />

            <CombineThird />

            <CombineForth />

            <CombineFifth />

        </>
    );
}

export default Home;