function HeroCardThird ({Image , Tittle , Description , Button}) {
    return (
        <>
            <div className="h-[90%] w-[45%] bg-[#cad2ea] rounded-2xl flex flex-col items-center justify-center" gap-2>
                <img src={Image} alt={Tittle} />
                <div>
                    <h2>{Tittle}</h2>
                    <p>{Description}</p>
                    <button>{Button}</button>
                </div>
            </div>
        </>
    )
}

export default HeroCardThird