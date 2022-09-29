import SimpleCard from '../../components/projects/SimpleCard'
import projects from '../../components/homePage/sections/projects'

const Projects = () => {
    const projectsEl = projects.map((project, i) => <div className="flex flex-col h-full w-full" key={i}><SimpleCard  project={project} /></div>)

    return ( 
        <div className='
                max-w-screen-lg mx-auto
                sm:grid sm:grid-cols-3
                flex flex-col gap-4
            '
        >
                {projectsEl}
        </div>
    )
}
 
export default Projects