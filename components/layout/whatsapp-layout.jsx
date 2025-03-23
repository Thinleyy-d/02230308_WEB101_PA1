"use client"

import { useState } from "react"
import { Sidebar } from "../sidebar/sidebar"
import { ChatArea } from "../chat/chat-area"
import { chats } from "../../lib/data"

export function WhatsAppLayout() {
  const [selectedChat, setSelectedChat] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [showSidebar, setShowSidebar] = useState(true)

  // Simple mobile detection on client side
  useState(() => {
    if (typeof window !== "undefined") {
      const checkIfMobile = () => {
        setIsMobile(window.innerWidth < 768)
      }

      // Initial check
      checkIfMobile()

      // Add event listener
      window.addEventListener("resize", checkIfMobile)

      // Clean up
      return () => {
        window.removeEventListener("resize", checkIfMobile)
      }
    }
  }, [])

  const handleChatSelect = (chat) => {
    setSelectedChat(chat)
    if (isMobile) {
      setShowSidebar(false)
    }
  }

  const handleBackToList = () => {
    setShowSidebar(true)
  }

  return (
    <div className="flex h-screen w-full bg-gray-100 overflow-hidden">
      <div className="flex w-full h-full max-w-7xl mx-auto shadow-lg">
        {/* Sidebar */}
        <div className={`${isMobile ? (showSidebar ? "block w-full" : "hidden") : "block w-1/3"} bg-white border-r`}>
          <Sidebar chats={chats} onChatSelect={handleChatSelect} selectedChatId={selectedChat?.id} />
        </div>

        {/* Chat Area */}
        <div className={`${isMobile ? (showSidebar ? "hidden" : "block w-full") : "block w-2/3"} bg-gray-50`}>
          {selectedChat ? (
            <ChatArea chat={selectedChat} onBackClick={isMobile ? handleBackToList : undefined} />
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-100">
              <div className="text-center p-6">
                <h3 className="text-xl font-semibold text-gray-700">WhatsApp Web</h3>
                <p className="text-gray-500 mt-2">Select a chat to start messaging</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

