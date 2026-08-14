import CombineFirst from "../Combined-Cards/combineFirst.jsx"
import CombineSecond from "../Combined-Cards/CombineSecond.jsx"
import CombineThird from "../Combined-Cards/CombineThird.jsx"
import CombineForth from "../Combined-Cards/combineForth.jsx"
import CombineFifth from "../Combined-Cards/CombineFifth.jsx"
import Button from "../Components/Button.jsx"


import Hero from "../Components/Hero.jsx"



function Home () {
    return (

        <>
         <div className="h-12 w-full bg-[#b2ff01] flex justify-center items-center gap-3 ">
          <i class="ri-discount-percent-line text-[2rem] text-[#344f00] font-extrabold"></i>
          <h2 className="text-[#344f00] font-extrabold text-[1.6rem]  ">Save for 6 months</h2>
        </div>

           <Hero 
           Tittle="20% OFF FOR 6 MONTHS & NO JOINING FEE"  
           Button="Join Now" />



        <CombineFirst/>

        <CombineSecond/>

        <CombineThird/>

        <CombineForth/>

        <CombineFifth/>

        <div className="h-[15vh] w-full flex justify-center items-center">
            <Button
            Tittle = "Join the Gym Grop today"
            />
        </div>

        </>

    )
}

export default Home