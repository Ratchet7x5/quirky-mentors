import { useNavigate } from "react-router-dom"

function ProfileSetup(){
    const nav = useNavigate()
    return(
        <>
        <p>Profile Form</p>
        <button onClick={() => nav("/search")}>Go to Search</button>
        <button onClick={() => nav("/signup")}>Back</button>
        </>
    )
}

export default ProfileSetup