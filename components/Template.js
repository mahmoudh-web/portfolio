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
                flex flex-col w-full overflow-hidden overflow-y-clip
                bg-neutral-200 dark:bg-zinc-800
                text-zinc-800 dark:text-neutral-200
            "
            style={{height: heightString}}
        
        >
            <MenuBar />
            <div 
                className="
                    flex flex-col
                    overflow-y-auto overscroll-none
                    "
            >
                <Header />
                <div className="pl-20 pr-8 py-8">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Template