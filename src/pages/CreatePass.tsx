import { useState } from "react"
import { PasswdInput } from "../components/PasswdInput"
import { ClickAndNext } from "../components/ClickAndNext";
import { useNavigate } from "react-router-dom";

export const CreatePass = () => {
    const [passwd, setPasswd] = useState("");
    const [confirmed, setConfirmed] = useState(false);
    const navigate = useNavigate();

    return <div>
        <h1>Create a Password</h1>
        <p>It should be at least 8 characters</p>
        <p>you will need this to unlock the backpack</p>
        <PasswdInput onChange={(e)=> {
            const x = e.target.value;
            setPasswd(x);
        }}/>
        <PasswdInput onChange={(e)=> {
            const x = e.target.value;
            if(x == passwd) {
                setConfirmed(true);
                console.log("confirmed");
            } else {
                setConfirmed(false);
            }
            
        }}/>
        <ClickAndNext onClick={() => {
            if(confirmed) {
                localStorage.setItem("passwd", passwd);
                navigate("/");
            }
        }} label={<p>I agree to <span>Terms of Service</span></p>}/>
    </div>
}