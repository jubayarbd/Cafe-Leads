"use client"

import { useState } from "react"
import SectionTitle from "@/components/ui/SectionTitle"
import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import Image from "next/image"
import { ConciergeBell, BookOpen, Star } from "lucide-react"

const categories = ["Coffee", "Panini", "Breakfast", "Burger", "Grill", "Salad"]

const menuItemsData = [
    { id: 1, name: "Sandwich", price: "£10.28", image: "/images/menu-1.png" },
    { id: 2, name: "Vegetable Breakfast", price: "£10.28", image: "/images/menu-2.png" },
    { id: 3, name: "Half Chicken", price: "£10.28", image: "/images/menu-3.png" },
    { id: 4, name: "Gourmet Burger", price: "£10.28", image: "/images/menu-4.png" },
    { id: 5, name: "Sandwich", price: "£10.28", image: "/images/menu-1.png" },
    { id: 6, name: "Vegetable Breakfast", price: "£10.28", image: "/images/menu-2.png" },
    { id: 7, name: "Half Chicken", price: "£10.28", image: "/images/menu-3.png" },
    { id: 8, name: "Gourmet Burger", price: "£10.28", image: "/images/menu-4.png" },
]

export default function MenuSection() {
    const [activeCategory, setActiveCategory] = useState("Breakfast")

    return (
        <section className="py-20 bg-[#FFF6F5]">
            <Container className="max-w-[1280px]">

                {/* HEADER */}
                <div className="text-center mb-10 flex justify-center">
                    <SectionTitle title="OUR MENU" />
                </div>

                {/* CATEGORY PILLS */}
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-14">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === category
                                    ? "bg-[#9A3B27] text-white border-[#9A3B27] shadow-md"
                                    : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* MENU GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 xl:gap-8 justify-items-center">
                    {menuItemsData.map((item) => (
                        <div key={item.id} className="flex flex-col w-full max-w-[290px]">

                            {/* IMAGE CARD */}
                            <div className="w-full aspect-square bg-[#FFEDD2] border border-[#FFC46E] rounded-xl relative flex items-center justify-center p-6 group cursor-pointer transition-transform hover:-translate-y-1">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* CARD DETAILS */}
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
                                                className="fill-[#FFB012] text-[#FFB012]"
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* CARD BUTTON */}
                                <button className="w-full mt-5 py-2.5 rounded-full border border-primary text-primary font-medium hover:bg-primary hover:text-white transition-colors duration-300">
                                    Order Now
                                </button>
                            </div>

                        </div>
                    ))}
                </div>

                {/* BOTTOM ACTION BUTTONS */}
                <div className="flex flex-wrap justify-center gap-4 mt-16">
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
                        className="w-[191px] h-[48px] !px-0 border-primary text-primary hover:bg-primary hover:text-white"
                    >
                        View More
                    </Button>
                </div>

            </Container>
        </section>
    )
}