import React, { useEffect, useState } from "react"

 function Stories(){

    const[Stories,setStories]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/Story")
        .then(data=>data.json())
        .then(data=>setStories(data))
        .catch(err=>console.log(err))
    },[])



    return(
        <div className=" story d-flex">
            {Stories.length > 0 ? (
            Stories.map((Story)=>(
                <div key={Story.id} className="mx-2">
                    <div className="gradient-border">
                        <img className="Story-dp rounded-circle" src={Story.user.profile_pic} alt="dp"/>
                    </div>

                    <p className="text-truncate" style={{width:"50px"}}>{Story.user.username}</p>

                </div>
            ))

            ):(
                <p>Loading....</p>
            )}
        </div>
    )

 }

 export default Stories