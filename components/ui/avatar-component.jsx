import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

/**
 * @param {Object} props
 * @param {Object} props.user - User object with name and avatar
 * @param {('sm'|'md'|'lg')} [props.size='md'] - Size of the avatar
 */
export function AvatarComponent({ user, size = "md" }) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  }

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  return (
    <Avatar className={sizeClasses[size]}>
      <AvatarImage src={user.avatar} alt={user.name} />
      <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
    </Avatar>
  )
}

