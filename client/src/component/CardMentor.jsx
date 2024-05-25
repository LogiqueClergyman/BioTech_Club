import React from "react";

const CardMentor = () => {
  return (
    <div
      x-data="lw"
      class=" w-full sm:w-[75%] cursor-pointer sm:m-auto flex justify-center items-center"
    >
      <div
        class="w-full bg-blue-100 flex flex-col lg:flex-row sm:max-w-[90%] md:p-4 rounded-xl text-blue-800 darksksktext-blue-400 overflow-hidden group 
                    hover:shadow-2xl hover:shadow-sky-500/50 motion-safe:transition-all motion-safe:duration-1000"
      >
        <figure
          class="relative z-40 lg:w-[256%]  xl:w-[90%] w-[37%] h-[90%] mt-[12%] mx-auto rounded-full outline outline-offset-4 outline-sky-500 
                       before:content-[''] before:absolute before:block before:pointer-events-none before:rounded-full before:h-full before:w-full before:bg-blue-600 before:-z-[1]
                       group-hover:before:scale-[3.5] motion-safe:before:transition-all 
                       motion-safe:transform-gpu motion-safe:before:duration-1000 before:origin-center group-hover:outline-blue-400"
        >
          <img
            class="rounded-full block xl:w-full m-auto bg-sky-500 object-cover z-10 relative"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
            alt="Avatar"
          />
        </figure>
        <div className="flex flex-col ml-7  lg:p-4">
          <h1 className="text-2xl z-50 font-bold m-auto my-5 text-black">
            Himanshu Sharma
          </h1>
          <p className="z-50 text-base pr-[12%] md:pr-2 sm:text-lg text-justify font-medium text-black">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            repellat a beatae corporis sunt temporibus? Doloremque ipsa repellat
            magni excepturi quae laudantium doloribus temporibus dolorem facilis
            autem mollitia eos, sed omnis accusamus, voluptates provident
            ducimus! Cumque ipsum, quae totam voluptatum veritatis officia
            laboriosam accusamus tenetur sint, eum vel. Aliquid voluptatum
            pariatur quaerat explicabo dolorem illum suscipit quia consectetur!
            Doloribus, dignissimos iste? Quis molestias nobis iure aspernatur.
            Adipisci laborum non quis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardMentor;
