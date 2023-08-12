import {useNavigate} from "react-router-dom"

function About(){
    const nav = useNavigate()

    return(
        <>
        <p>About</p>
        <button onClick={() => nav("/signup")}>Go to Sign Up</button>
        </>
    )
}

export default About