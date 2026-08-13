import HeroCardFirst from "../Components/HeroCardFirst";

import memberImg from "../assets/card-back-1.jpg";
import trainerImg from "../assets/card-back-2.jpg";
import classesImg from "../assets/card-back-3.jpg";

function CombineFirst() {
    return (
        <div className="h-50 w-full bg-white flex justify-evenly items-center">
            
            <HeroCardFirst 
                Tittle="Member"
                bgImage={memberImg}
            />

            <HeroCardFirst 
                Tittle="Trainer"
                bgImage={trainerImg}
            />

            <HeroCardFirst 
                Tittle="Classes"
                bgImage={classesImg}
            />

        </div>
    );
}

export default CombineFirst;