import  { useState } from 'react';
import ChatHistory from './components/ChatHistory';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';
import { Box } from '@mui/material';

const initialChats = [
  { id: '1', title: 'Getting Started with React' },
  { id: '2', title: 'TypeScript Best Practices' },
  { id: '3', title: 'Tailwind CSS Tips' },
];

const initialMessages = [
  { id: '1', content: 'Hello! How can I help you today?', isBot: true },
  { id: '2', content: 'I want to learn about React hooks.', isBot: false },
  { id: '3', content: 'React hooks are functions that allow you to use state and other React features in functional components.', isBot: true },
];

function App() {
  const [selectedChatId, setSelectedChatId] = useState('1');
  const [messages, setMessages] = useState(initialMessages);
  const [chats] = useState(initialChats);

  const handleSendMessage = (content: string) => {
    setMessages((prev) => [
      ...prev,
      { id: String(Date.now()), content, isBot: false },
      { id: String(Date.now() + 1), content: 'This is a sample response.', isBot: true },
    ]);
  };

  const handleRefresh = () => {
    console.log('Refreshing conversation...');
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: 'grey.900', color: 'white' }}>
      <ChatHistory chats={chats} onSelectChat={setSelectedChatId} selectedChatId={selectedChatId} />
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ flex: 1, overflowY: 'auto' }}>
          {messages.map((message) => (
            <ChatMessage key={message.id} content={message.content} isBot={message.isBot} />
          ))}
        </Box>
        <ChatInput onSendMessage={handleSendMessage} onRefresh={handleRefresh} />
      </Box>
    </Box>
  );
}

export default App;
