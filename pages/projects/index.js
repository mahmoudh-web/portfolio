import SimpleCard from '../../components/projects/SimpleCard'
import projects from '../../components/homePage/sections/projects'

const Projects = () => {
    const projectsEl = projects.map((project, i) => <SimpleCard key={i} project={project} />)

    return ( 
        <div className='grid grid-cols-3 gap-4'>
            {projectsEl}
        </div>
    )
}
 
export default Projects