function ContactForm() {
    return (
        <>
            <div className="min-h-[70vh] w-full mt-16 mb-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center gap-3.5">

                <h1 className="text-[#050469] font-black text-3xl sm:text-4xl text-center">
                    Send Us A Message
                </h1>

                <p className="text-[#79798e] font-medium text-center text-sm sm:text-base max-w-2xl">
                    Fill out the form below and a member of our team will get back to you.
                </p>

                {/* Form Container */}
                <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] min-h-125 mt-6 sm:mt-8 border-4 border-gray-100 rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-10">

                    <form className="w-full h-full flex flex-col gap-5 sm:gap-6">

                        {/* Name + Email */}
                        <div className="w-full flex flex-col sm:flex-row gap-5">

                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full sm:w-1/2 h-14 border-2 border-gray-200 rounded-lg px-5 outline-none focus:border-blue-600 transition"
                            />

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full sm:w-1/2 h-14 border-2 border-gray-200 rounded-lg px-5 outline-none focus:border-blue-600 transition"
                            />

                        </div>

                        {/* Subject */}
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full h-14 border-2 border-gray-200 rounded-lg px-5 outline-none focus:border-blue-600 transition"
                        />

                        {/* Message */}
                        <textarea
                            placeholder="Write your message..."
                            className="w-full h-36 sm:h-40 border-2 border-gray-200 rounded-lg px-5 py-4 outline-none resize-none focus:border-blue-600 transition"
                        ></textarea>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full sm:w-40 h-12 bg-[#0b5cff] text-white rounded-full font-bold hover:bg-[#084dcc] transition flex justify-center items-center gap-3 px-5"
                        >
                            <i className="ri-send-plane-fill"></i>
                            <span>Send Message</span>
                        </button>

                    </form>

                </div>

            </div>
        </>
    );
}

export default ContactForm;