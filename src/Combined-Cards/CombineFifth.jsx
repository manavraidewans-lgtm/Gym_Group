import HeroCardFifth from "../Components/HeroCardFifth";

import Yoga from "../assets/yoga sports.webp";
import Guest from "../assets/Guest Pass.webp";
import FIIT from "../assets/FIIT.webp";
import Equip from "../assets/equipment.webp";

function CombineFifth() {
    return (
        <>
            <div className="w-full max-w-full overflow-x-hidden px-4 sm:px-6 lg:px-10 py-8 mb-12 flex flex-col sm:flex-row flex-wrap xl:flex-nowrap justify-center items-center gap-6 lg:gap-8">

                <HeroCardFifth
                    Image={Yoga}
                    Tittle="Yoga Sports Water"
                />

                <HeroCardFifth
                    Image={Guest}
                    Tittle="Guest Pass"
                />

                <HeroCardFifth
                    Image={FIIT}
                    Tittle="Free FIIT launches"
                />

                <HeroCardFifth
                    Image={Equip}
                    Tittle="Equipment guides"
                />

            </div>
        </>
    );
}

export default CombineFifth;