function HeroCardSecond({Icon , Tittle}) {
    return (
        <div className="h-[50%] w-[20%] flex justify-center items-center p-2 gap-3">
            <i className="text-[2.5rem] text-[#5448a3] ">{Icon}</i>
            <h2 className= "text-[#6c64a2] font-bold" >{Tittle}</h2>
            
        </div>
    );
}

export default HeroCardSecond;