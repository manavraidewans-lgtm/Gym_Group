function HeroCardThird ({Image , Tittle , Description , Button}) {
    return (
        <>
            <div className="h-[90%] w-[48%] bg-[#c2cdeb] rounded-3xl flex flex-col items-center justify-center overflow-hidden " >

                <img 
                src={Image} 
                alt={Tittle} 
                className="h-[60%] w-full "
                />

                <div 
                className="h-[40%] flex flex-col justify-start items-start gap-3 p-5">
                    
                    <h2 className="text-[#0d0066] font-black text-xl">
                        {Tittle}
                    </h2>

                    <p 
                    className="text-[#5f569a]">
                        {Description}
                    </p>

                    <button 
                    className="p-2 px-6 bg-[#ffffff] border border-[#0d0066] rounded-4xl hover:bg-[#859ddd] hover:text-white 
                    duration-250 cursor-pointer">
                        {Button}
                    </button>
                    
                </div>
            </div>
        </>
    )
}

export default HeroCardThird