import HeroCardSecond from "../Components/HeroCardSecond";

function CombineSecond() {
    return (
        <>
            <div className="w-full max-w-full overflow-x-hidden px-4 sm:px-6 lg:px-10 py-6 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8">

                <HeroCardSecond
                    Icon={<i className="ri-contract-line"></i>}
                    Tittle="No Contract"
                />

                <HeroCardSecond
                    Icon={<i className="ri-money-rupee-circle-line"></i>}
                    Tittle="Low Cost"
                />

                <HeroCardSecond
                    Icon={<i className="ri-24-hours-line"></i>}
                    Tittle="24 Hour Opening"
                />

            </div>
        </>
    );
}

export default CombineSecond;