import HeroCardThird from "../Components/HeroCardThird"

import FirstPic from "../assets/new-1.webp"
import SecondPic from "../assets/new-2.webp"


function CombineThird () {
    return (
        <>
            <div className="h-150 w-full p-5 mt-14 flex flex-col justify-center items-center gap-3 ">

                    <div className="h-[10%] w-full flex justify-center items-center font-black text-[#15086b]
                    text-3xl">
                        <h1>What's new at The Gym Group</h1>
                    </div>

                    <div className="h-[90%] w-[95%] flex justify-evenly items-center ">

                        
                        <HeroCardThird
                        Image ={FirstPic}
                        Tittle = "Benefits of a leg day workout"
                        Description = "Build stronger legs with a workout that targets your quads, hamstrings, glutes and calves. Perfect for beginners and experienced gym-goers alike."
                        Button = "learn More"
                        />


                        <HeroCardThird
                        Image = {SecondPic}
                        Tittle = "DOMS recovery guide"
                        Description = "Feeling sore after a workout? Learn what causes DOMS and discover simple ways to recover faster and keep your training on track."
                        Button = "Read More"
                        />

                        

                    </div>


            </div>
        </>
    )
}

export default CombineThird