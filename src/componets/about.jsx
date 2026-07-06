import React from "react";
import logo from '../assets/rename.png'

export default function About(){
    return (
        <> 
        <div className="bg-amber-50 min-h-screen">
        <div className="flex overflow-hidden justify-center max-w-3xl items-center translate-x-56 ">
          <img
          src={logo}  className="object-cover h-100 w-78 mr-10 rounded-b-sm rounded-t-sm ">        
          </img>
          <div className="ml-6 justify-around translate-y-6 mt-20">
            <h1 className="font-bold font-stretch-150% text-5xl ml-">
                Little About us
            </h1>
            <h1 className="mt-5 text-gray-600">At Hearth & Bean, we believe great coffee has the power to bring people together and create meaningful moments. Built on a passion for exceptional craftsmanship and genuine hospitality, our cafés are designed to feel like a welcoming home where every guest is valued and every visit is memorable.              
              </h1>
          
           <h1 className="text-gray-600">
           We carefully source premium coffee beans from trusted growers and roast them with precision to bring out their distinctive flavors and aromas. Every cup is handcrafted by our skilled baristas, ensuring exceptional quality, consistency, and freshness. From rich espressos and creamy lattes to refreshing cold brews and seasonal specialties, every drink is prepared with care and passion.
           </h1>
          <h1 className="text-gray-600"> Our commitment extends beyond coffee. We proudly serve freshly baked pastries, delicious treats, and wholesome food made with quality ingredients to complement every beverage. More importantly, we strive to create warm, inviting spaces where friends connect, families gather, professionals work, and communities grow. 
           </h1>
          <h1 className="text-gray-600"> 
            Whether you're beginning your morning, taking a break during a busy day, or catching up with loved ones, Hearth & Bean is dedicated to providing outstanding coffee, heartfelt service, and an unforgettable café experience—one cup at a time.      
            </h1>
          </div>
        </div>
        </div>
        </>
    )
}