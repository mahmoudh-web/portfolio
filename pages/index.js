import { useAppContext } from "../AppContext"

export default function Home() {
    const {darkMode, setDarkMode, theme} = useAppContext()

    return (
        <div className="flex flex-col h-screen w-screen justify-center items-center">
            <h1 className='text-8xl font-bold'>{`{mahmoud.h}`}</h1>
            <h3 className="text-6xl mt-6">Frontend Developer</h3>
            <h3 className="mt-4">Website coming soon....</h3>
        </div>
    )
}
