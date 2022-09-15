import DarkToggle from "./DarkToggle"
import Hamburger from '../icons/Hamburger'

const SideHeader = ({onclick}) => {
    return (
        <div 
            className="
                flex flex-col justify-between items-center
                h-full
                border-r border-r-zinc-500
                p-2
            "
        >
            <div className="cursor-pointer" onClick={onclick}>
                <Hamburger iconsize={24}/>
            </div>
            <div className="flex flex-col h-full justify-between">
                <div className='flex gap-[2px] -rotate-90 translate-y-72 font-bold text-orange-600'>
                    <p>mahmoudh.com:</p>
                    <p>Full</p>
                    <p>Stack</p>
                    <p>Developer</p>
                </div>
                <DarkToggle />
            </div>
        </div>
    )
}

export default SideHeader