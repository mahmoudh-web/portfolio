import { useAppContext } from "../AppContext"
import Header from "../components/Header"

export default function Home() {
    const {darkMode, setDarkMode, theme} = useAppContext()

    return (
        <div className="flex flex-col h-screen w-screen">
            <Header />
            <div className="px-4 pb-4 flex flex-col justify-start items-baseline w-3/4">
                <h3 className="
                    text-3xl md:text-5xl
                    leading-snug md:leading-snug
                    ">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Hi, I'm <span className="font-bold text-orange-600">Mahmoud</span>,
                </h3>
                <h3 className="
                    text-3xl md:text-5xl
                    leading-snug md:leading-snug
                ">
                    a Full Stack Developer
                </h3>
                <p className="leading-loose">I have a keen eye for great user experiences.</p>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p className="leading-loose">Have a project in mind? <span className="font-bold cursor-pointer hover:text-orange-600">Let's Discuss it.</span></p>

            </div>
        </div>
    )
}
