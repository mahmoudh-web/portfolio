import { useState } from "react"
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/outline'

const CounterApp = () => {
    const [count, setCount] = useState(0)
    const icons = `w-12 h-12 cursor-pointer`

    const handleCount = (direction) => {
        if (direction === 'down') {
            setCount(prev => prev - 1)
        }

        if (direction === 'up') {
            setCount(prev => prev + 1)
        }   

        if (direction === 'reset') {
            setCount(0)
        }   
    }

    return (  
        <div className="
                w-full
                flex flex-col justify-center items-center
                my-8
            "
        >
            <div className="
                    w-full sm:w-3/4 md:w-2/3 lg:w-1/2
                    p-4
                    bg-zinc-800
                    text-neutral-200
                    rounded
                    shadow-md
                    flex flex-col items-center
                "
            >
                <h3 className="text-xl font-semibold mb-4">Counter</h3>
                <div className="flex gap-4 text-4xl items-center">
                    <MinusCircleIcon className={icons} onClick={() => handleCount('down')}/>
                    <p className={`
                            text-8xl font-semibold
                            ${count < 0 ? 'text-red-600' : ''}
                            ${count > 0 ? 'text-green-600' : ''}
                        `}
                    >
                        {count}
                    </p>
                    <PlusCircleIcon className={icons} onClick={() => handleCount('up')}/>
                </div>
                <div className="margin-auto mt-4">
                    <p 
                        className="p-2 bg-neutral-200 text-zinc-800 rounded cursor-pointer"
                        onClick={() => handleCount('reset')}
                    >
                        RESET
                    </p>
                </div>
            </div>
        </div>

    )
}
 
export default CounterApp