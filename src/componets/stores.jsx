import React from "react";
import newzealand from '../assets/Newzealand1.png'
import ireland from '../assets/ireland.png'
import soctland from '../assets/scotland.png'
import greenland from '../assets/greenland.png'

export default function Location(){
   
    const stores= [
        {
            image:newzealand,
            id:1,
            country:"New Zealand",
            title:"Fern & Bean Café",
            address:"128 Riverside Lane, Lakeview, Rotorua 3010, New Zealand",
            speciality:"Fern & Bean Café serves freshly roasted coffee, homemade pastries, and locally sourced ingredients in a warm countryside setting, offering a cozy atmosphere and genuine Kiwi hospitality."                
        },
         {
            image:soctland,
            id:2,
            country:"Scotland",
            title:"Highland Hearth Café",
            address:" 42 Glenview Road, Inverwood, Aberdeenshire AB34 7LT, Scotland",
            speciality:"Highland Hearth Café serves artisan coffee, fresh bakes, and locally sourced ingredients in a rustic countryside setting, delivering warm Scottish hospitality with every cup."                
        },
        {
            image:greenland,
            id:3,
            country:"Greenland",
            title:"Arctic Bloom Café",
            address:"12 Fjord View Road, 3911 Sisimiut, Greenland",
            speciality:"Arctic Bloom Café offers freshly brewed coffee, homemade pastries, and locally inspired treats in a cozy Nordic atmosphere, welcoming visitors with warm hospitality year-round."       },
          {
            image:ireland,
            id:4,
            country:"Ireland",
            title:"Clover & Oak Café",
            address:"42 Clover Lane, Ballymore, County Cork, P31 F8K2, Ireland",
            speciality:"Clover & Oak Café serves handcrafted coffee, freshly baked pastries, and locally sourced ingredients in a charming countryside setting, offering authentic Irish warmth and hospitality."    },
    ]
   return (
    <>
     <div className="bg-amber-50">
    <h1 className="text-6xl text-center font-sans font-semibold text-gray-900">Our Locations</h1>
   
    {
     stores.map((map)=>(
        <div className="flex justify-center items-center mt-7 bg-amber-50 m-12">
      <img src={map.image} className="object-cover h-100 w-89 rounded-b-lg rounded-t-lg"></img>
      <div className="ml-30 w-125">
      <h1 className=" font-bold text-5xl text-gray-400">{map.country}</h1>
      <h1 className="font-semibold text-gray-400">{map.title}</h1>
      <h1 className="text-gray-900">{ map.address}</h1>
      <h1 className="text-gray-900">{map.speciality}</h1>
      </div>
    </div>
     ))
    }
</div>
  
    </>
   )
    
}
  