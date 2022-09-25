import Link from "next/link";

const LinkTo = ({postLink}) => {
    return ( 
        <Link href={`/lab/${postLink.url}`}>
            <a
                className={`
                    flex gap-1 items-center
                    underline
                    hover:scale-105 hover:font-semibold
                `}
            >
                {postLink.text}
            </a>
        </Link>
    );
}
 
export default LinkTo;