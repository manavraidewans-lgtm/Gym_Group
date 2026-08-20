function Footer() {
    return (
        <>
            <footer className="w-full min-h-20 bg-[#0050ef] px-4 sm:px-6 lg:px-10 py-4 text-white font-bold">

                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-3 md:gap-5">

                    {/* Left */}
                    <h1 className="text-sm sm:text-base text-center md:text-left">
                        Stronger Today . Better Tomorrow.
                    </h1>

                    {/* Center */}
                    <h1 className="text-sm sm:text-base text-center">
                        <i className="ri-at-line mr-1"></i>
                        2022 All Rights Reserved.
                    </h1>

                    

                    {/* Right */}
                    <div className="flex items-center justify-center gap-4 text-sm sm:text-base">

                        <p>Get Socials</p>

                        <i className="ri-youtube-fill text-xl hover:text-gray-200 transition"></i>

                        <i className="ri-instagram-fill text-xl hover:text-gray-200 transition"></i>

                        <i className="ri-tiktok-fill text-xl hover:text-gray-200 transition"></i>

                    </div>

                </div>

            </footer>
        </>
    );
}

export default Footer;