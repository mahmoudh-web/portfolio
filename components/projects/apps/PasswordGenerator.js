import { useState } from "react"

const PasswordGenerator = () => {

    const upperChars = [...Array(26)].map((x, i) => i + 65).map(y => String.fromCharCode(y))
    const lowerChars = [...Array(26)].map((x, i) => i + 97).map(y => String.fromCharCode(y))
    const numberChars = [...Array(10)].map((x, i) => i )
    const specialChars = ["!","#","$","%","&","(",")","*","+","/","<","=",">","?"]

    const [parameters, setParameters] = useState({
        characterLength: 16,
        uppercase: true,
        lowercase: true,
        numbers: true,
        special: true
    })

    const [password, setPassword] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()

    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        
        setParameters(prev => {
            return {
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            }
        })
        
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
                    flex flex-col
                "
            >
                <h3 className="text-xl font-semibold mb-8 self-center">Password Generator</h3>
                <form onSubmit={handleSubmit}>
                    <div className="flex gap-2 mb-4 border-b border-b-neutral-600 pb-4 items-center">
                        <label htmlFor="characterLength">No. of characters</label>
                        <input 
                            type="number" 
                            name="characterLength" 
                            className="w-16 text-zinc-800 p-1"
                            value={parameters.characterLength}
                            onChange={handleChange}
                        />
                    </div>
                    <h3 className="font-semibold mb-2 text-orange-600">Letters</h3>
                    <div className="grid grid-cols-2 border-b border-b-neutral-600 pb-4 mb-4">
                        <div>
                            <input 
                                type="checkbox" 
                                name="uppercase"
                                checked={parameters.uppercase}
                                onChange={handleChange}
                            />
                            <label htmlFor="uppercase"> Use uppercase letters</label>
                        </div>
                    </div>
                    <h3 className="font-semibold mb-2 text-orange-600">Numbers &amp; Special Characters</h3>
                    <div className="grid grid-cols-2 pb-4">
                        <div>
                            <input 
                                type="checkbox" 
                                name="numbers" 
                                checked={parameters.numbers}
                                onChange={handleChange}
                                />
                            <label htmlFor="numbers"> Use numbers</label>
                        </div>
                        <div>
                            <input 
                                type="checkbox" 
                                name="special" 
                                checked={parameters.special}
                                onChange={handleChange}
                            />
                            <label htmlFor="special"> Use special characters</label>
                        </div>
                    </div>

                    <button className="
                            px-4 py-2
                            bg-orange-600
                            text-white
                            mt-8
                        "
                        onClick={handleSubmit}

                    >
                        Generate Password
                    </button>
                </form>
                {password && <div className="mt-8">
                    <p>Your generated password is:</p>
                    {password}
                </div>}
            </div>
            <pre>{JSON.stringify(parameters, null, 2)}</pre>
            <pre>{JSON.stringify(password)}</pre>
            <pre>{JSON.stringify(upperChars)}</pre>
            <pre>{JSON.stringify(lowerChars)}</pre>
            <pre>{JSON.stringify(numberChars)}</pre>
            <pre>{JSON.stringify(specialChars)}</pre>
        </div>
    )
}
 
export default PasswordGenerator