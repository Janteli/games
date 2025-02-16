import React from "react";
import Button from "../assets/PlayButton.png";
import Char from "../assets/lucys.png";
import Over from "../assets/why/Over.png";
import Bag from "../assets/why/bags.png";
import Free from "../assets/why/Free.png";
import Heart from "../assets/why/Heart.png";
import Box from "../assets/why/Box.png";
import Lucy from "../assets/illustraion/lucy.png";
import coin1 from "../assets/illustraion/coin1.png";
import coin2 from "../assets/illustraion/coin2.png";
import coin3 from "../assets/illustraion/coin3.png";
import coin4 from "../assets/illustraion/coin4.png";
import coin5 from "../assets/illustraion/coin5.png";
import coin6 from "../assets/illustraion/coin6.png";
import coin7 from "../assets/illustraion/coin7.png";
import coin8 from "../assets/illustraion/coin8.png";
import coin9 from "../assets/illustraion/coin9.png";
import coin10 from "../assets/illustraion/coin10.png";
import coin11 from "../assets/illustraion/coin11.png";
import coin12 from "../assets/illustraion/coin12.png";
import coin13 from "../assets/illustraion/coin13.png";
import coin14 from "../assets/illustraion/coin14.png";
import coin15 from "../assets/illustraion/coin15.png";
import machine from "../assets/illustraion/slot_machine.png";
import moving1 from "../assets/illustraion/cloud_5.svg";
import moving2 from "../assets/illustraion/cloud_6.svg";
import moving3 from "../assets/illustraion/cloud_1.svg";
import FloatingMessenger from "../Components/FloatingMessenger";

