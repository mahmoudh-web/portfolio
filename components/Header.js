import Link from "next/link"

const Header = () => {
    return (
        <Link href='/'>
            <div className="flex h-16 justify-end items-center border-b border-b-zinc-500 p-4">
                <h2 className="
                    text-zinc-500 font-bold 
                    text-md sm:text-xl
                    cursor-pointer
                ">
                    mahmoudh.com:<span className="text-orange-600">{`{Full Stack Developer}`}</span>
                </h2>
            </div>
        </Link>
    )
}

export default Header