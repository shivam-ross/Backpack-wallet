import { useState } from "react";

export const PasswdInput = ({onChange}) => {
    const [type, setType] = useState("password");
    
    return <div>
        <input minLength={8} type={type} onChange={onChange}/>
        <span onClick={()=> {if(type == "password"){
            setType("text");
        }else {
            setType("password");
        }}}>{(type == "password" ? "Show": "Hide")}</span>
    </div>
}