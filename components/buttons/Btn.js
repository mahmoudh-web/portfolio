import Link from "next/link";

const Btn = ({button}) => {
    return ( 
        <Link href={button.link}>
            <p
                className={`
                    ${button.size === 'sm' ? 'py-2 px-4 text-sm' : ''}
                    border border-zinc-800 hover:bg-zinc-800
                    hover:text-neutral-200
                    cursor-pointer
                `}
            >
                {button.content}
            </p>
        </Link>
    );
}
 
export default Btn;