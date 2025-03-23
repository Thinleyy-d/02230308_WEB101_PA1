"use client"

import { useState } from "react"
import { SidebarHeader } from "./sidebar-header"
import { SearchInput } from "./search-input"
import { ChatList } from "./chat-list"

/**
 * @param {Object} props
 * @param {Array} props.chats - List of chat objects
 * @param {Function} props.onChatSelect - Function to call when a chat is selected
 * @param {string} [props.selectedChatId] - ID of the currently selected chat
 */
export function Sidebar({ chats, onChatSelect, selectedChatId }) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredChats = chats.filter((chat) => chat.user.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="flex flex-col h-full">
      <SidebarHeader />
      <SearchInput value={searchQuery} onChange={setSearchQuery} />
      <ChatList chats={filteredChats} onChatSelect={onChatSelect} selectedChatId={selectedChatId} />
    </div>
  )
}

