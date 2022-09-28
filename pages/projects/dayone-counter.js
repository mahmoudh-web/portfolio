import Link from "next/link"
import CounterApp from "../../components/projects/apps/CounterApp"
import GitHub from '../../icons/GitHub'

const DayOne = () => {
    return (  
        <div className="flex flex-col w-full h-full">
            <div className="border-b border-b-zinc-500 pb-4">
                <h2 className="text-3xl font-semibold mb-2">Simple Counter App</h2>
                <p className="">A simple counter app that allows you to increment/decrement the counter. The counter colour changes depending on the value being positive/negative</p>
                <a 
                    href='https://github.com/mahmoudh-web/portfolio/blob/f528517ba49434c3bf46731501defc67ed921e9d/components/projects/01/CounterApp.js'
                    target='_blank'
                    rel='noreferrer'
                >
                    <div className="
                            flex gap-2 
                            bg-zinc-800 text-neutral-200 
                            p-2 mt-2
                            rounded
                            w-max
                            cursor-pointer
                        "
                    >
                        <GitHub iconsize={24}/>
                        <p>View Code</p>
                    </div>
                </a>
            </div>
            <CounterApp />
        </div>
    )
}
 
export default DayOne