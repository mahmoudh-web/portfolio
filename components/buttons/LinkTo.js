import Link from "next/link";

const LinkTo = ({postLink}) => {
    return ( 
        <Link href={postLink.link}>
            <a
                className={`
                    flex gap-1 items-center
                    underline
                    hover:scale-105 hover:font-semibold
                `}
            >
                {postLink.content}
            </a>
        </Link>
    );
}
 
export default LinkTo;