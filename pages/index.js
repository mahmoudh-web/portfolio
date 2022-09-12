import { useAppContext } from "../AppContext"
import Header from "../components/Header"

export default function Home() {
    const {darkMode, setDarkMode, theme} = useAppContext()

    return (
        <div className="flex flex-col h-screen w-screen">
            <Header />
            <div className="px-4 pb-4 flex flex-col justify-between h-full">
                <h3 className="
                    text-4xl md:text-6xl font-bold
                    mt-6
                ">
                    Full Stack Developer
                </h3>
                <h3 className="
                    text-2xl md:text-4xl
                    mt-4
                    self-end
                ">
                    Website coming soon....
                </h3>
            </div>
        </div>
    )
}
