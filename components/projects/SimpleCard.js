import Link from "next/link"

const SimpleCard = ({project}) => {
    return ( 
        <div className="
                border border-zinc-500
                p-2
                h-full
                flex flex-col justify-between
            "
        >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-md grow">{project.description}</p>
            <Link href={`/projects/${project.link}`}>
                <p className="cursor-pointer underline hover:font-semibold">Link</p>
            </Link>
        </div>
    )
}
 
export default SimpleCard