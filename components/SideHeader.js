import DarkToggle from "./DarkToggle"
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const SideHeader = ({onclick, menustate}) => {
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
                {!menustate && <Bars3Icon className="w-6 h-6"/>}
                {menustate && <XMarkIcon className="w-6 h-6"/>}
            </div>

            <DarkToggle />
        </div>
    )
}

export default SideHeader