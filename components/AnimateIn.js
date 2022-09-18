import { motion } from "framer-motion"

const AnimateIn = ({children, start = '-100vw'}) => {
    const sectionVariants = {
        initial: {x: start},
        end:{x: 0}
    }
    
    return ( 

        <motion.div
                variants={sectionVariants}
                initial="initial"
                animate="end"
            >
                {children}
            </motion.div>
    )
}
 
export default AnimateIn