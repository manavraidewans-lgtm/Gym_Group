import Button from "../Button"

function MoreAbout ({ ButtonText , bgImg1 , bgImg2 , bgImg3 , bgImg4}) {
    return (
        <>
            <div className="h-[70vh] w-full mt-16 flex justify-around items-center">
                
                <left className = "h-[90%] w-[35%] flex justify-start items-start p-5 flex-col gap-4">

                    <h1 className=" text-4xl text-[#0b0558] font-black">More than just a GYM</h1>

                    <p className="text-[#575757 font-bold]" >We're on a mission to improve the nation's health and wellbeing. That's why we offer more than just a place to workout.</p>

                    <list className = "flex flex-col justify-start items-start gap-4">

                            <div className="flex justify-center items-center gap-4">
                                <i class="ri-check-fill font-black text-2xl p-0.5 bg-amber-200 rounded-[50%] px-1 "></i>
                                <p className="text-[#575757 font-bold]">Over 100+ tree classes every Week.</p>
                            </div>

                            <div className="flex justify-center items-center gap-4">
                                <i class="ri-check-fill font-black text-2xl p-0.5 bg-amber-200 rounded-[50%] px-1 "></i>
                                <p className="text-[#575757 font-bold]">Personal training tailored to you.</p>
                            </div>


                            <div className="flex justify-center items-center gap-4">
                                <i class="ri-check-fill font-black text-2xl p-0.5 bg-amber-200 rounded-[50%] px-1 "></i>
                                <p className="text-[#575757 font-bold]">Nutrition & lifestyle guidance.</p>
                            </div>

                            <div className="flex justify-center items-center gap-4">
                                <i class="ri-check-fill font-black text-2xl p-0.5 bg-amber-200 rounded-[50%] px-1 "></i>
                                <p className="text-[#575757 font-bold]">State-of-the-art facilities.</p>
                            </div>

                            <div className="flex justify-center items-center gap-4">
                                <i class="ri-check-fill font-black text-2xl p-0.5 bg-amber-200 rounded-[50%] px-1 "></i>
                                <p className="text-[#575757 font-bold]">Open Early till late , 7 days a week. </p>
                            </div>
                    </list>

                    <button className = "p-4 px-6 bg-[#0050ef] text-[#edeff1] rounded-4xl font-bold hover:bg-[#0137a4] duration-250  mt-3">
                        {ButtonText}
                    </button>

                </left>

                
                <right className = "h-[90%] w-[55%] flex justify-center items-center flex-wrap gap-9 ">

                    <div className="h-[45%] w-[45%] bg-amber-400 rounded-4xl bg-no-repeat bg-cover bg-center relative overflow-hidden"
                    style={{ backgroundImage: `url(${bgImg1})` }}>
                        {/*OverLay*/}
                        <div className="absolute inset-0 bg-black/20"></div>
                    </div>

                   <div className="h-[45%] w-[45%] bg-amber-400 rounded-4xl bg-no-repeat bg-cover bg-center relative overflow-hidden"
                    style={{ backgroundImage: `url(${bgImg2})` }}>
                        {/*OverLay*/}
                        <div className="absolute inset-0 bg-black/20"></div>
                    </div>

                    <div className="h-[45%] w-[45%] bg-amber-400 rounded-4xl bg-no-repeat bg-cover bg-center relative overflow-hidden"
                    style={{ backgroundImage: `url(${bgImg3})` }}>
                        {/*OverLay*/}
                        <div className="absolute inset-0 bg-black/20"></div>
                    </div>

                    <div className="h-[45%] w-[45%] bg-amber-400 rounded-4xl bg-no-repeat bg-cover bg-center relative overflow-hidden"
                    style={{ backgroundImage: `url(${bgImg4})` }}>
                        {/*OverLay*/}
                        <div className="absolute inset-0 bg-black/20"></div>
                    </div>

                </right>
            </div>
        </>
    )
}

export default MoreAbout