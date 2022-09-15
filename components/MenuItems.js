import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppContext } from "../AppContext";

import GitHub from '../icons/GitHub'

const MenuItems = () => {
    const pages = ['Lab', 'Projects', 'About', 'Contact']
    const {toggleMenu} = useAppContext()

    const { pathname } = useRouter()
    
    const hoverVariants = {
        whileHover: {
            scale: 1.5,
            originX: 0
        }
    }


    const pagesEl = pages.map((page, i) => (
        <Link  key={i} href={`/${page.toLowerCase()}`} >
            <motion.p
                className={`
                cursor-pointer text-lg hover:text-orange-600
                ${pathname.startsWith(`/${page.toLowerCase()}`) ? 'font-bold text-orange-600' : ''}
                `}                
                variants={hoverVariants}
                whileHover="whileHover"
                onClick={toggleMenu}
            >
                {pathname.startsWith(`/${page.toLowerCase()}`) ? `{${page}}` : page}
            </motion.p>
        </Link>
    ))

    return (
        <div>
            <Link href='/'>
                <motion.p
                    className={`
                        cursor-pointer text-lg hover:text-orange-600
                        ${pathname === '/' ? 'font-bold text-orange-600' : ''}
                    `}
                    variants={hoverVariants}
                    whileHover="whileHover"
                    onClick={toggleMenu}
                    >
                    {pathname === '/' ? '{Home}' : 'Home'}
                </motion.p>

            </Link>
            {pagesEl}
            <div 
                className="cursor-pointer mt-4 hover:text-orange-600"
                variants={hoverVariants}
                whileHover="whileHover"
            >
                <motion.a 
                    href='https://github.com' target='_blank' rel="noreferrer"
                    variants={hoverVariants}
                    whileHover="whileHover"
                    onClick={toggleMenu}
                    >
                    <GitHub iconsize={24}/>
                </motion.a>
            </div>
        </div>
    )
}

export default MenuItems