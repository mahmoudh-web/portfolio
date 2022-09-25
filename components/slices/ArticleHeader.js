const ArticleHeader = ({content, size}) => {
    return ( 
        <h3 className={`
            ${size === '1' ? 'text-3xl' : ''}
            ${size === '2' ? 'text-2xl' : ''}
            ${size === '3' ? 'text-xl' : ''}
            font-semibold
            mb-2
        `}>
            {content}
        </h3>
    )
}
 
export default ArticleHeader