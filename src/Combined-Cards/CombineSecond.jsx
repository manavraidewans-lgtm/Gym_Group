import HeroCardSecond from "../Components/HeroCardSecond";


function CombineSecond () {
    return (
        <>
            <div className="h-30 w-full flex justify-center items-center gap-4">

                    <HeroCardSecond
                    Icon = <i class="ri-contract-line"></i>
                    Tittle = "No Contract"
                    />

                    <HeroCardSecond
                    Icon= <i class="ri-money-rupee-circle-line"></i>
                    Tittle = "Low Cost"
                    />

                    <HeroCardSecond
                    Icon= <i class="ri-24-hours-line"></i>
                    Tittle = "24 Hour Opening"
                    />
            </div>
        </>
    )
}

export default CombineSecond