import React, { useState } from "react";
import v1 from '../assets/newvideo.mp4'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import s1 from '../assets/s1.mp4'
import s2 from '../assets/s2.mp4'
import s3 from '../assets/s3.mp4'
import venilla from '../assets/venella.jpg'
import oats from '../assets/oats.jpg'
import salt from '../assets/salted.jpg'
import flower from '../assets/flower.jpg'
import pumpkin from '../assets/pumpkin.jpg'
import lemon from '../assets/lemon.jpg'
import oreo from '../assets/oreo.jpg'
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import i1 from '../assets/i1.jpg'
import i2 from '../assets/i2.jpg'
import i3 from '../assets/i3.jpg'
import i4 from '../assets/i4.jpg'
import i5 from '../assets/i5.jpg'
import i6 from '../assets/i6.jpg'
import i7 from '../assets/i7.jpg'
import i8 from '../assets/i8.jpg'
import i9 from '../assets/i9.jpg'
import i10 from '../assets/i10.jpg'
import i11 from '../assets/i11.jpg'
import i12 from '../assets/i12.jpg'



export default function Home(){
  const videos=[s1,s2,s3]  
  const [current,setcurrent]  =useState(0)
  const [currentvideoindex,setvideoindex]=useState(0)
  const setvideo = () => {
    setvideoindex((prev) => (prev + 1) % videos.length);
};
const twits=[
    {
        id:1,
image:i1,
name:"Olivia Carter",
username:"@oliviac",
twit:"The caramel latte is absolutely amazing. Rich, smooth, and the perfect way to start my morning.",
},
{
    id:2,
    image:i2,
  name:"Ethan Brooks",
  username:"@ethanb",
  twit:"Hands down the best cappuccino I've had. Cozy atmosphere and incredibly friendly staff."
},
{
    id:3,
    image:i3,
  name:"Sophia Bennett",
  username:  "@sophiabee",
  twit:"Every visit feels special. Fresh pastries and perfectly brewed coffee every single time.",
},
{
    id:4,
    image:i4,
  name:"Liam Foster",
  username: "@liamfoster" ,
  twit:"Their flat white is consistently excellent. You can really taste the quality of the beans."
},
{
    id:5,
    image:i5,
  name:"Ava Collins",
  username: "@avacollins" ,
  twit:"Love the warm vibe! It's become my favorite place to work and enjoy a great cup of coffee."
},
{
    id:6,
    image:i6,
  name:"Noah Parker",
  username:  "@noahpk",
  twit:"The seasonal drinks never disappoint. Every sip feels thoughtfully crafted."
},
{
    id:7,
    image:i7,
  name: "Mia Reynolds",
  username:  "@miarays",
  twit:"Smooth espresso, delicious desserts, and wonderful service. Highly recommend!"
},
{
    id:8,
    image:i8,
  name:"Lucas Harper",
  username:  "@lucash",
  twit:"A hidden gem for coffee lovers. The aroma alone keeps me coming back."
},{
    id:9,
    image:i9,
  name:"Charlotte Hayes",
  username:  "@charhayes",
  twit:"Their mocha strikes the perfect balance of chocolate and coffee. Simply delicious!"
},{
    id:10,
    image:i10,
  name:"Mason Walker",
  username:  "@masonw",
  twit:"Freshly roasted beans and skilled baristas make every cup memorable."
},{
    id:11,
    image:i11,
  name:"Amelia Scott",
  username: "@amelias" ,
  twit:"A peaceful spot with exceptional coffee. Perfect for catching up with friends."
},
{
    id:12,
    image:i12,
  name:"Benjamin Cole",
  username:  "@bencole",
  twit:"I've tried nearly everything on the menu, and every drink has been outstanding."
},
]
const [full,setFull]=useState(false)
function changefull() {
  setFull(prev => !prev);
}

const seller=[venilla,oats,salt,flower,pumpkin,lemon,oreo]
    return(
 <>
 <div className="bg-amber-50 items-center justify-center ">
    <section className="relative h-screen w-screen overflow-hidden ">

        <video
            className="absolute inset-0 w-full h-full object-cover overflow-hidden "
            src={v1}
            autoPlay
            loop
            muted
            playsInline
        />

        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex h-full items-center justify-center">
            <div className="text-center">
                <h1 className="text-7xl font-bold text-white">
                   Brewly Where Every Cup
                </h1>
                <p className="text-amber-950 text-6xl font-bold mt-4">
                    Feel like Home
                </p>
            </div>
        </div>

    </section>

    {/* Next section */}
    <section className="py-12 bg-amber-50">
        <h1 className="text-3xl text-center text-gray-600">"Roasted to perfection, brewed with heart—one sip is never enough." <FontAwesomeIcon icon={faHeart} /></h1>
    </section>
    <section className="flex justify-center items-center overflow-hidden h-125 w-250 bg-amber-200 translate-x-30 rounded-2xl">
        <div className="w-2xl" >
               <video
            className=" inset-0 object-cover mr-60 h-full w-full rounded-2xl"
            src={videos[currentvideoindex]}
            autoPlay
            muted
            playsInline
            onEnded={setvideo}
        />
        </div>
    <div className="translate-x-2.5">
   <h1 className="font-semibold text-gray-800 text-5xl">Brew Happiness, One Cup at a Time.</h1>
   <h1 className="mt-12 text-gray-700">Every cup tells a story—crafted from carefully selected beans and brewed with passion in every pour. From timeless espresso classics to rich handcrafted specialties, there's a brew for every mood and every moment. Whether you're starting your morning, catching up with friends, or taking a well-earned break, every sip delivers warmth, comfort, and unforgettable flavor, made to inspire your day.</h1>
  </div>
    </section>
  <section className="py-20 bg-amber-50">
    <h1 className="text-5xl font-bold text-center text-gray-800">
        Customer Favorites
    </h1>
    <p className="text-center text-gray-500 mt-3 mb-12">
        Loved by thousands of coffee enthusiasts.
    </p>

    <div className="w-[90%] mx-auto">

        <Swiper  //swipper
            modules={[Navigation, Autoplay]}
            navigation
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            spaceBetween={30}
            breakpoints={{
                320: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
                1400: {
                    slidesPerView: 4,
                },
            }}
        >
            {seller.map((item, index) => (
                <SwiperSlide key={index}>

                    <div className="rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition duration-300">

                        <img
                            src={item}
                            alt=""
                            className="w-full h-80 object-cover hover:scale-105 transition duration-500"
                        />

                    </div>

                </SwiperSlide>
            ))}
        </Swiper>
    </div>
    <div className="text-center">
   <h1 className="p-4 text-6xl font-semibold text-gray-900">Globally Sourced, Locally Loved!</h1>
   <h1 className="p-3 text-gray-700 w-200 flex flex-wrap overflow-hidden translate-x-52">
    Every cup tells a story, and every sip is an invitation to slow down and enjoy the moment. Whether you're kickstarting a busy morning, catching up with friends, or unwinding after a long day, our handcrafted coffees are brewed to make every occasion special. Made with premium beans, freshly roasted to perfection, and crafted by passionate baristas, every drink delivers rich flavor and unforgettable aroma. From bold espressos and creamy lattes to refreshing cold brews and indulgent specialty drinks, there's something for every coffee lover. And because great coffee should be for everyone, we also offer dairy-free, plant-based, and low-sugar options—so you can savor every sip, your way.
   </h1>
   <h1 className="text-gray-800 translate-y-2 text-4xl">Hear From Our Customers</h1>
    </div>
</section>
<section className={`w-300  justify-center items-center overflow-hidden translate-7 ${full?'h-full':'h-55'} p-2`}>
    <div className="overflow-hidden flex flex-wrap w-300 justify-center gap-20">
    {
twits.map((map)=>(   
<div className=" bg-white w-75 h-50 rounded-3xl overflow-hidden" key={map.id}>
    <div className="flex py-3 px-3" >
    <div className="h-11 w-12"> <img src={map.image} className="w-full h-full rounded-full object-cover"></img> </div>
    <div className=" px-3"> <h1 className="font-semibold">{map.name}</h1> <h1 className="text-mist-700">{map.username}</h1></div>
   
    </div>
    <h1 className="p-4 text-gray-900 from-neutral-800 "> {map.twit}</h1>
</div>
))
}
</div>
</section>
    </div>
    <div className="items-center justify-center flex relative  bg-amber-50 w-full p-2"> 
 <button className="bg-purple-900 text-amber-50 rounded-2xl shadow-amber-100"
    onClick={changefull}
    >
       <p className="p-1"> Show more</p> 
    </button>
    </div>
    
</>
        
    )
}
