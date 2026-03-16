import SectionTitle from "@/components/ui/SectionTitle"
import Container from "@/components/ui/Container"
import Image from "next/image"
import Button from "@/components/ui/Button"
import { ConciergeBell, BookOpen } from "lucide-react"

export default function Promo() {
    return (
        <section className="py-28 bg-[#FFF6F5] max-md:py-16 max-sm:py-12 overflow-hidden">
            <Container>
                <div className="grid md:grid-cols-2 gap-20 items-center max-lg:gap-10 max-md:gap-12">

                    {/* LEFT CONTENT */}
                    <div className="flex flex-col items-start max-md:text-center max-md:items-center">

                        <p className="text-sm text-gray-800 font-medium max-sm:text-xs tracking-wide">
                            Every bite made you fresh!
                        </p>

                        <SectionTitle
                            title={<>UNLIMITED DISCOUNTS<br />EVERY TIME</>}
                            subtitle="A handful of nuts a day is a nutrient-packed snack! These nutrients support overall health, from heart health to immune function. Make nuts a daily habit for better health!"
                            className="max-w-[550px] mt-4"
                        />

                        <p className="text-gray-700 mt-4 max-w-[550px] leading-relaxed max-lg:text-sm max-sm:text-[13px] max-sm:mt-3">
                            A handful of nuts a day is a nutrient-packed snack! These nutrients support overall health, from heart health to immune function. Make nuts a daily habit for better health!
                        </p>

                        {/* BUTTONS */}
                        <div className="flex flex-wrap justify-start max-md:justify-center gap-4 mt-10">
                            <Button
                                variant="primary"
                                icon={ConciergeBell}
                                className="w-[191px] h-[48px] !px-0"
                            >
                                Order Now
                            </Button>

                            <Button
                                variant="outline"
                                icon={BookOpen}
                                className="w-[191px] h-[48px] !px-0 border-[#B20815] text-[#B20815] hover:bg-[#B20815] hover:text-white"
                            >
                                View Menu
                            </Button>
                        </div>

                    </div>

                    {/* RIGHT IMAGE AREA */}
                    <div className="relative max-md:flex max-md:justify-center w-full lg:pl-10">

                        {/* Main Image Base */}
                        <div className="relative bg-gradient-to-br from-[#FADCCD] to-[#FAEEE8] p-6 rounded-[28px] shadow-sm md:w-[420px] md:h-[364px] max-md:w-full max-md:max-w-[450px] max-sm:p-4 border-2 border-white flex justify-center items-center">
                            <Image
                                src="/images/discount-plate.png"
                                width={320}
                                height={320}
                                alt="Delicious breakfast plate"
                                className="object-contain hover:scale-[1.02] transition duration-300 max-lg:w-full max-lg:h-auto"
                            />
                        </div>

                        {/* TOP CARD */}
                        <div className="absolute -top-20 right-0 lg:-right-[-120px] bg-gradient-to-br from-[#FFA8AA]/90 to-[#ffffff]/60 p-5 lg:p-6 rounded-xl shadow-lg w-[260px] lg:w-[290px] lg:h-[156px] border-2 border-white/60 backdrop-blur-md max-md:hidden z-10">
                            <h4 className="font-medium text-lg text-gray-900 py-1">
                                Get 25% OFF Every Time
                            </h4>
                            <p className="text-sm text-gray-800 mt-1 leading-relaxed">
                                25% on Collection when the food total is £20 or over.
                            </p>
                        </div>

                        {/* BOTTOM CARD */}
                        <div className="absolute -bottom-15 -left-4 lg:-left-10 bg-gradient-to-br from-[#FFDB94]/90 to-[#ffffff]/60 p-5 lg:p-6 rounded-xl shadow-lg w-[260px] lg:w-[290px] lg:h-[156px] border-2 border-white/60 backdrop-blur-md max-md:hidden z-10">
                            <h4 className="font-medium text-lg text-gray-900 py-1">
                                Get 20% OFF On Delivery
                            </h4>
                            <p className="text-sm text-gray-800 mt-1 leading-relaxed">
                                20% OFF on Delivery when the food total is £25 or over.
                            </p>
                        </div>

                        {/* SMALL DISH WITH TEXT */}
                        <div className="absolute right-[80px] top-[50%] flex flex-col items-center gap-2 max-xl:right-0 max-xl:translate-x-1/2 max-md:hidden z-20">
                            <div className="bg-[#E87B1E] rounded-full shadow-xl border-2 border-white w-[90px] h-[90px] flex justify-center items-center">
                                <Image
                                    src="/images/onion-vaji.png"
                                    width={115}
                                    height={115}
                                    alt="Free Onion Bhajee"
                                    className="object-contain"
                                />
                            </div>
                            <div className="text-center px-3 py-2 rounded-lg">
                                <span className="font-medium text-gray-900 text-[18px]">*Free Onion Bhajee</span>
                                <br />
                                <span className="text-sm text-gray-700">on orders of £30 or over.</span>
                            </div>
                        </div>

                    </div>

                </div>
            </Container>
        </section>
    )
}