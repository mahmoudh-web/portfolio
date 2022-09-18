import SectionTitle from "../SectionTitle"
import Btn from "../buttons/Btn"

const Section = ({section}) => {

    let buttons = ''
    
    if (section.buttons.length) {
        buttons =  (
            <div className="flex gap-4 flex-wrap py-4">
                {section.buttons.map(button => (
                    <Btn key={button.content} button={button} />
                ))}
            </div>
        )
    }

    return ( 
        <div className="
        flex flex-col
        h-max w-full
        pb-4
        border-b border-b-zinc-500
        "
    >
        <SectionTitle title={section.title} subtitle={section.subtitle} />
        <p>{section.body}</p>
        {buttons}
    </div>
    )
}
 
export default Section