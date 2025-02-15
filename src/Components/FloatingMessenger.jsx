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

  const handleMouseMove = (e) => {
    if (!dragging) return;

    // Calculate new position
    let newX = e.clientX - offset.x;
    let newY = e.clientY - offset.y;

    // Constrain position within viewport bounds
    const maxX = window.innerWidth - 96; // 96px is the width of the element
    const maxY = window.innerHeight - 96; // 96px is the height of the element

    newX = Math.max(0, Math.min(newX, maxX));
    newY = Math.max(0, Math.min(newY, maxY));

    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const toggleChat = () => {
    setChatVisible(!chatVisible);
    console.log("HELLO FROM MESSENGER")
  };

  // Load Facebook SDK and initialize the chat plugin
  useEffect(() => {
    // Load the Facebook SDK script
    const script = document.createElement("script");
    script.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
    script.async = true;
    document.body.appendChild(script);

    // Initialize the chat plugin
    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: "v18.0",
      });
    };

    // Cleanup script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* Floating Messenger Button */}
      <div
        className="fixed bottom-0 right-0 cursor-pointer shadow-md h-24 w-24 rounded-full overflow-hidden flex justify-center items-center"
        // style={{
        //   transform: `translate(${position.x}px, ${position.y}px)`,
        //   position: "absolute",
        // }}
        onMouseDown={handleMouseDown}
        onClick={toggleChat}
      >
        <img src={Chat} className="h-20 w-20 object-cover" alt="Chat Icon" />
      </div>

      {/* Facebook Messenger Chat Plugin */}
      {chatVisible && (
        <div
          className="fb-customerchat"
          attribution="setup_tool"
          page_id="YOUR_PAGE_ID" // Replace with your Facebook Page ID
          theme_color="#0084FF"
          logged_in_greeting="Hi! How can we help you?"
          logged_out_greeting="Hi! How can we help you?"
        > hello</div>
      )}
    </>
  );
};

export default FloatingMessenger;