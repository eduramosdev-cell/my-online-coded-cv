import { ArrowUpRight } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { AnimatedBorderButton } from "../components/AnimatedBorderButton"

const projects = [
    {
        title: "Online Resume",
        description: "My online resume",
        image: "/projects/Resume-project-screenshot.jpeg",
        tags: ["React, Tailwind CSS"],
        link: "https://github.com/eduramosdev-cell/my-online-coded-cv",
        github: "https://github.com/eduramosdev-cell/my-online-coded-cv"
    },
    {
        title: "Movies App",
        description: "A simple API consuming movie app built with React Query and Tailwind CSS.",
        image: "/projects/movies-app-project.png",
        tags: ["React, Tailwind CSS"],
        link: "https://github.com/eduramosdev-cell/Movies-app",
        github: "https://github.com/eduramosdev-cell/Movies-app"
    }
]

export const Projects = () => {
    return <section id="projects" className="py-32 relative overflow-hidden">
        {/*BG glows*/}
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
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />
                            {/*Overlay links*/}
                            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a href={project.link} target="_blank" className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                    <ArrowUpRight className="w-5 h-5"/>
                                </a>
                                <a  href={project.github} target="_blank" className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                    <FaGithub className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                        {/*Content*/}
                        <div className="p-6 space-y-4">
                            <div className="flex items-start justify-between">
                                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"/>
                            </div>
                            <p className="text-muted-foreground text-sm">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, tagIdx) => (
                                    <span key={tagIdx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transiltion-all duration-300">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/*View all CTA*/}
            <div className="text-center mt-12 animate-fade-in animation-delay-500">
                <AnimatedBorderButton href="https://github.com/repos?q=owner%3A%40me" target="_blank">
                    View All Projects
                    <ArrowUpRight className="w-5 h-5" />
                </AnimatedBorderButton>
            </div>
        </div>
    </section>
}