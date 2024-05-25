import React from "react";

const AboutUs = () => {
  return (
    <div className=" bg-gradient-to-r from-teal-200 via-sky-200 to-teal-200 py-10 lg:py-20">
      <div className="container px-4 mx-auto">
        <h1 className="text-6xl text-center mb-6 font-barcelony">About Us</h1>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8">
            <img
              src="path/to/your/image1.jpg"
              alt="Image 1"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 px-4 mb-8">
            <img
              src="path/to/your/image2.jpg"
              alt="Image 2"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
        <p className="text-lg text-center leading-relaxed mb-8 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          pharetra vel nibh eget posuere. Sed vel mi ac nibh dapibus ultrices.
          Nulla facilisi. Sed non neque feugiat, porttitor lacus vel, gravida
          urna. Duis sed volutpat dolor. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Integer
          aliquet arcu ut neque bibendum, ut rutrum orci auctor. Suspendisse
          potenti. Mauris ac tortor nec ligula consectetur fermentum. In
          scelerisque in mi et tincidunt. Sed imperdiet mauris in odio
          elementum, nec iaculis nisl sollicitudin. Sed at nunc et tellus
          tristique tincidunt. Donec molestie metus felis, sed lobortis lacus
          efficitur at.
        </p>
        <p className="text-lg text-center leading-relaxed mb-8">
          Phasellus finibus justo non nisi ultrices, eget placerat velit
          vulputate. Sed eu mauris malesuada, volutpat lectus at, commodo
          justo. Vestibulum blandit diam lectus, et aliquet metus maximus ut.
          Vivamus gravida dictum ligula, vel malesuada est efficitur a. Sed
          tempus arcu quis tortor feugiat, at aliquet justo dignissim. Fusce
          aliquam lorem nec purus egestas, eget tincidunt sem fermentum. Nam
          commodo, ligula ut eleifend feugiat, enim purus interdum velit, ac
          tincidunt nulla turpis sed velit.
        </p>
        <p className="text-lg text-center leading-relaxed mb-8">
          Donec auctor, tortor ac maximus aliquam, velit ex fringilla ante, et
          efficitur orci orci vel tortor. Sed ac justo eu nunc consequat
          suscipit ut id quam. Vivamus eu iaculis leo. Mauris est odio, posuere
          vitae magna id, condimentum tempus lorem. Nullam sit amet ex et
          risus condimentum tincidunt. Aliquam vitae pellentesque augue.
          Curabitur tempus nisl eu orci elementum, id placerat lectus
          tincidunt. In eget massa lobortis, dignissim metus at, eleifend
          libero. Donec vitae lacinia lectus.
        </p>
        <div className="text-center">
          <p className="text-lg font-bold mb-2">!!! !! ! Thank you for visiting ! !! !!
          !</p>
          <p className="text-lg">We hope you find the information useful.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;