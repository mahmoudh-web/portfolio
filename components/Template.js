import { useAppContext } from '../AppContext'

import Menu from '../components/Menu'
import MenuBar from './MenuBar'

const Template = ({children}) => {

    const {width, height, mounted} = useAppContext()

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
            <MenuBar />

            <div className='flex flex-col w-full'>
                <div className='bg-blue-200 h-12 pl-16'>Header Bar</div>
                <div className='bg-blue-400 grow'>
                    <p>Main Section 2</p>
                    <p>{`${height} x ${width}`}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Template