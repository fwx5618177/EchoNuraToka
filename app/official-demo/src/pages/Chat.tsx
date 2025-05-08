import { Box, Typography, TextField, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { EchoNuraTokaSDK } from '@echoNuraToka/sdk';

export function ChatPage() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [sdk, setSdk] = useState<EchoNuraTokaSDK | null>(null);

  useEffect(() => {
    const initializeSDK = async () => {
      const client = new EchoNuraTokaSDK({
        apiBaseUrl: import.meta.env.VITE_API_URL || 'http://localhost:3001',
      });
      await client.initialize();
      setSdk(client);
    };

    initializeSDK();
  }, []);

  const handleSend = () => {
    if (input.trim() && sdk) {
      setMessages([...messages, input]);
      setInput('');
      // TODO: Send message via SDK
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h1" gutterBottom>
        Customer Support Chat
      </Typography>

      <Box sx={{ mb: 4, height: '60vh', overflow: 'auto' }}>
        {messages.map((msg, i) => (
          <Typography key={i} paragraph>
            {msg}
          </Typography>
        ))}
      </Box>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <TextField
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <Button variant="contained" onClick={handleSend} disabled={!input.trim()}>
          Send
        </Button>
      </Box>
    </Box>
  );
}
