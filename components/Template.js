import { useAppContext } from '../AppContext'
import Menu from '../components/Menu'

const Template = ({children}) => {

    const {width, height} = useAppContext()

    return (
        <div className={`
            absolute inset-0
            h-[${height}] w-[${width}]
            p-2`}
        >
            <Menu />
            <div className="pl-14">
                <p>{`${width}`}x{`${height}`}</p>
                {children}
            </div>
        </div>
    )
}

export default Template

// relative flex