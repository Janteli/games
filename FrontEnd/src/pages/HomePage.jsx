
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
      {/* Main Section */}
      <div className="h-fit bg-blue-950 flex flex-col justify-center items-center pt-32 md:pt-56">
        <div className="pb-16 text-center px-4">
          <h1 className="text-4xl md:text-6xl text-white font-bold font-[poppins]">
            PLAY SLOTOMANIA
          </h1>
          <p className="text-lg md:text-xl mt-4 font-bold text-white">
            THE #1 FREE SLOTS GAME
          </p>

          {/* Play Button */}
          <div className="relative flex justify-center items-center mt-12">
            <img src={Button} alt="button" className="h-12 md:h-16 w-auto" />
            <h1 className="absolute top-2 left-1/2 transform -translate-x-1/2 text-2xl md:text-4xl text-white font-bold font-[poppins]">
              PLAY NOW
            </h1>
          </div>
        </div>

        {/* Cloud Section */}
        <div className="relative h-[600px] w-full">
          <img
            src="https://www.slotomania.com/wp-content/themes/master-theme/img/HOME-PAGE/ABOUT-SLOTOMANIA/top_clouds.png"
            alt="cloud"
            loading="lazy"
            className="w-full md:w-[110%] inset-0"
          />
          <div className="bg-[#feffff] absolute top-10 left-0 md:top-32 md:left-0 px-4 w-full">
            <div className="flex flex-col md:flex-row bg-[#f7fdff]">
              <div className="w-full md:w-1/2 px-4 md:px-20">
                <img src={Char} alt="char" className="h-auto w-full md:w-auto" />
              </div>
              <div className="w-full md:w-1/2 py-10 md:py-20 px-4 md:px-20">
                <h1 className="text-[#341175] text-3xl md:text-4xl font-bold mb-3 font-[poppins]">
                  PLAY FREE SLOT
                </h1>
                <p className="text-sm md:text-md font-semibold tracking-tight mb-6 font-[poppins]">
                  Slotomania, the world’s #1 free slots game, was developed in 2011 by Playtika®
                </p>
                <p className="text-sm md:text-md mb-5 font-[poppins]">
                  Slotomania offers 170+ free online slot games, various fun features, mini-games, free bonuses, and more online or free-to-download apps.
                </p>
                <p className="text-sm md:text-md mb-5 font-[poppins]">
                  Get 1 million free Coins as a Welcome Bonus, just for downloading the game!
                </p>
                <p className="text-sm md:text-md mb-5 font-[poppins]">
                  Although it may replicate Vegas-style slot machines, there are no cash prizes. Slotomania’s focus is on exhilarating gameplay and fostering a happy global community.
                </p>
                <p className="text-sm md:text-md mb-5 font-[poppins]">
                  Slotomania is a pioneer in the slot industry - with over 11 years of refining the game, it is a pioneer in the slot game industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <section className="bg-[#f7fdff] px-4 md:px-36 py-16 md:py-28 mt-32 md:mt-64">
        <h1 className="text-3xl md:text-4xl font-bold text-[#341175] text-center mb-16 md:mb-32 font-[poppins]">
          WHY SLOTMANIA
        </h1>
        <div className="flex flex-col md:flex-row gap-6">
          {why.map((item, i) => (
            <div
              className="flex flex-col px-3 bg-[#f5f8f8] rounded-md shadow-lg w-full md:w-[3000px] h-[150px] mb-6 md:mb-0"
              key={i}
            >
              <img
                src={item.img1}
                alt="Over"
                className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] -mt-8 md:-mt-10 ml-4 md:ml-10"
                loading="lazy"
              />
              <p className="text-blue-950 text-center text-sm md:text-md font-semibold mt-2 md:mt-4 font-[poppins]">
                {item.text1}
              </p>
              <p className="text-blue-950 text-center text-sm md:text-md font-semibold font-[poppins]">
                {item.text2}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Illustration Section */}
      <section className="flex justify-center items-center bg-[#f7fdff] bg-[url(https://www.slotomania.com/wp-content/themes/master-theme/img/HOME-PAGE/WHY-SLOTOMANIA/buildings_desktop.png)] bg-cover bg-center bg-no-repeat h-[740px]">
        <div className="relative h-[600px] w-full md:w-[1500px] flex justify-center items-center">
          {/* Machine Image */}
          <img src={machine} alt="machine" className="w-full md:w-[900px] h-fit" />

          {/* Lucy Image */}
          <img
            src={Lucy}
            alt="lucy"
            loading="lazy"
            className="w-[200px] md:w-[280px] h-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />

          {/* Coins */}
          {[coin1, coin2, coin3, coin4, coin5, coin6, coin7, coin8, coin9, coin10, coin11, coin12, coin13, coin14, coin15].map((coin, i) => (
            <img
              key={i}
              src={coin}
              alt="coin"
              className={`w-[40px] md:w-[100px] h-[40px] md:h-[100px] absolute ${i % 2 === 0 ? "left" : "right"}-${i % 3 === 0 ? "0" : i % 3 === 1 ? "10" : "20"} top-${i % 4 === 0 ? "0" : i % 4 === 1 ? "10" : "20"}`}
            />
          ))}
        </div>
      </section>

      {/* Floating Messenger */}
      {/* <FloatingMessenger /> */}
    </>
  );
};

export default HomePage;