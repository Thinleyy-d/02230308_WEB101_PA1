"use client"

import { AvatarComponent } from "@/components/ui/avatar-component"
import { Search, MoreVertical, Phone, Video, ArrowLeft } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

/**
 * @param {Object} props
 * @param {Object} props.user - User object
 * @param {Function} [props.onBackClick] - Function to call when back button is clicked
 */
export function ChatHeader({ user, onBackClick }) {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-800 border-b">
      <div className="flex items-center">
        {onBackClick && (
          <button onClick={onBackClick} className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            <ArrowLeft size={20} className="text-gray-600 dark:text-gray-300" />
          </button>
        )}

        <AvatarComponent user={user} />

        <div className="ml-3">
          <h3 className="text-sm font-semibold">{user.name}</h3>
          <p className="text-xs text-gray-500">
            {user.lastSeen === "Online" ? "Online" : `Last seen ${user.lastSeen}`}
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <Video size={20} className="text-gray-600 dark:text-gray-300" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <Phone size={20} className="text-gray-600 dark:text-gray-300" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <Search size={20} className="text-gray-600 dark:text-gray-300" />
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <MoreVertical size={20} className="text-gray-600 dark:text-gray-300" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Contact info</DropdownMenuItem>
            <DropdownMenuItem>Select messages</DropdownMenuItem>
            <DropdownMenuItem>Mute notifications</DropdownMenuItem>
            <DropdownMenuItem>Clear messages</DropdownMenuItem>
            <DropdownMenuItem>Delete chat</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

