import Link from "next/link";

const Btn = ({button}) => {
    return ( 
        <Link href={button.link}>
            <p
                className={`
                    ${button.size === 'xs' ? 'py-2 px-2 text-xs' : ''}
                    ${button.size === 'sm' ? 'py-2 px-4 text-sm' : ''}
                    border border-zinc-800 dark:border-neutral-200
                    hover:bg-zinc-800 dark:hover:bg-neutral-200
                    hover:text-neutral-200 dark:hover:text-zinc-800
                    cursor-pointer
                `}
            >
                {button.content}
            </p>
        </Link>
    );
}
 
export default Btn;