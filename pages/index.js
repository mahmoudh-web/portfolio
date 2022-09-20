import AnimateIn from "../components/animation/AnimateIn"
import FadeIn from "../components/animation/FadeIn"

import Section from "../components/homePage/Section"
import latestProject from "../components/homePage/sections/latestProject"
import lab from "../components/homePage/sections/lab"
import Hero from "../components/homePage/Hero"

import { 
    AtSymbolIcon, 
    DevicePhoneMobileIcon, 
    ShoppingBagIcon,
    CircleStackIcon,
    CodeBracketSquareIcon,
    PresentationChartBarIcon
} from '@heroicons/react/24/outline'

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
                        <h2 className="text-3xl my-8">
                            I&apos;m <span className="font-bold text-orange-600">Mahmoud</span>, a full stack developer with an interest in great user experience. I&apos;m based in the UK and available to work remotely.
                        </h2>
                        <h3 className="text-3xl mt-8">I <span className="font-bold text-orange-600">build: &#123;</span></h3>
                        <div className="flex gap-2 flex-wrap mt-4 ml-8">
                            <p className="flex gap-1 items-center"><AtSymbolIcon className="text-orange-600 w-4 h-4"/>Websites,</p>
                            <p className="flex gap-1 items-center"><DevicePhoneMobileIcon className="text-orange-600 w-4 h-4"/>Web Apps,</p>
                            <p className="flex gap-1 items-center"><ShoppingBagIcon className="text-orange-600 w-4 h-4"/>Ecommerce Solutions,</p>
                            <p className="flex gap-1 items-center"><CircleStackIcon className="text-orange-600 w-4 h-4"/>Databases,</p>
                            <p className="flex gap-1 items-center"><CodeBracketSquareIcon className="text-orange-600 w-4 h-4"/>API&apos;s,</p>
                            <p className="flex gap-1 items-center"><PresentationChartBarIcon className="text-orange-600 w-4 h-4"/>Visualisations</p>
                        </div>
                        <h3 className="text-3xl mt-4 font-bold text-orange-600">&#125;</h3>
                    </Hero>
                </FadeIn>
            </div>
        </>
    )
}
