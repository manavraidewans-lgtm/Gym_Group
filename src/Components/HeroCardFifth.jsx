
function HeroCardFifth ({Image , Tittle}) {
    return (
        <>
            <div className="h-[80%] w-[20%] flex flex-col gap-2.5 rounded-3xl">
                <img src={Image} alt={Tittle} className="rounded-3xl"/>
                <h1 className="text-[#291d78] font-bold text-2xl cursor-pointer">{Tittle}</h1>
            </div>
        </>
    )
}

export default HeroCardFifth