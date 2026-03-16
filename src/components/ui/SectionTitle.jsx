export default function SectionTitle({ title, subtitle, className = "" }) {
    return (
        <div className={className}>
            <h2
                className="text-primary text-[35px] lg:text-[46px] font-normal leading-[1.1] tracking-wider uppercase"
                style={{ fontFamily: "'Daffiys', sans-serif" }}
            >
                {title}
            </h2>

            {subtitle && (
                <p className="text-gray-700 mt-4 leading-relaxed max-lg:text-sm max-sm:text-[13px]">
                    {subtitle}
                </p>
            )}
        </div>
    )
}