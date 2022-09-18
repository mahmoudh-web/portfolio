import { useAppContext } from '../AppContext'
import Header from './Header'
import MenuBar from './MenuBar'

const Template = ({children}) => {

    const { height, mounted } = useAppContext()

    const heightString = `${height}px`
    
    if (!mounted) {
        return null
    }
    
    return (
        <div 
            className="
                flex flex-col w-full h-full overflow-hidden
                bg-neutral-200 dark:bg-zinc-800
                text-zinc-800 dark:text-neutral-200
            "
            style={{height: heightString}}
        
        >
            <MenuBar />
            <div 
                className="
                    flex flex-col
                    h-full
                    overflow-y-auto overscroll-none
                    "
            >
                <Header />
                <div className="pl-20 pr-4 py-8 h-full">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Template