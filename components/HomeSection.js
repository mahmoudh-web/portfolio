const HomeSection = ({children}) => {
    return ( 
        <section 
        className="
            flex flex-col
            min-h-1/2 w-full 
            relative 
            bg-zinc-600 dark:bg-zinc-400
            "
        >
            <div className="
                absolute 
                bg-neutral-300 dark:bg-neutral-600
                h-full w-full 
                -left-2 -top-2
                p-4
                "
            >
                {/* content area */}
                {children}
            </div>
        </section>

     );
}
 
export default HomeSection;