import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppContext } from "../AppContext";

import GitHub from '../icons/GitHub'
// import { 
//     BeakerIcon,
//     ChatBubbleLeftEllipsisIcon,
//     HomeIcon, InformationCircleIcon, RectangleStackIcon, 
// } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/24/outline'
import pages from "./menuPages";

const MenuItems = () => {

    const {toggleMenu} = useAppContext()

    const { pathname } = useRouter()
    
    const hoverVariants = {
        whileHover: {
            scale: 1.5,
            originX: 0
        }
    }

    const pagesEl = pages.map((page, i) => {

        const Icon = page.icon
        return (
            <Link key={i} href={`/${page.title.toLowerCase()}`}>
                <motion.div
                    className={`
                    cursor-pointer text-lg hover:text-orange-600 leading-8
                    ${pathname.startsWith(`/${page.title.toLowerCase()}`) ? 'font-semibold text-orange-600' : ''}
                    flex gap-1 items-center
                    `}
                    variants={hoverVariants}
                    whileHover="whileHover"
                    onClick={toggleMenu}
                    >
                    <Icon className="w-4 h-4"/>
                    <p>{pathname.startsWith(`/${page.title.toLowerCase()}`) ? `{${page.title}}` : page.title}</p>
                </motion.div>
            </Link>
        )

    })

    return (
        <div>
            <Link href='/'>
                <motion.div
                    className={`
                        cursor-pointer text-lg hover:text-orange-600 leading-8
                        ${pathname === '/' ? 'font-semibold text-orange-600' : ''}
                        flex gap-1 items-center
                    `}
                    variants={hoverVariants}
                    whileHover="whileHover"
                    onClick={toggleMenu}
                    >
                    <HomeIcon className="w-4 h-4"/>
                    <p>{pathname === '/' ? '{Home}' : 'Home'}</p>
                </motion.div>

            </Link>
            {pagesEl}
            <div 
                className="cursor-pointer mt-4 hover:text-orange-600"
                variants={hoverVariants}
                whileHover="whileHover"
            >
                <motion.a 
                    href='https://github.com/mahmoudh-web' target='_blank' rel="noreferrer"
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