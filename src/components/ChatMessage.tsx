import React from 'react';
import { Bot, User } from 'lucide-react';

type MessageProps = {
  content: string;
  isBot: boolean;
};

export default function ChatMessage({ content, isBot }: MessageProps) {
  return (
    <div className={`p-6 ${isBot ? 'bg-gray-800' : 'bg-gray-900'}`}>
      <div className="max-w-3xl mx-auto flex gap-4">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
          isBot ? 'bg-green-600' : 'bg-blue-600'
        }`}>
          {isBot ? <Bot size={20} /> : <User size={20} />}
        </div>
        <div className="flex-1">
          <p className="text-gray-200 leading-relaxed">{content}</p>
        </div>
      </div>
    </div>
  );
}