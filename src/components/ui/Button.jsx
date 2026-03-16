// src/components/ui/Button.jsx

export default function Button({
    children,
    variant = "primary",
    icon: Icon,
    className = "",
    ...props
}) {
    const baseStyles = "text-xl flex items-center justify-center gap-2 px-8 py-3 rounded-md font-normal transition-all duration-300 active:scale-[0.98] hover:scale-[1.02]"

    const variants = {
        primary: "bg-primary text-white shadow-md hover:shadow-lg hover:opacity-90 hover:scale-[1.02]",
        outline: "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white",
        "white-outline": "bg-transparent border border-white text-white hover:bg-white hover:text-black",
    }

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {Icon && <Icon size={22} />}
            {children}
        </button>
    )
}