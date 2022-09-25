const ArticleList = ({list, type}) => {
    const items = list.map((item, i) => <li key={i}>{item}</li>)

    return ( 
        <>
            {type === 'ul' && 
                <ul className="list-square list-outside pl-8">
                    {items}
                </ul>
            }
            {type === 'ol' && 
                <ol className="list-decimal list-outside pl-8">
                    {items}
                </ol>
            }
        </>
    )
}
 
export default ArticleList