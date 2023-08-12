import {useNavigate} from "react-router-dom"

function SignUp(){
    const nav = useNavigate()
    return(
        <>
        <p>Sign Up</p>
        <button onClick={()=>nav("/profile-form")}>Go to Project Setup</button>
        <button onClick={() => nav("/")}>Back</button>
        </>
    )
}

export default SignUp