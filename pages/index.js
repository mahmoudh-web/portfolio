import LatestProject from "../components/homePage/LatestProject"
import serverUrl from "../serverConfig"

export default function Home() {

    return (
        <div className="text-xl flex w-full h-full">
            <LatestProject />
            
        </div>
    )
}
