import React, { useState, useEffect } from "react";
import { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "./firebase";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Fetch messages from Firestore
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messagesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(messagesData);
    });

    return () => unsubscribe();
  }, []);

  // Send a new message
  const sendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    await addDoc(collection(db, "messages"), {
      text: input,
      timestamp: new Date(),
    });

    setInput("");
  };

  return (
    <div style={{ width: "300px", height: "400px", border: "1px solid #ccc" }}>
      <div style={{ height: "300px", overflowY: "scroll", padding: "10px" }}>
        {messages.map((msg) => (
          <div key={msg.id} style={{ marginBottom: "10px" }}>
            <strong>{msg.text}</strong>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} style={{ display: "flex", padding: "10px" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ flex: 1, marginRight: "10px" }}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;