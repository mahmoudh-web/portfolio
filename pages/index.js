import { useAppContext } from "../AppContext"
import Menu from "../components/Menu"

export default function Home() {

    return (
        <div className="
            relative flex
            h-screen w-screen
            p-2"
        >
            <Menu />
            <div className="pl-14">
                <p>test</p>
            </div>
        </div>
    )
}
