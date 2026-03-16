"use client"

import { useState } from "react"
import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ConciergeBell } from "lucide-react"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuItems = ["Home", "Menu", "Booking", "Gallery", "Contact"]

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#F3F3F3] shadow-sm max-sm:top-0">
            <Container>
                <div className="py-4 flex items-center justify-between max-md:px-6 max-sm:px-4 relative z-50 transition-all duration-300">

                    <div className="flex-shrink-0 z-50">
                        <Link href="/">
                            <Image
                                src="/images/logo.png"
                                alt="Cafe Leads"
                                width={120}
                                height={40}
                                className="object-contain max-md:w-28 max-sm:w-24 px-1"
                            />
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <nav className="flex gap-10 text-[16px] font-medium text-gray-800 max-lg:gap-6 max-md:gap-4 max-lg:text-sm">
                            {menuItems.map((item) => (
                                <Link key={item} href="#" className="hover:text-primary transition-colors duration-300">
                                    {item}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="hidden md:block">
                        <Button
                            variant="primary"
                            icon={ConciergeBell}
                            className="w-[191px] h-[48px] !px-0"
                        >
                            Order Now
                        </Button>
                    </div>

                    <button
                        className="md:hidden text-black z-50 p-1 hover:text-primary transition-colors duration-300"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Menu size={26} />
                    </button>

                </div>

                <div
                    className={`md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                    onClick={() => setIsMenuOpen(false)}
                ></div>

                <div className={`md:hidden fixed top-0 right-0 h-full w-[85%] max-w-[340px] bg-white shadow-2xl z-50 flex flex-col transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>

                    <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100/80">
                        <Link href="/" onClick={() => setIsMenuOpen(false)}>
                            <Image
                                src="/images/logo.png"
                                alt="Cafe Leads"
                                width={100}
                                height={32}
                                className="object-contain w-24 px-1"
                            />
                        </Link>
                        <button
                            className="text-gray-500 hover:bg-red-50 hover:text-primary p-2 rounded-full transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto py-6 px-4">
                        <nav className="flex flex-col space-y-2 text-center text-black">
                            {menuItems.map((item) => (
                                <Link
                                    key={item}
                                    href="#"
                                    className="block font-medium text-lg tracking-wide py-3 px-4 rounded-xl hover:bg-red-50 hover:text-primary active:bg-red-100 transition-colors duration-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="p-6 border-t border-gray-100/80 mb-4 mt-auto flex justify-center">
                        <Button icon={ConciergeBell}>Order Now</Button>
                    </div>

                </div>
            </Container>
        </header>
    )
}