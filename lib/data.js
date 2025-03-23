// Mock data for the WhatsApp clone

export const currentUser = {
  id: "user-1",
  name: "Thinley Dorji",
  avatar: "/placeholder.svg?height=200&width=200",
  status: "Available",
  phone: "+1 (555) 123-4567",
}

export const chats = [
  {
    id: "chat-1",
    user: {
      id: "user-2",
      name: "Tshering Norbu",
      avatar: "/placeholder.svg?height=200&width=200",
      lastSeen: "2 minutes ago",
    },
    messages: [
      {
        id: "msg-1",
        senderId: "user-2",
        text: "Hey, how are you doing?",
        timestamp: "10:30 AM",
        status: "read",
        isMe: false,
      },
      {
        id: "msg-2",
        senderId: "user-1",
        text: "I'm good, thanks! How about you?",
        timestamp: "10:32 AM",
        status: "read",
        isMe: true,
      },
      {
        id: "msg-3",
        senderId: "user-2",
        text: "Doing well! Are we still meeting tomorrow?",
        timestamp: "10:33 AM",
        status: "read",
        isMe: false,
      },
      {
        id: "msg-4",
        senderId: "user-1",
        text: "Yes, definitely! Looking forward to it.",
        timestamp: "10:35 AM",
        status: "delivered",
        isMe: true,
      },
    ],
    unreadCount: 0,
    lastMessage: {
      text: "Yes, definitely! Looking forward to it.",
      timestamp: "10:35 AM",
    },
  },
  {
    id: "chat-2",
    user: {
      id: "user-3",
      name: "Tashi",
      avatar: "/placeholder.svg?height=200&width=200",
      lastSeen: "Yesterday",
    },
    messages: [
      {
        id: "msg-5",
        senderId: "user-3",
        text: "Did you see the game last night?",
        timestamp: "Yesterday",
        status: "read",
        isMe: false,
      },
      {
        id: "msg-6",
        senderId: "user-1",
        text: "No, I missed it. How was it?",
        timestamp: "Yesterday",
        status: "read",
        isMe: true,
      },
    ],
    unreadCount: 0,
    lastMessage: {
      text: "No, I missed it. How was it?",
      timestamp: "Yesterday",
    },
  },
  {
    id: "chat-3",
    user: {
      id: "user-4",
      name: "Karma",
      avatar: "/placeholder.svg?height=200&width=200",
      lastSeen: "Online",
    },
    messages: [
      {
        id: "msg-7",
        senderId: "user-4",
        text: "Can you send me the project files?",
        timestamp: "9:15 AM",
        status: "read",
        isMe: false,
      },
    ],
    unreadCount: 1,
    lastMessage: {
      text: "Can you send me the project files?",
      timestamp: "9:15 AM",
    },
  },
  {
    id: "chat-4",
    user: {
      id: "user-5",
      name: "Nidup",
      avatar: "/placeholder.svg?height=200&width=200",
      lastSeen: "5 hours ago",
    },
    messages: [],
    unreadCount: 0,
    lastMessage: {
      text: "Thanks for the help!",
      timestamp: "Monday",
    },
  },
  {
    id: "chat-5",
    user: {
      id: "user-6",
      name: "Thug",
      avatar: "/placeholder.svg?height=200&width=200",
      lastSeen: "1 hour ago",
    },
    messages: [],
    unreadCount: 2,
    lastMessage: {
      text: "Are you coming to the party?",
      timestamp: "Tuesday",
    },
  },
  {
    id: "chat-6",
    user: {
      id: "user-7",
      name: "Web101",
      avatar: "/placeholder.svg?height=200&width=200",
      lastSeen: "Online",
    },
    messages: [],
    unreadCount: 5,
    lastMessage: {
      text: "tandin: Let's discuss this tomorrow",
      timestamp: "3:45 PM",
    },
  },
  {
    id: "chat-7",
    user: {
      id: "user-8",
      name: "Family Group",
      avatar: "/placeholder.svg?height=200&width=200",
      lastSeen: "Online",
    },
    messages: [],
    unreadCount: 0,
    lastMessage: {
      text: "Mom: Don't forget dinner on Sunday",
      timestamp: "Wednesday",
    },
  },
  {
    id: "chat-8",
    user: {
      id: "user-9",
      name: "Sangay",
      avatar: "/placeholder.svg?height=200&width=200",
      lastSeen: "Yesterday",
    },
    messages: [],
    unreadCount: 0,
    lastMessage: {
      text: "Call me when you're free",
      timestamp: "Last week",
    },
  },
]

