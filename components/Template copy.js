import { useAppContext } from '../AppContext'
import Menu from '../components/Menu'

const Template = ({children}) => {

    const {width, height, open, handleCloseMenu, mounted} = useAppContext()

    if (!mounted) {
        return null
    }

    return (
        <div className={`
            relative flex
            h-screen w-screen
            overflow-hidden
            `}
        >
            <div className={`absolute top-0 bottom-0 bg-neutral-300 dark:bg-zinc-800 z-50`}>
                <Menu />
            </div>
            {open && (
                <div className="w-full h-full bg-zinc-800 opacity-50 absolute z-10" onClick={handleCloseMenu}></div>
            )}
            <div className="pl-16 pt-4 overflow-y-auto" onClick={handleCloseMenu}>
                {children}
            </div>
        </div>
    )
}

export default Template