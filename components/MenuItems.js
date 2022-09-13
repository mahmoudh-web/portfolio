import { motion } from "framer-motion";
import Link from "next/link";

import GitHub from '../icons/GitHub'

const MenuItems = () => {
    const pages = ['Lab', 'Projects', 'About', 'Contact']

    const pagesEl = pages.map((page, i) => (
        <Link  key={i} href={`/${page.toLowerCase()}`} >
            <motion.p
                className="cursor-pointer text-lg hover:text-orange-600"
                whileHover={{
                    scale: 1.5,
                    originX: 0
                }}
            >
                {`${page}`}
            </motion.p>
        </Link>
    ))

    return (
        <div>
            {pagesEl}
            <div 
                className="cursor-pointer mt-4 hover:text-orange-600"
                whileHover={{
                    scale: 1.5,
                    originX: 0
                }}
            >
                <motion.a href='https://github.com' target='_blank' rel="noreferrer">
                    <GitHub iconsize={24}/>
                </motion.a>
            </div>
        </div>
    )
}

export default MenuItems