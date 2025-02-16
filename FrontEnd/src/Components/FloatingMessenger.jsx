import React, { useState, useEffect } from "react";
import Chat from "../assets/Chat.png";

const FloatingMessenger = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [chatVisible, setChatVisible] = useState(false);

  const handleMouseDown = (e) => {
    setDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!dragging) return;

      let newX = e.clientX - offset.x;
      let newY = e.clientY - offset.y;

      const maxX = window.innerWidth - 96;
      const maxY = window.innerHeight - 96;

      newX = Math.max(0, Math.min(newX, maxX));
      newY = Math.max(0, Math.min(newY, maxY));

      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      setDragging(false);
    };

    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, offset]);

  const toggleChat = () => {
    if (window.FB) {
      setChatVisible(!chatVisible);
      console.log("Chat toggled.");
    } else {
      console.error("Facebook SDK not loaded yet.");
    }
  };

  useEffect(() => {
    if (window.FB) {
      console.log("Facebook SDK already loaded.");
      return;
    }

    // Load the Facebook SDK
    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: "v18.0",
      });
      console.log("Facebook SDK loaded and initialized.");
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      js.async = true;
      js.defer = true;
      js.crossOrigin = "anonymous";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");

    return () => {
      delete window.fbAsyncInit;
    };
  }, []);

  return (
    <>
      <div
        className="fixed bottom-0 right-0 cursor-pointer shadow-md h-24 w-24 rounded-full overflow-hidden flex justify-center items-center"
        onMouseDown={handleMouseDown}
        onClick={toggleChat}
      >
        <img src={Chat} className="h-20 w-20 object-cover" alt="Chat Icon" />
      </div>

      {chatVisible && (
        <div
          className="fb-customerchat"
          attribution="setup_tool"
          page_id="106521847743805" // Replace with your Facebook Page ID
          theme_color="#0084FF"
          logged_in_greeting="Hi! How can we help you?"
          logged_out_greeting="Hi! How can we help you?"
        ></div>
      )}
    </>
  );
};

export default FloatingMessenger;