import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import Image from "next/image"
import { ConciergeBell, BookOpen } from "lucide-react"

const categoriesData = [
    { id: 1, name: "Coffee", icon: "/images/icon-coffee.png" },
    { id: 2, name: "Breakfast", icon: "/images/icon-breakfast.png" },
    { id: 3, name: "Panini", icon: "/images/icon-panini.png" },
    { id: 4, name: "Grill", icon: "/images/icon-grill.png" },
    { id: 5, name: "Salad", icon: "/images/icon-salad.png" },
    { id: 6, name: "Burger", icon: "/images/icon-burger.png" },
]

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-12 overflow-hidden">

            <div className="absolute inset-0 z-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-[#310509]/[0.86]"></div>
            </div>

            <div className="relative z-10 w-full h-full">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                        <div className="flex flex-col items-start text-white max-lg:items-center max-lg:text-center w-full">
                            <h1
                                className="text-[50px] lg:text-[55px] xl:text-[70px] font-normal leading-[1.1] tracking-widest text-white"
                                style={{ fontFamily: "'Daffiys', sans-serif" }}
                            >
                                FRESHLY MADE.<br />
                                FULLY HALAL.
                            </h1>

                            <p className="mt-6 text-[15px] lg:text-[16px] text-white/90 max-w-[520px] leading-relaxed font-light">
                                Homemade Lamb Burgers, Proper Full English Breakfasts, And The Best Coffee In Whitechapel — Right At The Royal London Hospital.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-4 items-center max-sm:flex-col max-sm:w-full">
                                <Button
                                    variant="primary"
                                    icon={ConciergeBell}
                                    className="w-[191px] h-[48px] !px-0"
                                >
                                    Order Now
                                </Button>

                                <Button
                                    variant="white-outline"
                                    icon={BookOpen}
                                    className="w-[191px] h-[48px] !px-0"
                                >
                                    View Menu
                                </Button>
                            </div>
                        </div>

                        <div className="flex justify-center lg:justify-center relative w-full">
                            <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] lg:w-[450px] lg:h-[450px]">
                                <Image
                                    src="/images/hero-platem.png"
                                    alt="Freshly Made Food"
                                    fill
                                    priority
                                    className="object-contain drop-shadow-2xl"
                                />
                            </div>
                        </div>

                    </div>

                    {/* BOTTOM BAR */}
                    <div className="mt-8 w-full flex justify-center relative z-20">
                        <div className="w-full max-w-[1170px] h-[64px] flex items-center justify-between overflow-x-auto no-scrollbar gap-6 text-white text-[22px] font-normal px-4">
                            {categoriesData.map((category) => (
                                <div key={category.id} className="flex items-center gap-3 group cursor-pointer shrink-0">
                                    <div className="w-8 h-8 relative flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <Image
                                            src={category.icon}
                                            alt={category.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <span className="tracking-wide group-hover:text-primary transition-colors duration-300">
                                        {category.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </div>

        </section>
    )
}