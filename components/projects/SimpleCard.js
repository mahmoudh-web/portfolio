import Link from "next/link"

const SimpleCard = ({project}) => {
    return ( 
        <div className="
                border border-zinc-500
                p-2
            "
        >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-lg font-semibold">{project.description}</p>
            <Link href={project.link}>
                <p className="cursor-pointer underline hover:font-semibold">Link</p>
            </Link>
        </div>
    )
}
 
export default SimpleCard