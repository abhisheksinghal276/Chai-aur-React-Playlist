import React from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";


function Profile() {

    // To receive the data, we used User via useContext() using UserContext
    // where we passed user as props and this allows us to access to the user state
    const {user} = useContext(UserContext)

    if(!user) return <div>Please Login!</div>

    return <div>Welcome, {user.username} !</div>
}

export default Profile