const SectionTitle = ({title, subtitle}) => {
    return ( 
        <div className="font-semibold text-3xl mb-4 tracking-tighter">
            <h2 className={!subtitle ? 'text-orange-600' : ''}>{title} =&gt; {subtitle ? <span className="text-orange-600">&#123;{subtitle}&#125;</span>: ''}</h2>
        </div>
    );
}
 
export default SectionTitle