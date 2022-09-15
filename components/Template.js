import { useAppContext } from '../AppContext'
import MenuBar from './MenuBar'
import DarkToggle from './DarkToggle'

const Template = ({children}) => {

    const { height, mounted } = useAppContext()

    const heightString = `${height}px`
    
    if (!mounted) {
        return null
    }
    
    return (
        <div 
            className="flex w-full overflow-hidden"
            style={{height: heightString}}
        
        >
            <MenuBar />
            
        </div>
    )
}

export default Template