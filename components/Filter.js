const Filter = ({tags, filters, onclick}) => {
    const tagsEl = tags.map(tag => {
        return (
            <button 
                key={tag}
                className={`
                    ${filters.includes(tag) ? 'bg-zinc-500' : ''}
                    border border-zinc-500 
                    px-2 
                    cursor-pointer
                    hover:bg-zinc-500 hover:text-neutral-200
                `}
                value={tag}
                onClick={onclick}
            >
                {tag}
            </button>
        )
    })
    return ( 
        <div className="flex gap-8
        mb-8 py-4 items-start">
            <p className="font-bold">Filter: </p>
            <div className="flex overflow-y-scroll gap-4">{tagsEl}</div>
        </div>
    )
}
 
export default Filter;