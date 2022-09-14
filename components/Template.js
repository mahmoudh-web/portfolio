import Menu from '../components/Menu'

const Template = ({children}) => {
    return (
        <div className="
            absolute inset-0
            h-screen w-screen
            p-2"
        >
            <Menu />
            <div className="pl-14">
                {children}
            </div>
        </div>
    )
}

export default Template

// relative flex