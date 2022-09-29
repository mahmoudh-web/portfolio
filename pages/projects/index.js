import SimpleCard from '../../components/projects/SimpleCard'
import projects from '../../components/homePage/sections/projects'

const Projects = () => {
    const projectsEl = projects.map((project, i) => <div className="flex flex-col h-full w-full" key={i}><SimpleCard  project={project} /></div>)

    return ( 
        <div className='
                container
                sm:grid sm:grid-cols-2 sm:my-auto
                flex flex-col gap-4
            '
        >
                {projectsEl}
        </div>
    )
}
 
export default Projects