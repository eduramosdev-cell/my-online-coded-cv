import { Button } from "../components/Button"
import { AnimatedBorderButton } from "../components/AnimatedBorderButton"
import { ArrowRight, ChevronDown, Download } from "lucide-react"
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";

const skills = [
    "React",
    "Tailwind CSS",
    "GitHub Actions"
]

export const Hero = () => {

    return <section className="relative min-h-screen flex items-center overflow-hidden">

        {/*Blue Dots*/}
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
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Text Content */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            Software Engineer - React Especialist
                        </span>
                    </div>
                    {/* Headline */}
                    <div className="space-y-4 ">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                            Crafting <span className="text-primary glow-text">digital</span>
                            <br />
                            experiences with 
                            <br />
                            <span className="font-serif italic font-normal text-white">
                                precision.
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                            I am a passionate software engineer specializing in React, dedicated to creating seamless and engaging digital experiences. With a keen eye for detail and a commitment to excellence, I strive to deliver high-quality solutions that exceed expectations.
                        </p>
                    </div>
                    {/*CTA Buttons*/}
                    <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                        <Button href="#contact" size="lg">Contact Me: <ArrowRight className="w-5 h-5" /></Button>
                        <AnimatedBorderButton href="\projects\E_Ramos_eng_resume_2026.pdf" download="E_Ramos_eng_resume_2026.pdf">
                            <Download className="w-5 h-5" />
                            Download CV
                        </AnimatedBorderButton>
                    </div>
                    {/*Social links*/}
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                        <span className="text-sm text-muted-foreground">Follow me:</span>
                        {[
                            {icon: FaGithub, href:"https://github.com/repos?q=owner%3A%40me"},
                            {icon: FaLinkedin, href:"https://www.linkedin.com/in/eduardo-ramos-959610425/?isSelfProfile=true"},
                            ].map((social, idx) => {
                                const Icon = social.icon
                                return (
                                <a href={social.href} target="_blank" key={idx} className="p-2 ronded-full glass bg-transparent hover:bg-primary/10 hover:text-primary transition-all duration-300">
                                    <Icon className="w-5 h-5"/>
                                </a>
                                )
                        })}
                    </div>
                </div>
                {/* Right Column - Image profile */}
                <div className="relative animate-fade-in animation-delay-300">
                    {/*Profile image*/}
                    <div className="relative max-w-md mx-auto">
                        <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"/>
                        <div className="relative glass rounded-3xl p-2 glow-border">
                            <img src="\projects\profile_pic.png" alt="Eduardo Ramos" className="w-full aspect-[4/5] object-cover rounded-2xl" />

                            {/*floating badge*/}
                            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-foreground rounded-full animate-pulse" />
                                    <span className="text-sm font-medium">Available for work</span>
                                </div>
                            </div>
                            {/*Stats badge*/}
                            <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                                <div className="text-2xl font-bold text-primary">1</div>
                                <div className="text-xs text-muted-foreground">Year Exp.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Skills section*/}
            <div className="mt-20 animate-fade-in animation-delay-500">
                <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I work with</p>
                <div className="relative overflow-hidden">
                    <div className="flex animate-marquee">
                        {[...skills, ...skills].map((skill, idx) => (
                            <div key={idx} className="shrink-0 px-8 py-4">
                                <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
            <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                <span className="text-xs uppercase tracking-wider">Scroll</span>
                <ChevronDown className="w-6 h-6 animate-bounce" />
            </a>
        </div>
    </section>
}