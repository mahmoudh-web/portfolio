import AnimateIn from "../components/animation/AnimateIn"
import FadeIn from "../components/animation/FadeIn"

import Section from "../components/homePage/Section"
import latestProject from "../components/homePage/sections/latestProject"
import lab from "../components/homePage/sections/lab"
import Hero from "../components/homePage/Hero"

export default function Home() {
    
    
    return (
        <>
            <div 
                className="
                flex flex-col lg:flex-row
                lg:divide-x divide-zinc-500
                w-full min-h-fit
                overflow-hidden
                "
                >
                <div className="flex lg:w-2/3 lg:px-4">
                    <AnimateIn>
                        <Section section={latestProject} />
                    </AnimateIn>
                </div>
                <div className="flex lg:w-1/3 lg:px-4 mt-8 lg:mt-0">
                    <AnimateIn start='100vw'>
                        <Section section={lab} />
                    </AnimateIn>
                </div>
            </div>
            <div className="lg:px-4">
                <FadeIn>
                    <Hero>
                        <h2 
                            className="
                                text-3xl text-center
                                border-l-8 border-x-zinc-500
                                pl-4
                            "
                        >
                            I&apos;m <span className="font-bold text-orange-600">Mahmoud</span>, a full stack developer with an interest in great user experience
                        </h2>
                    </Hero>
                </FadeIn>
            </div>
        </>
    )
}
