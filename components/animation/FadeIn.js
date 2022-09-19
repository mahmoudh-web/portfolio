import { motion } from "framer-motion"

const FadeIn = ({children, start = '-100vw'}) => {
    const sectionVariants = {
        initial: {opacity: 0},
        end: {opacity: 1, transition: {duration: 0.75}},
    }
    
    return ( 

        <motion.div
                variants={sectionVariants}
                initial="initial"
                animate="end"
                transition="transition"
                className="h-full w-full"
            >
                {children}
            </motion.div>
    )
}
 
export default FadeIn