import Link from "next/link"

const Header = () => {
    return (
        <Link href='/'>
            <div className="flex h-16 justify-end items-center border-b border-b-zinc-500 p-4">
                <div className="cursor-pointer flex gap-1">
                    <h2 className="text-zinc-500 font-bold text-xl">mahmoudh.com:</h2>
                    <h2 className="text-orange-600 font-bold text-xl">{`{Full Stack Developer}`}</h2>
                </div>
            </div>
        </Link>
    )
}

export default Header