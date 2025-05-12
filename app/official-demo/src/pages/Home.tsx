import { $generateHtmlFromNodes } from '@lexical/html';
import { Box } from '@mui/material';
import { EditorState, LexicalEditor } from 'lexical';
import { useEffect, useRef, useState } from 'react';
import { Message } from 'src/components/MessageList/types';
import { ChatInput } from '../components/ChatInput';
import { QuickReplies } from '../components/ChatQuickReplies';
import { MessageList } from '../components/MessageList';
import { UserList } from '../components/UserList/UserList';
import '../styles/Home.scss';
import '../styles/editor.scss';

const users = [
  { name: '刘雨欣', unread: 2, online: true },
  { name: '张明远', unread: 0, online: true },
  { name: '王思琪', unread: 1, online: false },
];

const quickReplies = [
  '好的，我明白了',
  '请稍等，我帮您查询',
  '这个问题需要一些时间的处理',
  '您说得对，我们会改进',
];

export function HomePage() {
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [messages, setMessages] = useState<Message[]>([
    { from: 'user', html: '我想咨询一下产品的使用问题', time: '09:29' },
    { from: '客服', html: '您好，请问有什么可以帮助您的吗？', time: '09:28' },
    { from: '客服', html: '好的，请您详细描述一下遇到的问题', time: '09:29' },
  ]);
  const [editorState, setEditorState] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (text?: string) => {
    const msg = text || editorState;
    if (!msg.trim()) return;
    setMessages([
      ...messages,
      { from: '客服', html: msg, time: new Date().toLocaleTimeString().slice(0, 5) },
    ]);
    setEditorState('');
  };

  function onChange(editorState: EditorState, editor: LexicalEditor, _tags: Set<string>) {
    editorState.read(() => {
      const html = $generateHtmlFromNodes(editor, null);
      setEditorState(html);
    });
  }

  return (
    <Box className="chat-root">
      <UserList users={users} selectedUser={selectedUser} onSelectUser={setSelectedUser} />
      <Box className="chat-main">
        <MessageList messages={messages} messagesEndRef={messagesEndRef} />
        <QuickReplies quickReplies={quickReplies} onSendQuickReply={handleSend} />
        <ChatInput onChange={onChange} onSend={() => handleSend()} disabled={!editorState.trim()} />
      </Box>
    </Box>
  );
}
