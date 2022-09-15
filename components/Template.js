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
            className="flex flex-col w-full overflow-hidden"
            style={{height: heightString}}
        
        >
            <MenuBar />
            <div className="flex flex-col overflow-y-auto overscroll-none">
                <Header />
                <div className="pl-16 pr-4 py-4">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Template