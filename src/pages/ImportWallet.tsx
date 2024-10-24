

import { MnemonicInput } from "../components/MnemonicInputBox";
import { StartButton } from "../components/StartButton";

export const ImportWallet = ({mnemonic, setMnemonic}) => {

 



  

    return <div className="min-h-screen w-full bg-black flex flex-col items-center text-white justify-center">
        <div className="flex gap-2 mt-4 flex-col justify-center text-center">
        <h1 className="text-3xl md:text-4xl font-bold" >Secret Recovery Phrase</h1>
        <p className="text-gray-400 text-sm md:text-base">Enter or paste your 12 or 24 word phrase</p>
        <h1 className="text-sm md:text-lg hover:text-blue-600 font-bold cursor-pointer text-blue-500" onClick={() => {
            if(mnemonic.length == 12){
                const emptyMn = Array.from({length: 24}).fill('');
                setMnemonic(emptyMn);
            }else {
                const emptyMn = Array.from({length:12}).fill('');
                setMnemonic(emptyMn);
            }
        }}>Use {mnemonic.length} words</h1>
        </div>
        <div onPaste={(e) => {
                   const p = e.clipboardData.getData('Text').split(' ');
                   if(p.length == mnemonic.length){
                   setMnemonic(p);}
               }} className={(mnemonic.length == 12)?"flex mt-5 flex-row overflow-y-scroll no-scrollbar h-48 flex-wrap w-[90%] md:w-[70%] lg:w-[50%] min-h-[40%] justify-center gap-2": "flex mt-5 flex-row overflow-y-scroll no-scrollbar h-56 flex-wrap w-[90%] md:w-[70%] lg:w-[50%] min-h-[40%] justify-center gap-2"}>
            {mnemonic.map((m, index) => (
                 <MnemonicInput number={index +1} value={m}
                 onChange={(e) => {
                  const updated = mnemonic.map((mn, ind) => {
                   if(ind == index){
                       return(e.target.value);
                   } else {
                       return mn
                   }
               });
                  setMnemonic(updated);
               }}/>
            ))}
             
        </div>

        <StartButton name={"Import Wallet"} onClick={""}/>
    </div>
    
}