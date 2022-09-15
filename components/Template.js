import { useAppContext } from '../AppContext'
import MenuBar from './MenuBar'

const Template = ({children}) => {

    const { height, mounted } = useAppContext()

    const heightString = `${height}px`
    return (
        <div 
            className="flex items-end w-full bg-red-200 p-8"
            style={{height: heightString}}
        >
            <p>test</p>
        </div>
    )
}

export default Template