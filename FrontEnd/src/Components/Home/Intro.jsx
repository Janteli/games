import React from 'react'
import Button from "../../assets/PlayButton.png";
import Char from "../../assets/lucys.png";

const Intro = () => {
  return (
    <>
         <div className=" bg-blue-950 min-h-screen flex flex-col justify-center items-center pt-96">
        {/* Main Content */}
        <div className="relative pb-16 text-center">
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

        {/* Blurry White Gradient at Bottom */}
        {/* <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-white blur-3xl"></div> */}

        {/* Cloud Image Positioned at the Bottom */}
        <div className="relative ">
          <img
            src="https://www.slotomania.com/wp-content/themes/master-theme/img/HOME-PAGE/ABOUT-SLOTOMANIA/top_clouds.png"
            alt="cloud"
            className="w-[110%] inset-0"
          />
          <div className="flex  bg-[#feffff] absolute top-32 left-0 px-4">
            {/* <div className="bg-white blur-2xl inset-0 h-4 w-full absolute top-2 left-0"></div> */}
            <div className="w-1/2 z-10 relative px-20 ">
              <img
                src={Char}
                alt="char"
                className="h-full w-auto inset-0 absolute top-0 left-0"
              />
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
                industry. Many of its competitors have adopted similar features
                and techniques to Slotomania, such as collectibles and group
                play.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Intro