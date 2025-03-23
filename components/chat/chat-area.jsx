"use client"

import { useState } from "react"
import { ChatHeader } from "./chat-header"
import { MessageList } from "./message-list"
import { ChatInput } from "./chat-input"

/**
 * @param {Object} props
 * @param {Object} props.chat - Chat object with messages
 * @param {Function} [props.onBackClick] - Function to call when back button is clicked
 */
export function ChatArea({ chat, onBackClick }) {
  const [messages, setMessages] = useState(chat.messages || [])

  const handleSendMessage = (text) => {
    const newMessage = {
      id: `msg-${Date.now()}`,
      senderId: "user-1", // Current user
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      status: "sent",
      isMe: true,
    }

    setMessages([...messages, newMessage])
  }

  return (
    <div className="flex flex-col h-full">
      <ChatHeader user={chat.user} onBackClick={onBackClick} />
      <MessageList messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  )
}

