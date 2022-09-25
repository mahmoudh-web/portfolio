const Filter = ({tags}) => {
    const tagsEl = tags.map(tag => {
        return (
            <p 
                key={tag}
                className="border border-zinc-500 px-2 cursor-pointer"
            >
                {tag}
            </p>
        )
    })
    return ( 
        <div className="flex gap-8
        mb-8 py-4 items-center">
            <p>Filter: </p>
            <div className="flex gap-4">{tagsEl}</div>
        </div>
    )
}
 
export default Filter;