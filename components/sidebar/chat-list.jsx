"use client"

import { ChatItem } from "./chat-item"

/**
 * @param {Object} props
 * @param {Array} props.chats - List of chat objects
 * @param {Function} props.onChatSelect - Function to call when a chat is selected
 * @param {string} [props.selectedChatId] - ID of the currently selected chat
 */
export function ChatList({ chats, onChatSelect, selectedChatId }) {
  return (
    <div className="flex-1 overflow-y-auto scrollbar-thin">
      {chats.map((chat) => (
        <ChatItem
          key={chat.id}
          chat={chat}
          isSelected={chat.id === selectedChatId}
          onClick={() => onChatSelect(chat)}
        />
      ))}
      {chats.length === 0 && (
        <div className="flex items-center justify-center h-32">
          <p className="text-gray-500 text-sm">No chats found</p>
        </div>
      )}
    </div>
  )
}

