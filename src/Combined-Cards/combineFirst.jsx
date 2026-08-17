import HeroCardFirst from "../Components/HeroCardFirst";

import memberImg from "../assets/card-back-1.jpg";
import trainerImg from "../assets/card-back-2.jpg";
import classesImg from "../assets/card-back-3.jpg";

function CombineFirst() {
    return (
        <div className="w-full max-w-full overflow-x-hidden bg-white px-4 sm:px-6 lg:px-10 py-8 sm:py-10 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 lg:gap-8">

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