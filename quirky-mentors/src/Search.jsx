import { useNavigate } from "react-router-dom"

function Search(){
    const nav = useNavigate()
    return(
        <>
        <p>Search</p>
        <button onClick={() => nav("/profile-form")}>Back</button>
        </>
    )
}

export default Search