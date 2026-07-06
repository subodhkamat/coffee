import React from "react"
import venilla from '../assets/venella.jpg'
import oats from '../assets/oats.jpg'
import salt from '../assets/salted.jpg'
import flower from '../assets/flower.jpg'
import pumpkin from '../assets/pumpkin.jpg'
export default function Products(){
   
    const stores= [
        { 
         
         image:pumpkin,          
         name:"Pumpkin Spice Latte",
         about:"A seasonal favorite that blends rich espresso with creamy steamed milk, pumpkin puree, cinnamon, nutmeg, and cloves. Topped with whipped cream and a sprinkle of pumpkin spice, this comforting drink delivers a warm, sweet, and aromatic flavor that perfectly captures the cozy feeling of autumn in every delicious sip."              
        },
        {   
        
         image:venilla,        
         name:"Vanilla Bean Cold Brew",
         about:"Slow-steeped premium coffee is infused with real vanilla beans for 18 hours, creating a naturally smooth, low-acidity drink. Served chilled over ice with a splash of fresh milk, it offers delicate sweetness, silky texture, and refreshing flavor without overpowering the coffee's natural character, making it perfect for warm days."
        },

      {   
       
         image: salt,       
         name:"Salted Caramel Mocha",
         about:"A luxurious blend of bold espresso, rich dark chocolate, velvety steamed milk, and buttery caramel, finished with a hint of sea salt. The balance of sweet and salty flavors enhances every sip, creating a smooth, indulgent drink with a creamy texture that satisfies both coffee and dessert lovers alike."      },
        {  
        
         image:oats,         
         name:"Honey Cinnamon Oat Latte",
         about:"Crafted with smooth espresso, creamy oat milk, pure honey, and a touch of ground cinnamon, this dairy-free latte offers natural sweetness without artificial syrups. Its comforting aroma, velvety texture, and perfectly balanced flavor make it a wholesome choice for anyone seeking a cozy yet refreshing coffee experience."       },

          {
            image:flower,
            name:"Lavender Honey Iced Latte",
            about:"This refreshing specialty drink combines rich espresso, floral lavender syrup, pure honey, and chilled milk over ice. The delicate lavender aroma complements the coffee without overpowering it, while honey adds natural sweetness. Smooth, elegant, and lightly refreshing, it's a unique café favorite for those who enjoy sophisticated flavors."       }
    ]
   return (
    <>
     <div className="bg-amber-50 h-full">
    <h1 className="text-6xl text-center font-serif text-gray-700">What we Have to Offers</h1>
   
    {
     stores.map((map)=>(
        <div className="mt-12">
        <div className="flex justify-center items-center mt-7 bg-amber-50 m-12">
      <img src={map.image} className="object-cover h-100 w-89 rounded-b-lg rounded-t-lg"></img>
      <div className="ml-16 w-125">
      <h1 className=" font-bold text-5xl text-gray-400">{map.name}</h1>
      <h1 className="text-gray-800">{map.about}</h1>
      </div>
    </div>
    </div>
     ))
    }
</div>
  
    </>
   )
    
}
  