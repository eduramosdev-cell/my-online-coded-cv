export const Hero = () => {
    return <section className="relative min-h-screen flex items-center overflow-hidden">
        {/*Bg*/}
        <div className="absolute inset-0">
            <img src="../public/projects/hero-bg.png" alt="Hero Background " className="w-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-linear-to-b from-background/20 via-secondary/20 to-background" />
        </div>

        {/*Green Dots*/}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, index) => (
                <div key={index} className={`absolute w-1.5 h-1.5 bg-slate-400 rounded-full opacity-60`} style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `slow-drift ${15+ Math.random() * 20}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5}s`
                }} />
            ))}
        </div>

        {/*Content*/}
        <div>
            <div>
                
            </div>
        </div>
    </section>
}