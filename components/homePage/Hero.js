const Hero = ({children}) => {
    return ( 
        <div 
            className="
                flex
                w-full
                px-8 py-16
                justify-center
            "
        >
                <div className="max-w-screen-md">
                    {children}
                </div>
        </div>
    )
}
 
export default Hero