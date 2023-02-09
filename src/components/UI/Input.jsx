export const Input = ({label, ...props}) => {
    return (
        <label className={"flex flex-col"}>


            <div className={"text-sm mb-1 text-zinc-400"}>{label}</div>
            <input className={"w-40 rounded bg-zinc-600 outline-none py-1 px-2"} {...props}/>
        </label>
    );
}
