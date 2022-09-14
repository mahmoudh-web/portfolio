import { motion } from "framer-motion"
import { useState } from "react"
import { useAppContext } from "../AppContext"

const MenuBar = () => {
    const { height } = useAppContext()
    const [menuOpen, setMenuOpen] = useState(false)
    
    const toggleMenu = () => {
        setMenuOpen(prev => !prev)
    }
    return (

        <motion.div 
            className={`
                absolute 
                flex 
                top-0 bottom-0 
                ${menuOpen ? '-left-4' : '-left-60'} 
                w-72`}
            layout
            transition={{type:'spring', stiffness: 1000, damping: 40 }}
        >
            <div className={`flex h-full grow bg-blue-900 px-8 py-4 items-end justify-end text-white`}>
                <p>Menu Bar</p>
            </div>
            <div 
                className="w-12 h-12 bg-red-900 cursor-pointer"
                onClick={toggleMenu}
            >

            </div>

        </motion.div>
    )
}

export default MenuBar