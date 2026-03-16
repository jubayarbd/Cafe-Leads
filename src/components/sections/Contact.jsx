import Container from "@/components/ui/Container"
import { ArrowRight } from "lucide-react"
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6"

export default function Contact() {
    return (
        <section className="py-28 bg-secondary max-md:py-16 max-sm:py-12">
            <Container>

                {/* MAP */}
                <div className="w-full mb-16 max-md:mb-10 max-sm:mb-8">
                    <iframe
                        src="https://www.google.com/maps?q=Leads%20Eatery%20Indian%20Restaurant%20%26%20Takeaway&output=embed"
                        className="w-full h-[350px] rounded-3xl shadow-[0_0_15px_rgba(0,0,0,0.05)] border-4 border-white max-md:h-[300px] max-sm:h-[250px]"
                        loading="lazy"
                    ></iframe>
                </div>

                {/* TEXT & SOCIALS */}
                <div className="flex justify-between items-end max-md:flex-col max-md:items-start max-md:gap-6 mb-12 max-sm:mb-8">
                    <div>
                        <h2 className="text-[48px] font-semibold text-black max-lg:text-[40px] max-md:text-[36px] max-sm:text-[32px] uppercase">
                            CONTACT US
                        </h2>
                        <p className="mt-3 text-gray-700 leading-relaxed max-w-2xl max-sm:text-sm text-[15px]">
                            Excellent service and the tastiest lamb vindaloo I've ever tasted!
                            Cafe Leads is my new favourite curry restaurant, and I heartily suggest it.
                        </p>
                    </div>

                    <div className="flex gap-4 items-center">
                        <a href="#" className="text-primary hover:opacity-80 transition-all hover:scale-110">
                            <FaFacebook className="w-[22px] h-[22px]" />
                        </a>
                        <a href="#" className="text-primary hover:opacity-80 transition-all hover:scale-110">
                            <FaInstagram className="w-[22px] h-[22px]" />
                        </a>
                        <a href="#" className="text-primary hover:opacity-80 transition-all hover:scale-110">
                            <FaTiktok className="w-[20px] h-[20px]" />
                        </a>
                    </div>
                </div>

                {/* FORM */}
                <form className="space-y-6 max-sm:space-y-4">
                    <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-4">
                        <div>
                            <label className="text-sm font-medium text-gray-700">Name*</label>
                            <input
                                type="text"
                                placeholder="Abdur Rafiq"
                                className="w-full mt-2 px-4 py-2.5 border border-gray-300 rounded bg-transparent outline-none text-black placeholder:text-gray-400 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-700">Phone*</label>
                            <input
                                type="text"
                                placeholder="+44 *** ***"
                                className="w-full mt-2 px-4 py-2.5 border border-gray-300 rounded bg-transparent outline-none text-black placeholder:text-gray-400 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-700">Email*</label>
                            <input
                                type="email"
                                placeholder="yourname@gmail.com"
                                className="w-full mt-2 px-4 py-2.5 border border-gray-300 rounded bg-transparent outline-none text-black placeholder:text-gray-400 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-700">Subject*</label>
                            <input
                                type="text"
                                placeholder="Your subject line here"
                                className="w-full mt-2 px-4 py-2.5 border border-gray-300 rounded bg-transparent outline-none text-black placeholder:text-gray-400 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700">Message*</label>
                        <textarea
                            rows="5"
                            placeholder="Write your message here"
                            className="w-full mt-2 px-4 py-3 border border-gray-300 rounded bg-transparent outline-none text-black placeholder:text-gray-400 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm resize-none"
                        />

                        <div className="flex justify-end pt-2">
                            <button type="button" className="flex items-center gap-2.5 bg-primary text-white font-medium px-8 py-3.5 rounded-lg shadow-md hover:opacity-90 transition-all duration-300 hover:-translate-y-0.5 max-sm:w-full max-sm:justify-center">
                                <span className="bg-white text-primary p-1 rounded-full flex items-center justify-center">
                                    <ArrowRight size={16} strokeWidth={2.5} />
                                </span>
                                SUBMIT NOW
                            </button>
                        </div>
                    </div>

                </form>

            </Container>
        </section>
    )
}