import React from "react";
export default function Footer(){   
    const data=[
        {
            p1:"Products",
            p2:"Features",
            p3:"Price",
        },

        {
            p1:"Company",
            p2:"About",
            p3:"Blog",
        },

        {
            p1:"Legal",
            p2:"privacy",
            p3:"Terms",
        },

        {
            p1:"Support",
            p2:"Documentation",
            p3:"Contact"
        },       
    ]     
    return(
        <>
     <div className={` bg-gray-900 text-white flex justify-around h-50`}> 
        {
        data.map((mp)=>(
            <div className="p-3">
                <a className=" hover:text-red-300 text-gray-400 py-3" href="">{mp.p1}</a>
                 <h1 className="text-gray-700 hover:text-red-300 ">{mp.p2}</h1>
                  <h1 className="text-gray-700 hover:text-red-300 ">{mp.p3}</h1>
            </div>
        ))
      }
     </div>
       </>
    )
}
  
