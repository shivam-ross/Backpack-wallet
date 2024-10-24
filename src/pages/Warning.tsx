
import { ClickAndNext } from "../components/ClickAndNext";
import { WarningPara } from "../components/WarningPara"
import lock from "/home/hunter/Desktop/backpack-clone/src/assets/lock.png";
import warningPic from "/home/hunter/Desktop/backpack-clone/src/assets/warning.png"
import { useNavigate } from "react-router-dom";
import { generateMnemonic } from "bip39";


export const WarningPage = ({setMnemonic}) => {
    
    const navigate = useNavigate();

    return(
    <div className="flex flex-col items-center justify-center min-h-screen  bg-black text-white p-4 md:p-6 lg:p-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center">Secret Recovery Phrase Warning</h2>
        <div className="mb-4 text-gray-500 text-center">
            <pre>on the next page you will receive your secret</pre>
            <pre>recovery phrase</pre>
        </div>
        <WarningPara imagePath={warningPic}
         text={"This is the ONLY way to recover your account if you lose access to your device or password."}/>
         <WarningPara imagePath={lock}
         text={"Write it down, store it in a safe place, and NEVER share it with anyone."}/>
          <ClickAndNext 
         label={"I understand that I am responsible for saving my secret recovery phrase, and that it is the only way to recover my wallet."}
         onClick={async () => { 
            const mn = await generateMnemonic().split(' ')
            await setMnemonic(mn);
            navigate("/secretphrase");}}/>
         
        
    </div>
    )
}