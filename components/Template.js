import { useAppContext } from '../AppContext'
import Menu from '../components/Menu'

const Template = ({children}) => {

    const {width, height, open, handleCloseMenu} = useAppContext()

    return (
        <div className={`
            relative flex
            h-screen w-screen
            overflow-hidden
            `}
        >
            <div className={`h-[${height}] bg-neutral-300 dark:bg-zinc-800`}>
                <Menu />
            </div>
            {open && (
                <div className="w-full h-full bg-zinc-800 opacity-50 absolute" onClick={handleCloseMenu}></div>
            )}
            <div className="pl-16 overflow-y-auto" onClick={handleCloseMenu}>
                {children}
            </div>
        </div>
    )
}

export default Template