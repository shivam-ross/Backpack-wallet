

export const MnemonicInput = ({number, onChange, value}) => {
    return <div className="bg-slate-800 flex items-center flex-row h-14 rounded-md p-2 w-full sm:w-[48%] md:w-[30%] lg:w-[22%]">
        <span className="w-5">{number}</span>
        <input className="bg-slate-800 block focus:outline-none w-full h-10 p-2 rounded" onChange={onChange} value={value}></input>
    </div>
}