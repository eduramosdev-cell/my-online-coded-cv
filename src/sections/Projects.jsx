const projects = [
    {
        title: "Online Resume",
        description: "My online CV",
        image: "/projects/Resume-project-screenshot.jpeg",
        tags: ["React, Tailwind CSS"],
        link: "#",
        github: "#"
    }
]

export const Projects = () => {
    return <section id="projects" className="py-32 relative overflow-hidden">
        {/*BG glows*/}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
            {/*Section Header*/}
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                    Featured Work
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                    Projects that
                    <span className="font-serif italic font-normal text-white"> make an impact.</span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    A selection of my recent work, from complex web applications to innovative tools that solve real-world problems.
                </p>
            </div>
            {/*Projects Grid*/}
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <div 
                    key={idx} 
                    className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                    style={{ animationDelay: `${(idx+1)*100}ms`}}
                    >
                        {/*image*/}
                        <div className="realtive overflow-hidden aspect-video">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}