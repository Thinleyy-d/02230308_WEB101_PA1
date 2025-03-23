"use client"

import { Search } from "lucide-react"

/**
 * @param {Object} props
 * @param {string} props.value - Current search value
 * @param {Function} props.onChange - Function to call when search value changes
 */
export function SearchInput({ value, onChange }) {
  return (
    <div className="p-2 bg-white dark:bg-gray-800">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search size={16} className="text-gray-400" />
        </div>
        <input
          type="text"
          className="w-full py-2 pl-10 pr-4 bg-gray-100 dark:bg-gray-700 border-none rounded-lg focus:outline-none focus:ring-1 focus:ring-primary text-sm"
          placeholder="Search or start new chat"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  )
}

