import React, { useState, useEffect, useRef } from "react";
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SendMessage from "./SendMessage";
import "./Chat.css";

function Chat() {
  const [user] = useAuthState(auth);
  const scroll = useRef();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div>
      {user ? (
        <div className="page">
          <div className="msgs">
            {messages.map(({ id, text, photoURL, uid }) => (
              <div>
                <div
                  key={id}
                  className={`msg ${
                    uid === auth.currentUser.uid ? "sent" : "received"
                  }`}
                >
                  <img src={photoURL} alt="" />
                  <p>{text}</p>
                </div>
              </div>
            ))}
            <span ref={scroll}></span>
          </div>
          <SendMessage scroll={scroll} />
        </div>
      ) : (
        <div className="Chat__signIn">
          <p>Lütfen Giriş yapınız</p>
        </div>
      )}
    </div>
  );
}

export default Chat;
