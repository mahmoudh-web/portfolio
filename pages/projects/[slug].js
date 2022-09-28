import Link from "next/link"
import projects from "../../components/homePage/sections/projects"
import GitHub from "../../icons/GitHub"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline"

export const getStaticPaths = () => {
    const paths = []
    
    projects.forEach(project => {
        paths.push({
            params: {
                slug: project.link
            }
        })
    })

    return {
        paths,
        fallback: false
    }
}
export const getStaticProps = ({params: {slug}}) => {
    const page = projects.find(project => project.link === slug)
    
    return {props: { page }}
}


const Project = ({ page }) => {
    const App = dynamic(() => import(`../../components/projects/apps/${page.AppComponent}`))
    return (  
        <div className="flex flex-col w-full h-full">
            <div className="mb-8">
                <Link href='/projects'>
                    <div className="flex gap-1 cursor-pointer w-max text-zinc-500 text-sm items-center">
                        <ArrowLeftCircleIcon className="w-6 h-6"/>
                        <p>Go Back</p>
                    </div>
                </Link>
            </div>
            <div className="border-b border-b-zinc-500 pb-4">
                <h2 className="text-3xl font-semibold mb-2">{page.title}</h2>
                <p className="">{page.description}</p>
                <a 
                    href={page.github}
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
            <Suspense fallback={`Loading...`}>
                <App />
            </Suspense>
        </div>
    )
}
 
export default Project