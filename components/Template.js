import { useAppContext } from '../AppContext'
import Menu from '../components/Menu'
import MenuBar from './MenuBar'

const Template = ({children}) => {

    const {width, height, open, handleCloseMenu, mounted} = useAppContext()

    return (
        <div className={`
            relative flex
            h-screen w-screen
            overflow-hidden
            `}
        >
            <MenuBar />

            <div className='grow flex flex-col'>
                <div className='bg-blue-200 h-12 pl-16'>Header Bar</div>
                <div className='bg-blue-400 grow'>Main Section</div>
            </div>
        </div>
    )
}

export default Template