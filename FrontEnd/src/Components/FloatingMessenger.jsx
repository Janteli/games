import React, { useEffect, useState, useRef } from "react";
import { collection, addDoc, onSnapshot, serverTimestamp, orderBy, query } from "firebase/firestore";
import { db } from "../Components/firebase.js";
import ChatIcon from "../assets/Chat.png";

// ✅ Generate Unique ID for Clients (Without Authentication)
const getClientId = () => {
  let clientId = localStorage.getItem("clientId");
  if (!clientId) {
    clientId = `client_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem("clientId", clientId);
  }
  return clientId;
};

const FloatingChat = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const messagesEndRef = useRef(null);
  const clientId = getClientId(); // Get Unique Client ID

  useEffect(() => {
    // ✅ Listen for Messages for this Client
    const q = query(collection(db, `chats/${clientId}/messages`), orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, [clientId]);

  useEffect(() => {
    // ✅ Auto-scroll to latest message
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const sendMessage = async () => {
    if (text.trim()) {
      const userChatRef = collection(db, `chats/${clientId}/messages`);
      await addDoc(userChatRef, {
        text,
        sender: "client", // Mark as client message
        timestamp: serverTimestamp(),
      });
      setText("");
    }
  };

  return (
    <>
      <div
        className={`fixed bottom-5 right-5 cursor-pointer p-4 bg-blue-100 rounded-full ${showChat ? "hidden" : "block"}`}
        onClick={() => setShowChat(!showChat)}
      >
        <img src={ChatIcon} alt="Chat" width="40" />
      </div>

      {showChat && (
        <div className="fixed bottom-5 right-2 shadow-md rounded-lg w-96 bg-blue-500 p-6"
        onMouseLeave={()=>setShowChat(false)}
        >
          <h1 className="text-center font-bold my-2 text-white">Chat</h1>
          <hr className="border-gray-300 my-4" />

          {/* ✅ Chat Messages Container (No Scrollbar, Latest Message at Bottom) */}
          <div className="h-40 flex flex-col overflow-hidden">
            {/* Flex container to push messages to the bottom */}
            <div className="flex-1 flex flex-col justify-end overflow-y-auto">
              {messages.map((msg) => (
                <p
                  key={msg.id}
                  className={`p-2 rounded-lg ${
                    msg.sender === "client"
                      ? "bg-amber-200 text-white self-end"
                      : "bg-gray-200 text-black self-start"
                  }`}
                >
                  {msg.text}
                </p>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="flex mt-2">
            <input
              type="text"
              className="border p-2 flex-1 outline-none border-gray-300 my-4 rounded-md text-black"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button className="bg-blue-500 text-white p-1 ml-2" onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingChat;