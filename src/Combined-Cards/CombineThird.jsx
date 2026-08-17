import HeroCardThird from "../Components/HeroCardThird";

import FirstPic from "../assets/new-1.webp";
import SecondPic from "../assets/new-2.webp";

function CombineThird() {
    return (
        <>
            <div className="w-full max-w-full overflow-x-hidden px-4 sm:px-6 lg:px-10 py-10 sm:py-12 mt-8 sm:mt-14 flex flex-col justify-center items-center gap-6">

                {/* Heading */}
                <div className="w-full flex justify-center items-center text-center font-black text-[#15086b]">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl">
                        What's new at The Gym Group
                    </h1>
                </div>

                {/* Cards */}
                <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 lg:gap-8">

                    <HeroCardThird
                        Image={FirstPic}
                        Tittle="Benefits of a leg day workout"
                        Description="Build stronger legs with a workout that targets your quads, hamstrings, glutes and calves. Perfect for beginners and experienced gym-goers alike."
                        Button="Learn More"
                    />

                    <HeroCardThird
                        Image={SecondPic}
                        Tittle="DOMS recovery guide"
                        Description="Feeling sore after a workout? Learn what causes DOMS and discover simple ways to recover faster and keep your training on track."
                        Button="Read More"
                    />

                </div>

            </div>
        </>
    );
}

export default CombineThird;