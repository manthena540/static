import React from 'react';
import { MessageSquare, Plus } from 'lucide-react';

type ChatHistoryProps = {
  chats: Array<{ id: string; title: string }>;
  onSelectChat: (id: string) => void;
  selectedChatId: string;
};

export default function ChatHistory({ chats, onSelectChat, selectedChatId }: ChatHistoryProps) {
  return (
    <div className="w-64 bg-gray-900 h-screen flex flex-col">
      <button className="flex items-center gap-2 p-3 m-2 border border-gray-600 rounded hover:bg-gray-800 text-white transition-colors">
        <Plus size={16} />
        <span>New chat</span>
      </button>
      
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <button
            key={chat.id}
            onClick={() => onSelectChat(chat.id)}
            className={`flex items-center gap-2 p-3 w-full hover:bg-gray-800 text-left ${
              selectedChatId === chat.id ? 'bg-gray-800' : ''
            }`}
          >
            <MessageSquare size={16} className="text-gray-400" />
            <span className="text-white truncate">{chat.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}