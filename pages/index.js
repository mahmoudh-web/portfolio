import AnimateIn from "../components/animation/AnimateIn"
import FadeIn from "../components/animation/FadeIn"
import Link from "next/link"

import Hero from "../components/homePage/Hero"
import ProjectBanner from "../components/homePage/ProjectBanner"
import projects from "../components/homePage/sections/projects"


export default function Home() {    
    const projectHighlight = projects.slice(-1).pop()

    return (
        <>
            <div 
                className="
                flex flex-col
                w-full h-full
                overflow-hidden
                "
            >
                <AnimateIn>
                    <Hero>
                        <h2 className="text-3xl mb-2">Hi, I&apos;m <span className="text-orange-600">Mahmoud</span>, and this is my #100 days of code</h2>
                        <p className="text-xl">Each day for 100 days, I will code a mini-project using Javascript and React.</p>
                    </Hero>
                </AnimateIn>
                <FadeIn>
                    <ProjectBanner tag='Latest Project' project={projectHighlight}/>
                </FadeIn>
                <FadeIn>
                    <Hero>
                        <Link href="/projects">
                            <p className="
                                    border border-zinc-800
                                    hover:bg-zinc-800 hover:text-neutral-200
                                    px-4 py-2
                                    cursor-pointer
                                    "
                                    >
                                See All Projects
                            </p>
                        </Link>
                    </Hero>
                </FadeIn>
            </div>
        </>
    )
}
