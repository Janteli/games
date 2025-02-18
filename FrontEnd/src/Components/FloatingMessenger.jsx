import React, { useEffect, useState } from "react";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { db, auth, signInAnonymously } from "../Components/firebase.js"; // Fix Import
import ChatIcon from "../assets/Chat.png";

const FloatingChat = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    signInAnonymously(auth) // ✅ Use signInAnonymously(auth) instead of auth.signInAnonymously()
      .then(() => console.log("Signed in anonymously"))
      .catch((error) => console.error("Auth error:", error));

    const q = collection(db, "messages");
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => doc.data()));
    });

    return () => unsubscribe();
  }, []);

  const sendMessage = async () => {
    if (text.trim()) {
      await addDoc(collection(db, "messages"), { text, timestamp: Date.now() });
      setText("");
    }
  };

  return (
    <>
      <div
        className="fixed bottom-5 right-5 cursor-pointer p-4 bg-blue-500 rounded-full"
        onClick={() => setShowChat(!showChat)}
      >
        <img src={ChatIcon} alt="Chat" width="40" />
      </div>

      {showChat && (
        <div className="fixed bottom-20 right-5 bg-white shadow-md rounded-lg w-64 p-2">
          <div className="h-40 overflow-y-auto">
            {messages.map((msg, i) => (
              <p key={i} className="p-1 border-b">{msg.text}</p>
            ))}
          </div>
          <input
            type="text"
            className="border p-1 w-full"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="bg-blue-500 text-white p-1 w-full mt-2" onClick={sendMessage}>Send</button>
        </div>
      )}
    </>
  );
};

export default FloatingChat;
