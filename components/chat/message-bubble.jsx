import { Check, CheckCheck } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * @param {Object} props
 * @param {Object} props.message - Message object
 */
export function MessageBubble({ message }) {
  const getStatusIcon = () => {
    switch (message.status) {
      case "sent":
        return <Check size={16} className="text-gray-400" />
      case "delivered":
        return <CheckCheck size={16} className="text-gray-400" />
      case "read":
        return <CheckCheck size={16} className="text-blue-500" />
      default:
        return null
    }
  }

  return (
    <div className={cn("flex", message.isMe ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[70%] rounded-lg px-3 py-2 text-sm",
          message.isMe ? "bg-primary/90 text-white rounded-tr-none" : "bg-white dark:bg-gray-700 rounded-tl-none",
        )}
      >
        <p>{message.text}</p>
        <div
          className={cn(
            "flex items-center justify-end text-xs mt-1 space-x-1",
            message.isMe ? "text-white/70" : "text-gray-500",
          )}
        >
          <span>{message.timestamp}</span>
          {message.isMe && getStatusIcon()}
        </div>
      </div>
    </div>
  )
}

