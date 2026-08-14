import HeroCardFifth from "../Components/HeroCardFifth";

import Yoga from "../assets/yoga sports.webp"
import Guest from "../assets/Guest Pass.webp"
import FIIT from "../assets/FIIT.webp"
import Equip from "../assets/equipment.webp"



function CombineFifth () {
    return (
        <>
            <div className="h-[40vh] w-full flex justify-evenly items-center mb-12.5">

                <HeroCardFifth
                Image = {Yoga}
                Tittle = "Yanga Sports Water"
                />
                
               <HeroCardFifth
                Image = {Guest}
                Tittle = "Guest Pass"
                />

                <HeroCardFifth
                Image = {FIIT}
                Tittle = "Free FIIT launches"
                />

                <HeroCardFifth
                Image = {Equip}
                Tittle = "Equipment guides"
                />

            </div>        
        </>
    )
}

export default CombineFifth