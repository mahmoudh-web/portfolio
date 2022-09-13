import { useState } from "react";
import { motion } from "framer-motion";
import { useAppContext } from "../AppContext";
import Hamburger from '../icons/Hamburger'
import CloseMenu from '../icons/CloseMenu'
import DarkToggle from "./DarkToggle";
import MenuItems from "./MenuItems";

const mainVariants = {
    initial: {
        x: '-100vw'
    },
    animate: {
        x: 0
    }
}

const Menu = () => {
    const {theme, setDarkMode} = useAppContext()

    const [open, setOpen] = useState(false)


    return (
        <motion.div 
            variants={mainVariants}
            initial = "initial"
            animate="animate"
            className={`
                absolute top-0 bottom-0 
                h-full
                z-50
                `}
                >
            <motion.div 
                layout
                transition={{type: 'linear', originX: 0}}
                className={`
                    ${open ? 'w-96 border-r-2': 'w-12'}
                    border-r border-r-zinc-800 dark:border-r-neutral-300
                    bg-neutral-300 dark:bg-zinc-800
                    flex flex-col justify-between items-start gap-8
                    absolute top-2 bottom-2
                `}
            >
                <motion.div 
                    layout
                    className="cursor-pointer"
                    onClick={() => setOpen(prev => !prev)}
                >
                    {!open && <Hamburger iconsize={24}/>}
                    {open && <CloseMenu iconsize={24}/>}
                </motion.div>

                {open && (
                    <div className="grow">
                        <MenuItems />
                    </div>
                )}
                
                <motion.div layout>
                    <DarkToggle/>
                </motion.div>

            </motion.div>
        </motion.div>
    )
}

export default Menu