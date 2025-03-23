"use client"

import { MessageBubble } from "./message-bubble"
import { useEffect, useRef } from "react"

/**
 * @param {Object} props
 * @param {Array} props.messages - List of message objects
 */
export function MessageList({ messages }) {
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="flex-1 overflow-y-auto p-4 chat-bg scrollbar-thin">
      {messages.length === 0 ? (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500 text-sm">No messages yet</p>
        </div>
      ) : (
        <div className="space-y-2">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      )}
    </div>
  )
}

