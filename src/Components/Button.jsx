function Button({ Tittle }) {
    return (
        <>
            <button
                className="w-full sm:w-auto px-6 py-3 sm:px-7 sm:py-3.5 bg-[#0050ef] text-white rounded-full font-bold text-sm sm:text-base hover:bg-[#0137a4] transition duration-250"
            >
                {Tittle}
            </button>
        </>
    );
}

export default Button;