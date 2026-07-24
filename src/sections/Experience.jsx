const experiences = [
    {
        period: "2026 - Present",
        role: "Frontend",
        company: "Myself",
        description: "Learning at freeCodeCamp, starting my own spectacular projects!",
        technologies: ["React", "Tailwind CSS", "TypeScript"],
        current: true
    }
]

export const Experience = () => {
return <section id="experience" className="py-32 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="container mx-auto px-6 relative z-10">
        {/*Section header*/}
        <div className="max-2-3xl mb-16">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in"
            >
                Carrer Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground"
            >
                Experience that <span className="font-serif italic font-normal text-white">speaks volumes.</span>
            </h2>

            <p className="text-muted-foreground animate-fade-in animation-delay-200"
            >
                A timeline of my professional growth, from curious beginner to senior engineer leading teams and building products at scale.
            </p>
        </div>
        {/*Timeline*/}
        <div className="relative">
            <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"/>

            {/*Experience Items*/}
            <div className="space-y-12">
                {experiences.map((exp, idx) => (
                    <div key={idx} className="relative grid md:grid-cols-2 gap-8 animate-fade-in" style={{ animationDelay: `${(idx + 1) * 150}ms` }}>

                        {/*Timeline Dot */}
                        <div></div>

                        {/*Content*/}
                        <div className={}>
                            <div>
                                <span>{exp.period}</span>
                                <h3>{exp.role}</h3>
                                <p>{exp.company}</p>
                                <p>{exp.description}</p>
                                <div>
                                    {exp.technologies.map((tech, techIdx) => (
                                        <span key={techIdx}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
</section>
}