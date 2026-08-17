import AboutLast from "../../assets/about last.png"


function Start ({Last , Button2 }) {
    return (
        <>
            <div className="h-[40vh] w-full  mt-11 mb-8 flex justify-center items-center">
                <div className="h-full w-[80%]  rounded-4xl flex justify-around items-center gap-3 bg-center bg-no-repeat bg-cover " 
                style={{ backgroundImage: `url(${AboutLast})` }}  >
                    
                        <left className = "h-[85%] w-[35%] rounded-4xl bg-no-repeat bg-cover bg-center" 
                        style={{ backgroundImage: `url(${Last})` }} ></left>


                        <right className = "h-[90%] w-[55%] flex flex-col justify-center items-start gap-4">
                            <h1 className="text-[#aeef02] font-black text-4xl">Ready to start your journey ?</h1>
                            <p className="text-[#afb3c7] text-xl w-[80%]">Join thousands of members who are building stronger bodies and better </p>


                            <button className="p-3 px-18 bg-[#b2ff01] rounded-4xl text-[#344f00] font-extrabold transition-colors duration-300 hover:bg-[#89c107] hover:text-[#394b17] cursor-pointer">
                                {Button2}
                            </button>

                        </right>
                        
                </div>
            </div>
        </>
    )
}

export default Start