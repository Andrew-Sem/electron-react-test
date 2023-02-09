import {Input} from "./components/UI/Input";
import {useState} from "react";

function App() {
    const [IP, setIP] = useState("")
    const [DNS, setDNS] = useState("")
    const [port, setPort] = useState("")
    const [path, setPath] = useState("")
    return (
        <div className="bg-zinc-800 min-h-screen text-white pt-4">
            <div className={"container mx-auto flex"}>
                <div className={"flex flex-col w-1/2 space-y-5"}>
                    <Input label={"IP"} value={IP} onChange={(e) => setIP(e.currentTarget.value)}/>
                    <Input label={"DNS"} value={DNS} onChange={(e) => setDNS(e.currentTarget.value)}/>
                    <Input label={"Port"} value={port} onChange={(e) => setPort(e.currentTarget.value)}/>
                    <Input label={"Path"} value={path} onChange={(e) => setPath(e.currentTarget.value)}/>
                </div>
            </div>
            <div className={"absolute w-screen bottom-0 border-t border-zinc-500/50 py-3"}>
                <div className={"container mx-auto flex flex-row-reverse"}>
                    <button className={"bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 duration-200"}>Send
                        request
                    </button>
                </div>
            </div>
        </div>

    );
}

export default App;
