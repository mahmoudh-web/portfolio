import { motion } from "framer-motion"
import { useAppContext } from "../AppContext"

const DarkToggle = () => {
    const { theme, changeTheme } = useAppContext()

    return (
        <div className="flex flex-col items-center gap-2">
            <p>L</p>
            <motion.div
                layout
                className={`
                    flex ${theme === 'light' ? 'items-start' : 'items-end'} 
                    w-6 h-10 border 
                    border-zinc-800 dark:border-neutral-300
                    cursor-pointer
                    p-1
                `}
                onClick={changeTheme}
            >
                <motion.div 
                    layout
                    transition={{type: 'linear'}}
                    className="w-4 h-4 bg-zinc-800 dark:bg-neutral-300"></motion.div>
            </motion.div>
            <p>D</p>
        </div>
    )
}

export default DarkToggle