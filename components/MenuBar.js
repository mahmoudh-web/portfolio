import { AnimatePresence, motion } from "framer-motion"
import SideHeader from "./SideHeader"
import MenuItems from './MenuItems'
import { useAppContext } from "../AppContext"

const MenuBar = ({vw, vh}) => {
    const {menuOpen, toggleMenu} = useAppContext()

    return (
        <>
        <motion.div 
            className={`
                absolute
                flex 
                top-0 bottom-0
                ${menuOpen ? '-left-4' : '-left-60'} 
                w-72
                z-50
                bg-neutral-200 dark:bg-zinc-800
                `}
            layout
            transition={{type:'spring', stiffness: 1000, damping: 40 }}
        >
            <div className={`flex h-full grow px-8 py-12`}>
                <MenuItems />
            </div>
            <div 
                className="w-12 h-full flex flex-col justify-between overflow-clip"
            >
                <SideHeader onclick={toggleMenu} menustate={menuOpen}/>
            </div>

        </motion.div>
            <AnimatePresence>
                
            {menuOpen && (
                <motion.div
                    layout
                    initial={{opacity: 0}}
                    animate={{opacity: 0.3}}
                    exit={{opacity: 0}}
                    transition={{type: 'linear'}}
                    onClick={toggleMenu}
                    className="absolute top-0 bottom-0 left-0 right-0 h-full w-full bg-black opacity-30 z-40"
                >

                </motion.div>
            )}
            </AnimatePresence>
            </>
    )
}

export default MenuBar