import { Button } from "../components/Button"
import { AnimatedBorderButton } from "../components/AnimatedBorderButton"
import { ArrowRight } from "lucide-react"
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";


export const Hero = () => {

    return <section className="relative min-h-screen flex items-center overflow-hidden">
        {/*Bg*/}
        <div className="absolute inset-0">
            <img src="/projects/Hero-bg.png" alt="Hero Background " className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
        </div>

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
                        <Button size="lg">Contact Me: <ArrowRight className="w-5 h-5" /></Button>
                        <AnimatedBorderButton />
                    </div>
                    {/*Social links*/}
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                        <span className="text-sm text-muted-foreground">Follow me:</span>
                        {[
                            {icon: FaGithub, href:"#"},
                            {icon: FaLinkedin, href:"#"},
                            {icon: FaXTwitter, href:"#"}
                            ].map((social, idx) => {
                                const Icon = social.icon
                                return (
                                <a href={social.href} key={idx} className="p-2 ronded-full glass bg-transparent hover:bg-primary/10 hover:text-primary transition-all duration-300">
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
                            <img src="public\projects\profile-pic.png" alt="Eduardo Ramos" className="w-full aspect-[4/5] object-cover rounded-2xl" />

                            {/*floating badge*/}
                            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-foreground rounded-full animate-pulse" />
                                    <span className="text-sm font-medium">Available for work</span>
                                </div>
                            </div>
                            {/*Stats badge*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}