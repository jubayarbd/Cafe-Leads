"use client"

import { useRef } from "react"
import SectionTitle from "@/components/ui/SectionTitle"
import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import Image from "next/image"
import { ConciergeBell, BookOpen, Star, ChevronLeft, ChevronRight } from "lucide-react"

const bestSellingData = [
    {
        id: 1,
        name: "Special Burger",
        price: "£10.28",
        image: "/images/best-1.png",
        bg: "bg-[#FFEDD2]",
        borderColor: "border-[#FFC46E]"
    },
    {
        id: 2,
        name: "Special Burger",
        price: "£10.28",
        image: "/images/best-2.png",
        bg: "bg-[#FFEFEF]",
        borderColor: "border-[#D9905C]"
    },
    {
        id: 3,
        name: "Special Burger",
        price: "£10.28",
        image: "/images/best-3.png",
        bg: "bg-[#FFE0E0]",
        borderColor: "border-[#FF6E6E]"
    },
    {
        id: 4,
        name: "Special Burger",
        price: "£10.28",
        image: "/images/best-4.png",
        bg: "bg-[#E8F4FF]",
        borderColor: "border-[#82B2DF]"
    },
    {
        id: 5,
        name: "Special Burger",
        price: "£10.28",
        image: "/images/best-2.png",
        bg: "bg-[#E8F4FF]",
        borderColor: "border-[#82B2DF]"
    },
    {
        id: 6,
        name: "Special Burger",
        price: "£10.28",
        image: "/images/best-1.png",
        bg: "bg-[#E8F4FF]",
        borderColor: "border-[#82B2DF]"
    },
]

export default function BestSelling() {
    const scrollRef = useRef(null)

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 300
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            })
        }
    }

    return (
        <section className="py-20 bg-[#FFF6F5]">
            <Container className="max-w-[1280px] relative">

                <div className="text-center mb-14 flex justify-center">
                    <SectionTitle
                        title="BEST SELLING ITEMS"
                        subtitle="100% Halal, top-rated Indian food, dining & takeaway in London. From rich curries to flavorful grills, our chefs craft something delicious for every taste."
                        className="max-w-[650px]"
                    />
                </div>

                <div className="flex items-center justify-center gap-4 lg:gap-8 relative">

                    <button
                        onClick={() => scroll("left")}
                        className="hidden xl:flex items-center justify-center w-10 h-10 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors flex-shrink-0 absolute -left-12 z-10"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <div
                        ref={scrollRef}
                        className="flex gap-6 lg:gap-8 w-full overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4 px-2"
                    >
                        {bestSellingData.map((item) => (
                            <div key={item.id} className="flex flex-col w-[260px] flex-shrink-0 snap-center">
                                <div className={`w-[260px] h-[260px] rounded-[10px] border-2 ${item.bg} ${item.borderColor} relative flex items-center justify-center p-6 group cursor-pointer transition-transform`}>
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>

                                <div className="mt-4 px-1">
                                    <h3 className="font-bold text-[18px] text-gray-900">
                                        {item.name}
                                    </h3>
                                    <div className="flex justify-between items-center mt-2">
                                        <p className="text-[15px] text-gray-700">
                                            {item.price}
                                        </p>
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={14}
                                                    className="fill-[#FFC107] text-[#FFC107]"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => scroll("right")}
                        className="hidden xl:flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white hover:opacity-90 transition-opacity flex-shrink-0 shadow-md absolute -right-12 z-10"
                    >
                        <ChevronRight size={24} />
                    </button>

                </div>

                <div className="flex flex-wrap justify-center gap-4 mt-12">
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

            </Container>
        </section>
    )
}