import AnimateIn from "../components/AnimateIn"

import Section from "../components/homePage/Section"
import latestProject from "../components/homePage/sections/latestProject"

export default function Home() {
    
    
    return (
        <div 
            className="
                text-xl
                flex flex-col md:flex-row w-full h-full gap-8
            "
        >
            <div className="md:w-2/3 grow h-max">
                <AnimateIn>
                    <Section section={latestProject} />
                </AnimateIn>
            </div>
            <div className="md:w-1/3 h-max">
                <AnimateIn start='100vw'>
                    <Section section={latestProject} />
                </AnimateIn>
            </div>
        </div>
    )
}
