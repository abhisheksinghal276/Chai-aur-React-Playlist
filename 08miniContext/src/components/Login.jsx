import React from "react";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login(){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // To send the data, we used setUser via useContext() using UserContext
    // where we passed setUser as props and this allows us to access to the User state
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        // to prevent the default behaviour of Submit btton 
        // i.e. to send data somewhere or make POST request
        e.preventDefault()
        setUser({username,password})
    }

    return(
        <div>
            <h2>Login</h2>
            
            <input type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}            
            placeholder="Username" />

            {" "}

            <input type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password" />

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login