import SectionTitle from "@/components/ui/SectionTitle"
import Container from "@/components/ui/Container"
import Image from "next/image"
import Button from "@/components/ui/Button"
import { ConciergeBell, BookOpen, ShoppingCart, Percent, CalendarDays, ShieldCheck } from "lucide-react"

export default function Welcome() {
    return (
        <section className="py-24 bg-[#FFF6F5]">
            <Container className="max-w-[1280px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

                    {/* Left: Images Layering */}
                    <div className="relative w-full max-w-[550px] mx-auto lg:mx-0 max-lg:mb-20">
                        {/* Big Image: 510x310 */}
                        <div className="relative w-full max-w-[510px] h-[250px] sm:h-[310px] rounded-[20px] overflow-hidden shadow-lg z-0">
                            <Image
                                src="/images/welcome-big.png"
                                alt="Dining Table"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Small Overlapping Image: 329x246 */}
                        <div className="absolute -bottom-16 -right-2 sm:-right-8 lg:-right-10 w-[240px] sm:w-[329px] h-[180px] sm:h-[246px] rounded-[20px] overflow-hidden shadow-2xl z-10 border-1 border-[#FFF6F5]">
                            <Image
                                src="/images/welcome-small.png"
                                alt="Chicken Grill"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="flex flex-col max-lg:items-center max-lg:text-center pl-0 lg:pl-10">

                        <SectionTitle
                            title={<>WELCOME TO<br />CAFE LEADS</>}
                            subtitle="100% Halal, top-rated Indian food, dining & takeaway in London. From rich curries to flavorful grills, our chefs craft something delicious for every taste."
                            className="max-w-[520px]"
                        />

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mt-8">
                            <div className="flex items-center gap-3 text-[14px] font-semibold tracking-wide text-gray-900">
                                <ShoppingCart size={20} className="text-black" /> ONLINE ORDER
                            </div>
                            <div className="flex items-center gap-3 text-[14px] font-semibold tracking-wide text-gray-900">
                                <Percent size={20} className="text-black" /> SPECIAL DEALS
                            </div>
                            <div className="flex items-center gap-3 text-[14px] font-semibold tracking-wide text-gray-900">
                                <CalendarDays size={20} className="text-black" /> PRE-RESERVATION
                            </div>
                            <div className="flex items-center gap-3 text-[14px] font-semibold tracking-wide text-gray-900">
                                <ShieldCheck size={20} className="text-black" /> 100% HALAL
                            </div>
                        </div>

                        {/* Action Buttons (191x48) */}
                        <div className="flex flex-wrap gap-4 mt-10">
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

                </div>
            </Container>
        </section>
    )
}