import React, { useState } from 'react';
import { Send, RotateCcw } from 'lucide-react';

type ChatInputProps = {
  readonly onSendMessage: (message: string) => void;
  readonly onRefresh: () => void;
};

export default function ChatInput({ onSendMessage, onRefresh }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="border-t border-gray-700 p-4 bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="flex gap-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500"
          />
          <button
            type="button"
            onClick={onRefresh}
            className="p-3 text-gray-400 hover:text-white transition-colors"
            title="Refresh conversation"
          >
            <RotateCcw size={20} />
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}
