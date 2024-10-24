import { Link, useNavigate } from "react-router-dom"
import { SecretPhraseInput } from "../components/SecretPhraseInput"
import { useState } from "react"
import { ClickAndNext } from "../components/ClickAndNext";


export const SecretPhrase = ({mnemonic}) => {
    const [copied, setCopied] = useState(false);
    const navigate = useNavigate();

    return<div className="flex flex-col justify-center items-center min-h-screen bg-black text-white p-4 md:p-6 lg:p-8">
        <div className="flex flex-col items-center mb-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-center">Secret Recovery Phrase</h1>
        <p className="text-gray-400 text-sm md:text-base lg:text-lg text-center">Save these words in a safe place</p>
        <Link className="text-blue-500 text-sm md:text-base lg:text-lg mt-2" to={"/warning"}>Read the warnings again</Link>
        </div>
        
        <div className="bg-gray-900 cursor-pointer text-white p-5 mt-8 mb-8 rounded-lg  shadow-md w-full max-w-lg md:max-w-xl lg:max-w-2xl" onClick={() => {
        if(!copied){
            navigator.clipboard.writeText(mnemonic.join(' '));
            setCopied(true);
        }
         }}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2  md:gap-4 mb-4">
            {
            mnemonic.map((val, index) => (
                <SecretPhraseInput value={val} index={index+1} />
            ))}
            </div>
            <div className="text-center text-gray-300 text-sm md:text-base lg:text-lg">
           {
            copied ? (<div className="text-center text-gray-300 text-sm md:text-base lg:text-lg">copied</div>): (<div className="text-center text-gray-300 text-sm md:text-base lg:text-lg">Click anywhere to copy</div>)
           }
           </div>
        
        </div>
        <ClickAndNext label={"I saved my recovery phrase"} onClick={() => {navigate('/createpass');}}/>
        
    </div>
}