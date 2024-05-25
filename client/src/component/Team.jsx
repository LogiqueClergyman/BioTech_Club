import React, { useState } from "react";

export default function Team() {
  const [active, setActive] = useState(true);
  const [infoteam, setInfoTeam] = useState([]);

  const TeamInfo = () => {
    return (
      <section className="bg-gradient-to-tl via-transparent from-emerald-400 to-cyan-400 ring ring-offset-8 ring-teal-500 shadow-white shadow-xl outline -outline-offset-8 outline-white rounded-tl-[400px] rounded-br-[400px]">
        {infoteam.map((data, indx) => {
          return (
            <div
              key={indx}
              className="container px-6 py-10 mx-auto flex flex-col"
            >
              {console.log(data)}
              <h1 className="text-2xl font-semibold my-2 m-auto text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                {data.team}
              </h1>

              {/* Head */}
              {data.head && (
                <div className="m-auto flex flex-col items-center p-8 transition-all duration-500 ease-in-out transform cursor-pointer group hover:bg-teal-600 rounded-xl">
                  <img
                    className="object-cover w-52 h-52 rounded-full ring-4 ring-gray-300"
                    src={data.head.image}
                    alt="Loading..."
                  />

                  <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white transition-all duration-500 ease-in-out hover:text-3xl transform hover:translate-y-[-4px]">
                    {data.head.name}
                  </h1>

                  <p className="mt-2 text-gray-500 group-hover:text-red-500 hover:font-bold capitalize dark:text-gray-300">
                    {data.head.role}
                  </p>

                  <div className="flex mt-3 -mx-2">
                    <a
                      href={data.head.social.insta}
                      target="_blank"
                      className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                      aria-label="Facebook"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 30 30"
                        width="30px"
                        height="30px"
                      >
                        <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
                      </svg>
                    </a>

                    <a
                      href={data.head.social.linkedin}
                      target="_blank"
                      className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                      aria-label="Github"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 30 30"
                        width="30px"
                        height="30px"
                      >
                        <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z" />
                      </svg>
                    </a>
                  </div>
                </div>
              )}

              {/* Deputy Heads */}
              {data.deputy_head &&
                data.deputy_head.map((deputy, index) => (
                  <div
                    key={index}
                    className="m-auto flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-cyan-400 rounded-xl"
                  >
                    <img
                      className="object-cover w-44 h-44 rounded-full ring-4 ring-gray-300"
                      src={deputy.image}
                      alt="Loading..."
                    />

                    <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                      {deputy.name}
                    </h1>

                    <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                      {deputy.role}
                    </p>

                    <div className="flex mt-3 -mx-2">
                      <a
                        href={deputy.social.insta}
                        target="_blank"
                        className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                        aria-label="Instagram"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 30 30"
                          width="30px"
                          height="30px"
                        >
                          <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
                        </svg>
                      </a>
                      <a
                        href={deputy.social.linkedin}
                        target="_blank"
                        className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                        aria-label="LinkedIn"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 30 30"
                          width="30px"
                          height="30px"
                        >
                          <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}

              {/* Associate */}
              <div className="grid grid-cols-1 m-auto gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
                {console.log(data.associates)}
                {data.associates &&
                  data.associates.map((data, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-violet-500 rounded-xl"
                    >
                      <img
                        className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                        src={data.image}
                        alt="Loading..."
                      />
                      <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                        {data.name}
                      </h1>
                      <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                        {data.role}
                      </p>
                      <div className="flex mt-3 -mx-2">
                        <a
                          href={data.social.insta}
                          target="_blank"
                          className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                          aria-label="Instagram"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30 30"
                            width="30px"
                            height="30px"
                          >
                            <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
                          </svg>
                        </a>
                        <a
                          href={data.social.linkedin}
                          target="_blank"
                          className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                          aria-label="LinkedIn"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30 30"
                            width="30px"
                            height="30px"
                          >
                            <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          );
        })}
      </section>
    );
  };

  const Data = [
    {
      club_name: "Biotech Club Council 1.0",
      leader: [
        {
          team: "President",
          head: {
            name: "Mansi",
            image:
              "https://res.cloudinary.com/dniaxreye/image/upload/v1689578804/IMG_20230716_195452_ee0hvo.jpg",
            social: {
              insta:
                " https://instagram.com/mansi_.2706?igshid=MzNlNGNkZWQ4Mg==",
              linkedin: "https://www.linkedin.com/in/mansi-rajput-a44a25283",
            },
            role: "President",
          },
        },
        {
          team: "Vice President",
          head: {
            name: "Anjali Agrawal",
            image:
              "https://res.cloudinary.com/dniaxreye/image/upload/v1689574836/IMG-20230716-WA0010_afqrpa.jpg",
            social: {
              insta:
                " https://instagram.com/anjali_.agrawal_?igshid=ZDc4ODBmNjlmNQ==",
              linkedin: "https://www.linkedin.com/in/anjali-agrawal-60a5b6281",
            },
            role: "Vice President",
          },
        },
        {
          team: "Secretary",
          head: {
            name: "Mridul Raghuvanshi",
            image:
              "https://res.cloudinary.com/dniaxreye/image/upload/v1689492305/-r35knf_algbnp.jpg",
            social: {
              insta:
                " https://instagram.com/themridulraghuvanshi?igshid=MzNlNGNkZWQ4Mg==",
              linkedin:
                " https://www.linkedin.com/in/mridul-raghuvanshi-b129a4185",
            },
            role: "Secretary",
          },
        },
        {
          team: "Treasurer",
          head: {
            name: "Diane B dawson",
            image:
              "https://res.cloudinary.com/dniaxreye/image/upload/v1689450693/IMG-20230715-WA0008_huqcfw.jpg",
            social: {
              insta: "https://www.instagram.com/diane__dawson/?next=%2F",
              linkedin:
                "https://www.linkedin.com/in/abhishek-kushwaha-3b0627224/",
            },
            role: "Treasurer",
          },
        },
      ],
      Heads: [
        {
          team: "Editorial",
          head: {
            name: "Yukti Agarwal",
            image:
              "https://res.cloudinary.com/dniaxreye/image/upload/v1689491201/IMG_20230323_083327_l8u7y2.jpg",
            social: {
              insta:
                "https://instagram.com/yuktiagrawal20?igshid=MzNlNGNkZWQ4Mg==",
              linkedin: "https://www.linkedin.com/in/yukti-agrawal-711506220",
            },
            role: "Head",
          },
          deputy_head: [
            {
              name: "Ankita",
              image:
                "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              social: {
                insta: "https://www.instagram.com/ankita_12/",
                linkedin:
                  "https://www.linkedin.com/in/abhishek-kushwaha-3b0627224/",
              },
              role: "Deputy Head",
            },
          ],
          associates: [
            {
              name: "Kanika Saxena",
              image:
                "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              social: {
                insta:
                  "https://instagram.com/_kanika_saxena_?igshid=MzNlNGNkZWQ4Mg==",
                linkedin: "https://www.linkedin.com/in/kanika-saxena-55a03225a",
              },
              role: "Associate",
            },
          ],
        },
        {
          team: "Design",
          head: {
            name: "Vaishnavi Goyal",
            image:
              "https://res.cloudinary.com/dniaxreye/image/upload/v1689450699/IMG20221121090934_hsprzx.jpg",
            social: {
              insta: "https://www.instagram.com/vaishnavi.goyal.3363/",
              linkedin: "https://www.linkedin.com/in/vaishnavi-goyal-985942230",
            },
            role: "Head",
          },
        },
        {
          team: "Finance",
          head: {
            name: "Tanish Khandelwal",
            image:
              "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            social: {
              insta: "https://www.instagram.com/tanish_khandelwal/",
              linkedin:
                "https://www.linkedin.com/in/abhishek-kushwaha-3b0627224/",
            },
            role: "Head",
          },
          deputy_head: [
            {
              name: "Manas Taneja",
              image:
                "https://res.cloudinary.com/dniaxreye/image/upload/v1689575347/IMG-20230716-WA0047_riw9na.jpg",
              social: {
                insta: "https://www.instagram.com/manas.taneja/",
                linkedin: "https://www.linkedin.com/in/manas-taneja-165926246/",
              },
              role: "Deputy Head",
            },
          ],
          associates: [
            {
              name: "Raju",
              image:
                "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              social: {
                insta: "https://www.instagram.com/raju_56/",
                linkedin:
                  "https://www.linkedin.com/in/abhishek-kushwaha-3b0627224/",
              },
              role: "Associate",
            },
          ],
        },
        {
          team: "Technical",
          head: {
            name: "Avyay Tiwari",
            image:
              "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            social: {
              insta: "https://www.instagram.com/avyay_tiwari/",
              linkedin:
                "https://www.linkedin.com/in/abhishek-kushwaha-3b0627224/",
            },
            role: "Head",
          },
          associates: [
            {
              name: "Sneha Dubey",
              image:
                "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              social: {
                insta: "https://www.instagram.com/sneha_dubey/",
                linkedin:
                  "https://www.linkedin.com/in/abhishek-kushwaha-3b0627224/",
              },
              role: "Associate",
            },
          ],
        },
        {
          team: "Media ",
          head: {
            name: "Rishab Jain",
            image:
              "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            social: {
              insta: "https://www.instagram.com/rishab_jain/",
              linkedin:
                "https://www.linkedin.com/in/abhishek-kushwaha-3b0627224/",
            },
            role: "Head",
          },
        },
        {
          team: "Web Dev.",
          head: {
            name: "Abhishek Kushwaha",
            image:
              "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            social: {
              insta: "https://www.instagram.com/abhishek_kushwaha/",
              linkedin:
                "https://www.linkedin.com/in/abhishek-kushwaha-3b0627224/",
            },
            role: "Head",
          },
          deputy_head: [
            {
              name: "Shruti Shakya",
              image:
                "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              social: {
                insta: "https://www.instagram.com/shruti_shakya/",
                linkedin:
                  "https://www.linkedin.com/in/abhishek-kushwaha-3b0627224/",
              },
              role: "Deputy Head",
            },
          ],
        },
        {
          team: "Event Man.",
          head: {
            name: "Shraddha Rajput",
            image:
              "https://res.cloudinary.com/dniaxreye/image/upload/v1689578970/Screenshot_20230716_195813_bfyspb.jpg",
            social: {
              insta:
                "https://instagram.com/its_shraddha_raj22?igshid=MzNlNGNkZWQ4Mg==",
              linkedin: "https://www.linkedin.com/in/shraddha-rajput-a451a2243",
            },
            role: "Head",
          },
          deputy_head: [
            {
              name: "Vidhi Mishra",
              image:
                "https://res.cloudinary.com/dniaxreye/image/upload/v1689578643/PHOTO-2023-07-16-20-31-50_blh3by.jpg",
              social: {
                insta:
                  "https://instagram.com/vidhi_mishra28?igshid=OGQ5ZDc2ODk2ZA==",
                linkedin: "https://www.linkedin.com/in/vidhi-mishra-934bb7283/",
              },
              role: "Deputy Head",
            },
          ],
          associates: [
            {
              name: "Manas Taneja",
              image:
                "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              social: {
                insta: "https://www.instagram.com/manas_taneja/",
                linkedin:
                  "https://www.linkedin.com/in/abhishek-kushwaha-3b0627224/",
              },
              role: "Associate",
            },
            {
              name: "Anjali Singh",
              image:
                "https://res.cloudinary.com/dniaxreye/image/upload/v1689575527/Snapchat-769408991_1_o23eyh.jpg",
              social: {
                insta:
                  " https://instagram.com/anjali__.singh._?igshid=MzNlNGNkZWQ4Mg==",
                linkedin: "https://www.linkedin.com/in/anjali-singh-2142a4275",
              },
              role: "Associate",
            },
            {
              name: "Dolly",
              image:
                "https://res.cloudinary.com/dniaxreye/image/upload/v1689575042/20230717_021252_waj08s.jpg",
              social: {
                insta: "https://instagram.com/dollypanjwani_/",
                linkedin:
                  "https://www.linkedin.com/in/dolly-panjwani-458011284",
              },
              role: "Associate",
            },
            {
              name: "Shubhang Arya",
              image:
                "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              social: {
                insta: "  https://www.instagram.com/shubhang.22685/",
                linkedin:
                  " https://www.linkedin.com/in/shubhang-arya-4b2b0524a",
              },
              role: "Associate",
            },
            {
              name: "Ashi (PR)",
              image:
                "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              social: {
                insta: "https://www.instagram.com/ashi_pr/",
                linkedin:
                  "https://www.linkedin.com/in/abhishek-kushwaha-3b0627224/",
              },
              role: "Associate",
            },
            {
              name: "Paras Mittal (CR)",
              image:
                "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              social: {
                insta: "https://www.instagram.com/paras_mittal/",
                linkedin:
                  "https://www.linkedin.com/in/abhishek-kushwaha-3b0627224/",
              },
              role: "Associate",
            },
          ],
        },
      ],
    },
  ];

  const Leader = Data[0].leader;
  const Head = Data[0].Heads;

  console.log(Leader);
  console.log(Head);

  return (
    <>
      <section className="bg-[url('https://th.bing.com/th/id/OIG.WOa0Tj86Y6kZca48_19W?pid=ImgGn')] bg-cover py-16">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-6xl text-center font-barcelony text-gray-800 capitalize md:text-6xl dark:text-white">
            Club Council 1.0
          </h1>

          {active ? (
            <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              incidunt ex placeat modi magni quia error alias, adipisci rem
              similique, at omnis eligendi optio eos harum.
            </p>
          ) : null}

          <div className="my-3 flex items-center justify-center">
            {!active ? (
              <div
                onClick={() => {
                  setActive(true);
                  setInfoTeam([]);
                }}
                className="px-4 py-2 md:py-3 cursor-pointer mt-1 rounded-xl md:px-12 text-white bg-gradient-to-r from-blue-500 via-teal-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  text-sm text-center mr-2 mb-2"
              >
                Heads
              </div>
            ) : null}
            <div className="flex items-center m-1  dark:border-blue-400 rounded-xl  md:overflow-hidden overflow-auto ">
              {Head.map((headInfo, indx) => {
                return (
                  <div
                    key={indx}
                    onClick={() => {
                      setActive(false);
                      setInfoTeam([headInfo]);
                    }}
                    className="px-4 py-2 m-3 text-sm font-medium cursor-pointer text-white capitalize bg-teal-600 md:py-3 rounded-xl md:px-12"
                  >
                    {headInfo.team}
                  </div>
                );
              })}
            </div>
          </div>

          {active ? (
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
              {Leader.map((data, indx) => {
                return (
                  <div
                    key={indx}
                    className="flex flex-col items-center p-8 transition-all duration-500 outline-double hover:outline-white hover:-outline-offset-8 hover:outline-double outline-teal-600 ease-in-out transform cursor-pointer group hover:bg-teal-600 rounded-tl-3xl rounded-br-3xl"
                  >
                    {/* <img src={data.head.image} className="object-cover w-full rounded-xl aspect-square"  alt="" /> */}
                    <div class="relative overflow-hidden bg-cover bg-no-repeat aspect-square ">
                      <img
                        src={data.head.image}
                        class="object-cover w-full rounded-xl aspect-square group-hover:border-2 transition-all duration-500 "
                      />
                      <a href="#!">
                        <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
                      </a>
                      <svg
                        class="absolute group-hover:text-teal-600 text-transparent transition-all duration-400 ease-in-out left-0 bottom-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                      >
                        {indx == 0 ? (
                          <path
                            fill="currentColor"
                            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                          ></path>
                        ) : indx == 1 || indx == 3 ? (
                          <path
                            fill="currentColor"
                            d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                          ></path>
                        ) : (
                          <path
                            fill="currentColor"
                            d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                          ></path>
                        )}
                      </svg>
                    </div>
                    <h1 className="mt-4 text-2xl font-semibold  group-hover:text-white group-hover:text-3xl group-hover:font-bold text-gray-700 capitalize transition-all duration-500 ease-in-out  dark:text-white transform hover:translate-y-[-8px]">
                      {data.head.name}
                    </h1>

                    <p className="mt-2 text-gray-500 capitalize group-hover:text-white hover:text-red-700 hover:font-bold dark:text-gray-300">
                      {data.team}
                    </p>

                    <div className="flex mt-3 -mx-2">
                      <a
                        href={data.head.social.insta}
                        target="_blank"
                        className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                        aria-label="Reddit"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 30 30"
                          width="30px"
                          height="30px"
                        >
                          <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
                        </svg>
                      </a>

                      <a
                        href={data.head.social.linkedin}
                        target="_blank"
                        className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                        aria-label="Facebook"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 30 30"
                          width="30px"
                          height="30px"
                        >
                          <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <TeamInfo />
          )}
        </div>
      </section>
    </>
  );
}