const HomePage = () => {
  const why = [
    {
      img1: Over,
      text1: "OVER 170",
      text2: "FREE-TO-PLAY-SLOTS",
    },
    {
      img1: Bag,
      text1: "1 MILLION COINS",
      text2: "WELCOME BONUS",
    },
    {
      img1: Free,
      text1: "WORLD’S #1 FREE",
      text2: "SOCIAL SLOT GAME",
    },
    {
      img1: Heart,
      text1: "BIGGEST ONLINE",
      text2: "SLOT COMMUNITY",
    },
    {
      img1: Box,
      text1: "NEW EXCITEMENT",
      text2: "EVERY DAY",
    },
  ];


  return (
    <>
      <div className="h-fit bg-blue-950 flex flex-col justify-center items-center pt-56">
        {/* Main Content */}
        <div className=" pb-16 text-center">
          <h1 className="text-6xl text-white font-bold font-[poppins]">
            PLAY SLOTOMANIA
          </h1>
          <p className="text-xl mt-4 font-bold text-white">
            THE #1 FREE SLOTS GAME
          </p>

          {/* Button Section */}
          <div className="relative flex justify-center items-center mt-12">
            <img src={Button} alt="button" className="h-16 w-70" />
            <h1 className="absolute top-2 left-1/2 transform -translate-x-1/2 text-4xl text-white font-bold font-[poppins]">
              PLAY NOW
            </h1>
          </div>
        </div>

        {/* Cloud Image Positioned at the Bottom */}
        <div className="relative h-[600px]  ">
          <img
            src="https://www.slotomania.com/wp-content/themes/master-theme/img/HOME-PAGE/ABOUT-SLOTOMANIA/top_clouds.png"
            alt="cloud"
            loading="lazy"
            className="w-[110%] inset-0"
          />
          <div className=" bg-[#feffff] absolute top-32 left-0 px-4">
            <div className="flex bg-[#f7fdff]">
              <div className="w-1/2   px-20 ">
                <img src={Char} alt="char" className="h-full w-auto inset-0 " />
              </div>
              <div className="w-1/2 py-20 px-20">
                <h1 className="text-[#341175] text-4xl font-bold mb-3 font-[poppins]">
                  PLAY FREE SLOT
                </h1>
                <p className="text-md font-semibold tracking-tight mb-6 font-[poppins]">
                  Slotomania, the world’s #1 free slots game, was developed in
                  2011 by Playtika®
                </p>
                <p className="text-md mb-5 font-[poppins]">
                  Slotomania offers 170+ free online slot games, various fun
                  features, mini-games, free bonuses, and more online or
                  free-to-download apps. Join millions of players and enjoy a
                  fantastic experience on the web or any device; from PCs to
                  tablets and cell phones (on Google Play, Apple iPhone or iPad
                  App Store, or Facebook Gaming).
                </p>
                <p className="text-md mb-5 font-[poppins]">
                  Get 1 million free Coins as a Welcome Bonus, just for
                  downloading the game!
                </p>
                <p className="text-md mb-5 font-[poppins]">
                  Although it may replicate Vegas-style slot machines, there are
                  no cash prizes. Slotomania’s focus is on exhilarating gameplay
                  and fostering a happy global community.
                </p>
                <p className="text-md mb-5 font-[poppins]">
                  Slotomania is a pioneer in the slot industry - with over 11
                  years of refining the game, it is a pioneer in the slot game
                  industry. Many of its competitors have adopted similar
                  features and techniques to Slotomania, such as collectibles
                  and group play.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WHY */}
      <section className="bg-[#f7fdff] px-36 py-28 mt-64">
        <h1 className="text-4xl font-bold text-[#341175] text-center mb-32 font-[poppins]">
          WHY SLOTMANIA
        </h1>
        <div className="flex gap-6">
          {why.map((item, i) => (
            <div
              className="flex flex-col px-3 bg-[#f5f8f8] rounded-md shadow-lg w-[3000px] h-[150px]"
              key={i}
            >
              <img
                src={item.img1}
                alt="Over"
                className="w-[100px] h-[100px] -mt-10 ml-10"
                loading="lazy"
              />
              <p className="text-blue-950 text-center text-md font-semibold mt-4 font-[poppins]">
                {item.text1}
              </p>
              <p className="text-blue-950 text-center text-md font-semibold font-[poppins]">
                {item.text2}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ILLUSTRATION */}
      <section className="flex justify-center items-center bg-[#f7fdff] bg-[url(https://www.slotomania.com/wp-content/themes/master-theme/img/HOME-PAGE/WHY-SLOTOMANIA/buildings_desktop.png)] bg-cover bg-center bg-no-repeat h-[740px]">
        <div className="relative h-[600px] w-[1500px] flex justify-center items-center">
          {/* Machine Image */}
          <img src={machine} alt="machine" className="w-[900px] h-fit" />

          {/* Lucy Image (Centered on Machine) */}
          <img
            src={Lucy}
            alt="lucy"
            loading="lazy"
            className="w-[280px] h-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <img
            src={coin1}
            loading="lazy"
            alt="coin"
            className="w-[100px] h-[100px] absolute top-1/2 left-2.5 transform translate-x-80 -translate-y-1/2"
          />
          <img
            src={coin2}
            alt="coin"
            className="w-[100px] h-[100px] absolute top-3.5 right-2.5 transform -translate-x-80 translate-y-1/2"
          />
          <img
            src={coin3}
            alt="coin"
            className="w-[50px] h-[50px] absolute top-0.5 left-16 transform translate-x-80 -translate-y-1/2"
          />
          <img
            src={coin4}
            alt="coin"
            className="w-[100px] h-[100px] absolute bottom-8 right-20 transform -translate-x-80 -translate-y-1/2"
          />
          <img
            src={coin5}
            alt="coin"
            className="w-[100px] h-[100px] absolute bottom-8 left-0.5 transform translate-x-24 -translate-y-1/2"
          />
          <img
            src={coin6}
            alt="coin"
            className="w-[70px] h-[70px] absolute bottom-28 left-10 transform translate-x-40 -translate-y-1/2"
          />
          <img
            src={coin7}
            alt="coin"
            className="w-[140px] h-[140px] absolute bottom-1 left-36 transform translate-x-52 -translate-y-1/2"
          />
          <img
            src={coin8}
            alt="coin"
            className="w-[100px] h-[100px] absolute top-12 left-0.5 transform translate-x-24 -translate-y-1/2"
          />
          <img
            src={coin9}
            alt="coin"
            className="w-[80px] h-[80px] absolute top-28 left-48 transform translate-x-60 -translate-y-1/2"
          />
          <img
            src={coin10}
            alt="coin"
            className="w-[200px] h-[200px] absolute bottom-8 right-20 transform -translate-x-80 -translate-y-1/2"
          />
          <img
            src={coin11}
            alt="coin"
            className="w-[80px] h-[80px] absolute bottom-8 right-10 transform -translate-x-20 -translate-y-1/2"
          />
          <img
            src={coin12}
            alt="coin"
            className="w-[60px] h-[60px] absolute top-8 right-10 transform -translate-x-20 -translate-y-1/2"
          />
          <img
            src={coin13}
            alt="coin"
            className="w-[200px] h-[80px] absolute bottom-8 right-14 transform -translate-x-20 -translate-y-1/2"
          />
          <img
            src={coin14}
            alt="coin"
            className="w-[60px] h-[60px] absolute bottom-20 right-14 transform -translate-x-20 -translate-y-40"
          />
          <img
            src={coin15}
            alt="coin"
            className="w-[50px] h-[50px] absolute bottom-30 right-14 transform -translate-x-30 -translate-y-56"
          />
          <img
            src={coin6}
            alt="coin"
            className="w-[60px] h-[60px] absolute bottom-28 right-20 transform -translate-x-32 -translate-y-40"
          />
          <img
            src="https://www.slotomania.com/wp-content/themes/master-theme/img/HOME-PAGE/SLOTOMANIA-GOING-SOCIAL/top_section_mobile.svg"
            className="inset-0 w-full absolute bottom-0 left-0 transform -translate-x-0 translate-y-96 h-[200px]"
          />
          <div className="w-full h-[1000px] bg-[#3D1472] inset-0  absolute bottom-0 left-0 transform -translate-x-0 translate-y-[550px] ">
            <div className="relative w-full h-[200px] overflow-hidden ">
              {/* Moving Cloud 1 */}
              <img
                src={moving1}
                alt="moving cloud"
                loading="lazy"
                className="absolute top-10 left-full w-[400px] animate-[moveClouds_10s_linear_infinite]"
              />

              {/* Moving Cloud 2 (Starts Later for Staggered Effect) */}
              <img
                src={moving2}
                alt="moving cloud"
                loading="lazy"
                className="absolute top-20 left-full w-[550px] animate-[moveClouds_10s_linear_infinite]"
              />

              {/* <img
                src={moving3}
                alt="moving cloud"
                loading="lazy"
                className="absolute top-20 left-full w-[550px] animate-[moveClouds_15s_linear_infinite]"
              /> */}

              <div className="flex gap-4">
                <div className="w-1/2 pt-20 px-20">
                  <h1 className="text-3xl text-white font-[poppins] font-bold">SLOTOMANIA GOING SOCIAL</h1>
                </div>
                <div className="w-1/2 pt-20 px-20">
                  <p className="text-white font-[poppins]">Slotomania is much more than an entertaining game - it is also a community that believes that a family that plays together, stays together. With millions of fans on Slotomania’s official Facebook page & organic group, “SLOTOMANIA SUPERGROUP”, Slotomania’s online community enjoys special announcements of new games, features, and special activities, as well as likeminded players to converse and engage with.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <FloatingMessenger/> */}
    </>
  );
};

export default HomePage;
