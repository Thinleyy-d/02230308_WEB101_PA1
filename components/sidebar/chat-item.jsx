"use client"

import { AvatarComponent } from "@/components/ui/avatar-component"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

/**
 * @param {Object} props
 * @param {Object} props.chat - Chat object
 * @param {boolean} props.isSelected - Whether this chat is selected
 * @param {Function} props.onClick - Function to call when chat is clicked
 */
export function ChatItem({ chat, isSelected, onClick }) {
  return (
    <div
      className={cn(
        "flex items-center p-3 cursor-pointer border-b hover:bg-gray-50 dark:hover:bg-gray-700/50",
        isSelected && "bg-gray-100 dark:bg-gray-700/70",
      )}
      onClick={onClick}
    >
      <AvatarComponent user={chat.user} />

      <div className="ml-3 flex-1 overflow-hidden">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-semibold truncate">{chat.user.name}</h3>
          {chat.lastMessage && <span className="text-xs text-gray-500">{chat.lastMessage.timestamp}</span>}
        </div>

        <div className="flex justify-between items-center mt-1">
          {chat.lastMessage && <p className="text-xs text-gray-500 truncate max-w-[180px]">{chat.lastMessage.text}</p>}

          {chat.unreadCount > 0 && (
            <Badge
              variant="default"
              className="bg-primary text-white h-5 w-5 flex items-center justify-center rounded-full text-xs"
            >
              {chat.unreadCount}
            </Badge>
          )}
        </div>
      </div>
    </div>
  )
}

