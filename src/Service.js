import React from 'react';
import Card from './Card';

export default function Service() {
    const names=[
        {
            name:"jack",
            work:"web-developer",
            
        },
        {
            name:"Rockey",
            work:"App-developer",
          
        },
        {
            name:"jowel",
            work:"javascript-developer",
        },
        {
            name:"maxey",
            work:"Php-developer",
        }
    ];
    let items2=[];
    for(let x=0;x<names.length;x++){
        items2.push(<Card send={names[x].name}
                              send2={names[x].work}  />);
    }

    return (
        <div>
            <h1 className="text-center mt-3">This is service sector</h1>
            <hr className="w-50 m-auto" />
            {items2}
        
        </div>
    )
}
