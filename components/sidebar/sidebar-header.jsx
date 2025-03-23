"use client"

import { currentUser } from "@/lib/data"
import { AvatarComponent } from "@/components/ui/avatar-component"
import { MoreVertical, MessageCircle, Users, History, Moon } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"

export function SidebarHeader() {
  const { setTheme, theme } = useTheme()

  return (
    <div className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-800">
      <AvatarComponent user={currentUser} />

      <div className="flex items-center space-x-2">
        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <Users size={20} className="text-gray-600 dark:text-gray-300" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <History size={20} className="text-gray-600 dark:text-gray-300" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <MessageCircle size={20} className="text-gray-600 dark:text-gray-300" />
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <MoreVertical size={20} className="text-gray-600 dark:text-gray-300" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>New group</DropdownMenuItem>
            <DropdownMenuItem>Starred messages</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Log out</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <Moon className="mr-2 h-4 w-4" />
              <span>Toggle theme</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

