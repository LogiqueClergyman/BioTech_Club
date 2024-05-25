import React, { useEffect, useState } from "react";
import img1 from "../assets/bg.jpeg";
import CardMentor from "./CardMentor";
import logo from "../assets/logoR.png";
import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";
import Fotter from "./Fotter";

const HeroSection = () => {
  return (
    <div className=" h-screen lg:mb-10 bg-gradient-to-r from-teal-200 to-sky-400  lg:rounded-br-[300px]">
      <div className="rounded-b-[300px] mx-1 ">
        <div className="absolute inset-0 rounded-b-[300px] mx-1">
          <img
            className="w-full h-full object-cover lg:rounded-br-[300px]"
            src={img1}
            alt="Background"
          />
          {/* <div className="absolute inset-0 bg-emerald-900 opacity-50 rounded-b-[300px] shadow-2xl shadow-blue-900"></div> */}
          <div class="absolute inset-0 bg-gradient-to-r -500 -blue-400 -300 opacity-50 lg:rounded-br-[300px] shadow-2xl shadow-blue-900"></div>
        </div>
        <div className="container mx-auto relative h-full ">
          <div className="flex align-middle items-center h-full ">
            <div className="md:mt-40 sm:mt-50 mt-52 h-full group motion-safe:transition-all motion-safe:duration-700">
              <figure
                class="relative z-40 w-[93%]
                        md:before:absolute md:before:block md:before:h-[111%] md:before:w-full group-hover:before:bg-[url('https://img.freepik.com/premium-vector/dna-double-helix-model-light-blue-background_158582-1557.jpg')] md:before:bg-cover before:-z-[1] md:before:rounded-b-[80px]
                       md:group-hover:before:scale-[3.5] md:motion-safe:before:transition-all 
                       md:motion-safe:transform-gpu md:motion-safe:before:duration-500 md:before:origin-center"
              >
                <div className="w-[90%] h-full">
                  <h1 className="text-4xl text-left mx-10 sm:text-5xl md:text-7xl font-bold mb-6 text-cyan-700 ">
                    Biotech Club GLAU
                  </h1>
                  <p className=" text-2xl font-semibold text-left mx-10 md:mx-10 md:text-2xl mb-8 text-cyan-900 ">
                    Explore the world of biotechnology with us
                  </p>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Info = () => {
  return (
    <div className="py-20 mt-16 md:bg-gradient-to-r from-teal-200 to-sky-400 rounded-l-[280px]">
      <div class=" darksksk:bg-gray-900 bg-[url('https://media.istockphoto.com/id/935506484/vector/science-template-dna-molecules-background.jpg?s=612x612&w=0&k=20&c=HYwIgQdNCQqQZGCts8m3yy_HTQtV9W8OqrUonvJKikE=')] rounded-l-[200px] shadow-emerald-300 ">
        {/* <h1 className="text-3xl lg:text-5xl m-auto my-5 text-blue-400 font-bold">
          Our Club🤝
        </h1> */}
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 bg-gradient-to-r from-transparent via-gray-400">
          <div class="grid grid-cols-2 gap-4 ">
            <img
              class="w-full rounded-lg -skew-x-12 outline outline-offset-4"
              src="https://as2.ftcdn.net/v2/jpg/01/26/98/79/1000_F_126987977_h3tAqR0VoVEk2GnctJDMJU3wphcSSmn0.jpg"
              alt="office content 1"
            />
            <img
              class="mt-4 w-full lg:mt-10 rounded-lg -skew-x-12 outline outline-offset-4"
              src="https://www.dwkltd.com/pub/media/catalog/product/cache/25d642bfef00c108387fdee142851e0e/1/6/1622.jpg"
              alt="office content 2"
            />
          </div>
          <div class="font-light text-gray-500 sm:text-lg darksksk:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 darksksk:text-white">
              Creating new, Everyday!!!
            </h2>
            <p class="mb-4 text-2xl font-thin text-black">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick, but big
              enough to deliver the scope you want at the pace you need. Small
              enough to be simple and quick, but big enough to deliver the scope
              you want at the pace you need.
            </p>
            <p className="text-2xl font-thin text-black">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Mentor = () => {
  return (
    <div className="pt-20 pb-10 mt-20 bg-gradient-to-b from-transparent to-cyan-500 via-emerald-100 flex justify-center">
      <div className="flex flex-col gap-y-4 p-5">
        <h1 className="mx-auto text-3xl sm:text-5xl font-bold text-black font-barcelony">
          Our Mentor
        </h1>
        <CardMentor />
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <div className="pt-20 pb-20 bg-gradient-to-t from-emerald-100 to-cyan-500 flex justify-center">
      <div className="flex flex-col gap-y-4 p-5">
        <h1 className="mx-auto text-3xl sm:text-5xl mb-10 font-bold text-white font-barcelony">
          Special Memories
        </h1>
        <Carousel />
      </div>
    </div>
  );
};

// const Event = ()=>{
//   return(
//     <div className="pt-20 bg-gradient-to-b -500 -blue-600 -600 flex justify-center">
//     <div className="flex flex-col gap-y-4 p-5">
//       <h1 className="mx-auto text-3xl sm:text-5xl font-bold text-blue-800">
//         Events
//       </h1>

//     </div>
//   </div>
//   )
// }

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 ">
        <Fotter />
      </footer>
    </>
  );
};

const LinkGroup = ({ children, header }) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="w-full mb-10">
          <h4 className="text-lg font-semibold mb-9 text-dark"> {header} </h4>
          <ul>{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <div>
      <li>
        <a
          href={link}
          className={`inline-block mb-2 text-base leading-loose text-body-color hover:text-primary`}
        >
          {label}
        </a>
      </li>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Info />
      <Mentor />
      <Gallery />
    </div>
  );
}
