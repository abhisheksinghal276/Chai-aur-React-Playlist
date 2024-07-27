import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/abhisheksinghal276')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])

    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl align-text rounded-lg">
            Github Followers: {data.followers}
            <img className="rounded-3xl border-white-400 border-8" src={data.avatar_url} alt="Github DP" width={300} />
         </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/abhisheksinghal276')
    return response.json()
}