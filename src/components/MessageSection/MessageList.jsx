import React, { useContext, useEffect } from "react";
import MessageCard from "./MessageCard";
import { Context } from "../../context/Context";
import { getMessages } from "../../server/api";
import { loadMessages } from "../../reducer/reducer";

export default function MessageList() {
  
  const [{ messages }, dispatch] = useContext(Context);

  useEffect(() => { 
    getMessages().then((messages) => dispatch(loadMessages(messages)))
  }, [dispatch])

  return messages.map((message) => (
        <MessageCard
          message={message}
          key={message.sender_id}
        />
      )
  );
}
