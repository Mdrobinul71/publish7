import React from 'react'

export default function Card(props) {
    return (
        <div className="sk2"> 
           <img src={`https://joeschmoe.io/api/v1/randar${props.send}`} alt="hes" width="300px" height="300px" />
           <h1>{props.send}</h1>
            <h3>{props.send2}</h3>
        </div>
    )
}
