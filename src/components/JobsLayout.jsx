import React from "react";
import { Outlet } from "react-router-dom";

const JobsLayout= ()=>{
    return (
        <div>
            <h3>JObs openeing</h3>
            <h5>Jobs available</h5>
<Outlet/>

        </div>

    )
}
export default JobsLayout

