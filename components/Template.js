import { useAppContext } from '../AppContext'
import { useRealViewport } from "next-real-viewport"

import Menu from '../components/Menu'
import MenuBar from './MenuBar'

const Template = ({children}) => {

    const {width, height, open, handleCloseMenu, mounted} = useAppContext()
    const { vw, vh } = useRealViewport()

    if (!mounted) {
        return null
    }

    return (
        <div className={`
            relative flex
            h-[${vh * 100}px] w-screen
            overflow-hidden
            `}
        >
            <MenuBar vw={vw} vh={vh}/>

            <div className='grow flex flex-col'>
                <div className='bg-blue-200 h-12 pl-16'>Header Bar</div>
                <div className='bg-blue-400 grow'>
                    <p>Main Section 2</p>
                    <p>{`${vh * 100} x ${width}`}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Template