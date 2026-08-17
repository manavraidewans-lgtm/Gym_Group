function Values () {
    return (
        <>
            <div className="h-[50vh] w-full flex flex-col mt-11">

                <div className="h-[20%] w-full flex justify-center items-center">
                    <h1 className="text-5xl text-[#030153] font-black">Our Values</h1>
                </div>

                <div className=" h-[80%] w-full flex justify-around items-center gap-2.5 rounded-2xl">

                    {/* card */}
                <card className = "h-[90%] w-[18%] rounded-2xl flex flex-col justify-center items-center gap-4 bg-[#e6eaf3] ">
                        <i class="ri-target-fill text-7xl text-[#1e4cf0]"></i>
                        <h3 className="text-[#090668] font-bold text-xl">Our Mission</h3>
                        <p className="text-center">To help people lead healthier, happier lives through afforadable fitness.</p>
                </card>

                    {/* card */}
                <card className = "h-[90%] w-[18%] rounded-2xl flex flex-col justify-center items-center gap-4 bg-[#e6eaf3] ">
                        <i class="ri-shield-check-line text-7xl text-[#1e4cf0]"></i>
                        <h3 className="text-[#090668] font-bold text-xl">Our Commitment</h3>
                        <p className="text-center">We're committed to providing a safe, clean and inclusive space for everyone.</p>
                </card>

                {/* card */}
                <card className = "h-[90%] w-[18%] rounded-2xl flex flex-col justify-center items-center gap-4 bg-[#e6eaf3] ">
                        <i class="ri-group-line text-7xl text-[#1e4cf0]"></i>
                        <h3 className="text-[#090668] font-bold text-xl">Our Community</h3>
                        <p className="text-center">We build real connections and support each other every step of the way.</p>
                </card>

               {/* card */}
                <card className = "h-[90%] w-[18%] rounded-2xl flex flex-col justify-center items-center gap-4 bg-[#e6eaf3] ">
                        <i class="ri-service-line text-7xl text-[#1e4cf0]"></i>
                        <h3 className="text-[#090668] font-bold text-xl">Our Passion</h3>
                        <p className="text-center">We love what we do and it shows in every class, every session, every day.</p>
                </card>

                {/* card */}
                <card className = "h-[90%] w-[18%] rounded-2xl flex flex-col justify-center items-center gap-4 bg-[#e6eaf3] ">
                        <i class="ri-star-line text-7xl text-[#1e4cf0]"></i>
                        <h3 className="text-[#090668] font-bold text-xl">Our Promise</h3>
                        <p className="text-center">We'll always be here to help you stay consistent and achieve your goals.</p>
                </card>


                </div>
                
            </div>
        </>
    )
}

export default Values