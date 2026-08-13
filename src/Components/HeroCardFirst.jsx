function HeroCardFirst({ Tittle, bgImage }) {
    return (
        <div 
            className="h-[60%] w-[20%] bg-cover bg-center rounded-3xl flex justify-center items-center 
            transition-transform duration-900 hover:-translate-y-3 hover:shadow-xl 
            hover:box-shadow-l hover:shadow-[#0d0066] cursor-pointer"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <h1 className="text-white font-black text-[2rem]">{Tittle}</h1>
        </div>
    );
}

export default HeroCardFirst;