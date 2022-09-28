import Link from "next/link"

const ProjectBanner = ({tag, project}) => {
    return ( 
        <div 
            className="
                flex
                w-full
                p-8
                justify-center
            "
        >
                <div className="flex flex-col w-full items-start gap-4 max-w-screen-md bg-zinc-900 text-neutral-200 p-8">
                    <h3 className="bg-orange-600 px-4 py-2 font-semibold w-max">{tag}</h3>
                    <div className="w-full">
                        <p className="text-xl font-semibold">{project.title}</p>
                        <p className="shrink">{project.description}</p>
                        <Link href={`/projects/${project.link}`}>
                            <p className="cursor-pointer self-end hover:font-semibold underline">Read More...</p>
                        </Link>
                    </div>
                </div>
        </div>
    )
}
 
export default ProjectBanner