"use client"

import { useState } from "react"
import { Smile, Paperclip, Mic, Send } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * @param {Object} props
 * @param {Function} props.onSendMessage - Function to call when a message is sent
 */
export function ChatInput({ onSendMessage }) {
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim()) {
      onSendMessage(message.trim())
      setMessage("")
    }
  }

  return (
    <div className="p-3 bg-gray-100 dark:bg-gray-800">
      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <button type="button" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <Smile size={20} className="text-gray-600 dark:text-gray-300" />
        </button>

        <button type="button" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <Paperclip size={20} className="text-gray-600 dark:text-gray-300" />
        </button>

        <div className="flex-1">
          <input
            type="text"
            placeholder="Type a message"
            className="w-full py-2 px-4 bg-white dark:bg-gray-700 border-none rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button
          type={message.trim() ? "submit" : "button"}
          className={cn(
            "p-2 rounded-full",
            message.trim() ? "bg-primary text-white hover:bg-primary/90" : "hover:bg-gray-200 dark:hover:bg-gray-700",
          )}
        >
          {message.trim() ? <Send size={20} /> : <Mic size={20} className="text-gray-600 dark:text-gray-300" />}
        </button>
      </form>
    </div>
  )
}

